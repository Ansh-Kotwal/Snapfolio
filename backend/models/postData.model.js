import mongoose from "mongoose";
import { User } from "./userData.model.js";

const postDataSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Reference to the user who created the post
    ref: "User", // Reference to the User model
    required: true,
  },
  title: {
    type: String, // URL or path to the image file
    required: true,
  },
  image: {
    type: String, // URL or path to the image file
    required: true,
  },
  caption: {
    type: String, // Optional caption for the post
    maxlength: 2200,
  },
  tags: {
    type: [String], // Array of tags (hashtags) associated with the post
    default: [],
  },
  location: {
    type: String, // Optional location where the post was created
    maxlength: 100,
  },
  likes: 
    {
      count: {
        type: Number,
        default: 0,
        required: true,
      },
      likedBy: [{
        type: mongoose.Schema.Types.ObjectId, // Array of user IDs who liked the post
        ref: "User",
      }],
      dislikeBy: [{
        type: mongoose.Schema.Types.ObjectId, // Array of user IDs who disliked the post
        ref: "User",
      }],
    }
  ,
  comments: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to the user who made the comment
        ref: "User",
        required: true,
      },
      text: {
        type: String, // Text of the comment
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now, // Timestamp of when the comment was created
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now, // Timestamp of when the post was created
  },
  updatedAt: {
    type: Date,
    default: Date.now, // Timestamp of when the post was last updated
  },
});

postDataSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

export const Post = mongoose.model("Post", postDataSchema);
