import asyncHandler from "../utils/AsyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import cloudinary from "../utils/Cloudinary.js";
import { User } from "../models/userData.model.js";
import { Post } from "../models/postData.model.js";

const uploadPost = asyncHandler(async (req, res) => {

  const localuploaded_Post = req.file?.path;

  if (!localuploaded_Post)
    throw new ApiError(409, "Photo Not Uploaded Sucessfully");

  const uploadData = await cloudinary(localuploaded_Post);

  if (!uploadData) throw new ApiError(409, "Photo Not Uploaded Sucessfully");

  const { url } = uploadData;

  const { title, tags, caption, location } = req.body;


  const userId = req.user._id
  const username = req.user.username
  
  const post = await Post.create({
    userId: userId,
    username : username ,
    image: url,
    title : title,
    caption: caption,
    tags: tags,
    location: location,
    createdAt: Date().toLocaleString("hi-IN"),
  });

  const result = await User.findByIdAndUpdate(userId ,  { $push: { posts: post._id } } , {new : true})


  
  res.status(200).json(new ApiResponse(200, {post}, "PostUploaded Sucessfully"));
});

const getUserPost = asyncHandler(async(req , res) => 
    {

          const userId = req.user?._id;

          const allposts = await Post.find({userId}).select("-userId -comments")
         
          res.status(200)
          .json(new ApiResponse(200 , allposts , "All User Post Fetched Successfully"))

    })

const getHomePost = asyncHandler(async (req, res) => {

      const {currentPage , limit} = req.body
      const skip = (currentPage - 1) * limit;  // Calculate how many documents to skip

      const posts = await Post.find()
        .sort({ 'likes': "desc"})  // Sort by the given field
        .skip(skip)  // Skip documents to handle pagination
        .limit(Number(limit))  // Limit the number of documents returned
      
    
      res.status(200)
      .json(new ApiResponse(200 , {posts , currentPage } , "All User Post Fetched Successfully"))

});

export { uploadPost  , getUserPost , getHomePost};
