import React, { useEffect, useState } from "react";
import ImageOverlay from "./ImageOverlay";

import axios from "axios";
function FeedPage() {
  const [posts, setPosts] = useState([]);

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [overlayPost, setoverlayPost] = useState();

  // Function to open the overlay
  const openOverlay = (post) => {
    setIsOverlayOpen(true);
    setoverlayPost(post);
  };

  // Function to close the overlay
  const closeOverlay = () => {
    setIsOverlayOpen(false);
    setphotoId(null);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/post/getHomePost");
        setPosts(response.data.data.posts);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Feed Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {posts.map((post) => (
            <div
              key={post._id}
              className="relative"
              onClick={() => openOverlay(post)}
            >
              <img
                src={post.image}
                alt={`Photo ${post._id}`}
                className="w-full h-96 object-cover rounded-lg shadow-md"
              />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-shadow rounded-lg flex flex-col items-center justify-center space-y-4">
                <div className="flex flex-col items-center justify-center ">
                  <p className="text-white text-xl font-extralight font-mono break-all px-5">
                    {post.title}
                  </p>
                </div>
                <div className="space-x-3 flex items-center justify-center">
                  {/* Like (Heart) Icon with Outline */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 -1 24 24"
                    stroke="white"
                    strokeWidth="2"
                    className="w-5 h-5"
                    // onClick={like}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.998 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.498 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54l-1.45 1.31z"
                    />
                  </svg>
                  <p className="text-white font-semibold text-lg">
                    {post.likes.count}
                  </p>
                  {/* Comment Icon with Outline */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 -1 20 24"
                    stroke="white"
                    strokeWidth="2"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                    />
                  </svg>
                  <p className="text-white font-semibold text-lg ">
                    {post.comments.length}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {isOverlayOpen && <ImageOverlay closeOverlay={closeOverlay} post ={overlayPost} />}
      </main>
    </div>
  );
}

export default FeedPage;
