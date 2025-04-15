import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import PhotoSubmissionDialog from "./PhotoSubmissionDialog";
import UploadingLoader from "./UploadingLoader";

function PhotoUploader() {
  const { register, handleSubmit, onChange } = useForm();
  const [preview, setPreview] = useState(null);
  const [image, setImage] = useState();
  const [error, setError] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (userData) => {
    if (!image) return; // Check if an image is selected

    const formData = new FormData(); // Create a FormData object

    formData.append("uploaded_post", image);
    formData.append("title", userData.title);
    formData.append("tags", userData.tags);
    formData.append("caption", userData.caption);
    formData.append("location", userData.location);

    try {
      setIsLoading(true); // Set loading state to true
      const response = await axios.post("/post/uploadPost", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set the content type to multipart/form-data
        },
      });

      setIsLoading(false); 
      setIsSubmitted(true);
    } catch (error) {
       setIsLoading(false)
      switch (error.response.status) {
        case 409:
          setError("Photo Not Uploaded Sucessfully !!! Please Try Again");
          break;
        default:
          setError(error);
      }
    }
  };

  const closeModal = () => {
    setIsSubmitted(false);
  };


  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
      setImage(file);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <h2 className="text-2xl mt-12 font-bold text-gray-800 mb-4">
        Welcome to the Photo Uploader!
      </h2>
      <p className="text-gray-700 mb-6">
        Upload your photos and manage your gallery with ease.
      </p>

      <div className="w-full max-w-lg m-4 p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Upload Image
        </h2>
        {preview && (
          // <div className="w-full p-1 max-w-lg space-y-6 bg-white rounded-lg shadow-md">
          <img
            src={preview}
            alt="Preview"
            className="rounded-md shadow-md object-contain size-max"
          />
          // </div>
        )}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Title Field */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              className="block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              {...register("title", { required: true })}
            />
          </div>

          {/* Caption Field */}
          <div>
            <label
              htmlFor="caption"
              className="block text-sm font-medium text-gray-700"
            >
              Caption
            </label>
            <textarea
              id="caption"
              name="caption"
              rows="3"
              className="block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              {...register("caption")}
            />
          </div>

          {/* Tags Field */}
          <div>
            <label
              htmlFor="tags"
              className="block text-sm font-medium text-gray-700"
            >
              Tags (comma separated)
            </label>
            <input
              id="tags"
              name="tags"
              type="text"
              className="block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              {...register("tags")}
            />
          </div>

          {/* Location Field */}
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              Location
            </label>
            <input
              id="location"
              name="location"
              type="text"
              className="block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              {...register("location")}
            />
          </div>

          {/* Image Upload Field */}
          <div className="flex flex-col items-center justify-center">
            <label
              htmlFor="image"
              className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Upload Photo
              <input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                className="hidden"
                {...register("image", { required: true })}
                onChange={handleImageChange}
              />
            </label>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <UploadingLoader isLoading={isLoading} />
      <PhotoSubmissionDialog isOpen={isSubmitted} onClose={closeModal} />
    </div>
  );
}

export { PhotoUploader };
