import { Post } from "../models/postData.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/AsyncHandler.js";

const updateLikes = asyncHandler(async (req, res) => {
  const userId = req.user?._id;
  const { postId } = req.body;

  const post = await Post.findById(postId);

  if (!post) {
    throw new ApiError(404, "Post not found");
  }

  // removing like => decreasing count
  if (post.likes.likedBy.includes(userId)) {
    post.likes.count--;
    post.likes.likedBy.pull(userId);

    await post.save();

    return res
      .status(200)
      .json(new ApiResponse(200, {}, "Post Already Liked By User "));
  }

  post.likes.count++; // Modify a field
  post.likes.likedBy.push(userId); // Add to an array field

  await post.save();

  res.status(200).json(new ApiResponse(200, {}, "Post liked successfully!"));
});

const addComment = asyncHandler(async (req, res) => 
    {

     const {postId , text} = req.body
     
     const userId = req.user?._id
    

     const post = await Post.findByIdAndUpdate(postId , {$push : {comments : {userId , text }}})

     if(!post)
        throw new ApiError(401 , "Post not found")

     res.status(200).json(new ApiResponse(200 , {} , "Comment added successfully"))



    });

const updateComment = asyncHandler(async (req, res) => {});

export { updateLikes , addComment };
