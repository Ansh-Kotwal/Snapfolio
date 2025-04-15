import React, { useState } from "react";

function ImageOverlay({ closeOverlay, post }) {
  return (
    <div className="relative">
      {/* Thumbnail or button to trigger the overlay */}

      {/* Overlay div */}
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
        <div className="relative flex w-4/5 max-w-6xl bg-gray-900 rounded-lg shadow-lg">
          {/* The displayed image */}
          <div className="w-3/5 p-4">
            <img
              src="https://via.placeholder.com/600"
              alt="Large view"
              className="max-w-full max-h-full rounded-lg shadow-md"
            />
          </div>

          {/* Comment Section */}
          <div className="w-2/5 p-4 bg-gray-800 text-gray-200 overflow-y-auto max-h-full rounded-r-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">Comments</h2>

            <div className="space-y-6">
              {/* Styled Comment 1 */}
              <div className="flex space-x-4 border-b border-gray-700 pb-4">
                {/* User Avatar */}
                <div>
                  <img
                    src="https://via.placeholder.com/40"
                    alt="User"
                    className="w-10 h-10 rounded-full"
                  />
                </div>
                {/* Comment Body */}
                <div className="flex-1">
                  <p className="font-semibold text-white">
                    John Doe{" "}
                    <span className="text-sm text-gray-500">• 2 hours ago</span>
                  </p>
                  <p className="text-gray-400">
                    This is a beautiful image! The colors are stunning.
                  </p>
                </div>
              </div>

              {/* Styled Comment 2 */}
              <div className="flex space-x-4 border-b border-gray-700 pb-4">
                {/* User Avatar */}
                <div>
                  <img
                    src="https://via.placeholder.com/40"
                    alt="User"
                    className="w-10 h-10 rounded-full"
                  />
                </div>
                {/* Comment Body */}
                <div className="flex-1">
                  <p className="font-semibold text-white">
                    Jane Smith{" "}
                    <span className="text-sm text-gray-500">• 1 day ago</span>
                  </p>
                  <p className="text-gray-400">
                    Wow! This view is absolutely stunning. I'd love to visit
                    this place someday.
                  </p>
                </div>
              </div>
            </div>

            {/* Comment input box */}
            <div className="mt-6">
              <textarea
                className="w-full p-2 border border-gray-700 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
                placeholder="Add a comment..."
              />
              <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-all">
                Post Comment
              </button>
            </div>
          </div>

          {/* Close button */}
          <button
            className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-gray-400 transition-all"
            onClick={closeOverlay}
          >
            &times;
          </button>
        </div>
      </div>
    </div>

    //    <div>{console.log("hererherherherhe")}</div>
  );
}

export default ImageOverlay;
