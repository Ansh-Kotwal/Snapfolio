import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";

function Profile() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/post/getUserPost");
        setPosts(response.data.data)
        setLoader(false)
      } catch (error) {
        setError(error);
      }
    })();
  }, []);

  if(loader)
    return <LoadingSpinner/>;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Uploads</h2>
        {posts.length === 0 ? (
          <p className="text-gray-600">
            No photos uploaded yet. Start by uploading your first photo!
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {posts.map((post, index) => (
              <div key={index} className="relative">
                <img
                  src={post.image}
                  alt={`Photo ${index + 1}`}
                  className="w-full h-96 object-cover rounded-lg shadow-md"
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity rounded-lg flex items-center justify-center">
                  <button
                    onClick={() => alert(`Delete photo ${index + 1}?`)}
                    className="text-white font-bold"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Profile;
