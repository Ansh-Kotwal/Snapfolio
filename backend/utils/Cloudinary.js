import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

const uploadOnCloudinary = async (localFilePath) => {
  try {
    // Configuration
    cloudinary.config({
      cloud_name: "dermcf6iy",
      api_key: process.env.CLOUDINARY_KEY,
      api_secret: process.env.CLOUDINARY_SECRET, // Click 'View API Keys' above to copy your API secret
    });

    console.log("----- Uploading File ----");
    // Upload an image
    const uploadResult = await cloudinary.uploader.upload(localFilePath);

    console.log("----- File Uploaded ----");

    fs.unlinkSync(localFilePath);

    return uploadResult;
  } catch (error) {
    console.log(error);
    console.log("Error while uploading file on cloudinary");
    fs.unlinkSync(localFilePath); //remove failed operation file if uploaded
    return null;
  }
};

export default uploadOnCloudinary;
