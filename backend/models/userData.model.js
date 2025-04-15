import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Post } from "./postData.model.js";

const userDataSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    firstName: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: {
      type: [String], // Array of strings
      default: ["user"],
    },
    status: {
      type: String,
      enum: ["active", "inactive", "suspended"],
      default: "active",
    },
    profile: {
      firstName: { type: String },
      lastName: { type: String },
      address: { type: String },
    },
    preferences: {
      language: { type: String, default: "en" },
      //timezone: { type: String, default: "America/New_York" },
    },
    lastLogin: {
      type: String,
    },
    refreshToken: {
      token: { type: String },
      createdAt: { type: Date, default: Date.now() },
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    updatedAt: {
      type: Date,
      default: Date.now(),
    },
    posts:[{
      type:  mongoose.Schema.Types.ObjectId, // Reference to the user who created the post
      ref: "Post", // Reference to the User model
    }],
  },
  { timestamps: true }
);

// Pre-save hook to update the updatedAt field before saving
userDataSchema.pre("save", async function (next) {
  this.updatedAt = Date.now();
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  next();
});

userDataSchema.methods.isPasswordCorrect = async function (userPassword) {
  return await bcrypt.compare(userPassword, this.password);
};

userDataSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      //Payload
      _id: this._id,
      email: this.email,
      username: this.username,
      fullName: this.fullName,
    },

    //Secret

    process.env.ACCESS_TOKEN_SECRET,

    //Token
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

userDataSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      username: this.username,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

export const User = mongoose.model("User", userDataSchema);
