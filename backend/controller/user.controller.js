import asyncHandler from "../utils/AsyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import { User } from "../models/userData.model.js";
import generateAccessAndRefreshToken from "../utils/Token.js";
import mongoose, { trusted } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, username, password, email } = req.body;

  // if some method find any field(name , username....) empty (field?.trim ==="") it will instantly return true
  const emptyField = [firstName, lastName, username, password, email].some(
    (field) => field?.trim === ""
  );

  if (emptyField) throw new ApiError(400, "All fields are required");

  const userAlreadyPresent = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (userAlreadyPresent)
    throw new ApiError(409, "User already exist . Please try another email and username ");


  const user = await User.create({
    firstName: firstName.toLowerCase(),
    lastName: lastName.toLowerCase(),
    fullName: (firstName + lastName).toLowerCase(),
    email,
    lastLogin: Date().toLocaleString("hi-IN"),
    username: username.toLowerCase(),
    password
  });

  const createdUser = await User.findById(user._id)?.select(
    "-password -refreshToken"
  );

  if (!createdUser)
    throw new ApiError(
      500,
      "Something went wrong while registering user , please try again"
    );

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User Registered Successfully"));
});

const loginUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!password && !(email || username)) {
    throw new ApiError(409, "Please enter the required fields");
  }

  const user = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (!user) throw new ApiError(404, "User not found , Please Sign up");

  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) throw new ApiError(409, "Incorrect Password");

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    user._id
  );

  const loggedInUser = await User.findByIdAndUpdate(
    user._id,
    {
      $set: { lastLogin: Date().toLocaleString("hi-IN") },
    },
    { new: true }
  ).select("-password -refreshToken -posts");

  const options = {
    maxAge: 30 * 24 * 60 * 60,
    httpOnly: true,
    secure: true,
  };



  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(new ApiResponse(200, {loggedInUser, accessToken} , "User logged in Successfully"));
});

const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $unset: { refreshToken: "" },
    },
    {
      // findByIdAndUpdate return new modified value instead of old
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged out successfully"));
});

const refreshAccessToken = asyncHandler(async (req, res) => {
  const token = req.cookies.refreshToken || req.body.refreshToken;

  if (!token) throw new ApiError(409, "Unathuroized Request");

  const decodedInfo = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);

  const user = await User.findById(decodedInfo._id);

  if (!user) throw new ApiError(409, "Unathuroized Request");

  if (user.refreshToken.token != token) {
    throw new ApiError(401, "Invalid Refresh Token");
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    user._id
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(new ApiResponse(200, {accessToken}, "Access token generated successfully"));
});

const updatePassword = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user?._id);

  if (!user) throw new ApiError(409, "Unathuroized Request");

  const { oldPassword, newPassword, confirmPassword } = req.body;

  const isPasswordValid = await user.isPasswordCorrect(oldPassword);

  if (!isPasswordValid) throw new ApiError(409, "Old password is incorrect");

  if (newPassword !== confirmPassword)
    throw new ApiError(409, "Password does not match , Please enter again");

  user.password = newPassword;
  user.refreshToken = undefined; // unsets the field (delete the field)

  await user.save();

  const options = {
    httpOnly: true,
    secure: true,
  };

  res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(
      new ApiResponse(200, {}, "Password reset successful. Please log in again")
    );
});

const getUser = asyncHandler(async(req , res) => 
  {

    const user = req.user

    res.status(200)
    .json(new ApiResponse(200 , {} , "User data fetched sucessfully"))


  })


const jokes = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json(
      new ApiResponse(200, {"jokes" : "you are gay !!!!"}, "Just for  checking")
    );
});

export {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  updatePassword,
  getUser,
  jokes
};
