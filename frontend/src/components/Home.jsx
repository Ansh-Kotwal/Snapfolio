import React, { useState } from "react";
import PhotoGallery from "./Profile";

function Home() {
  const [photos, setPhotos] = useState([
    { url: "https://via.placeholder.com/150" },
    { url: "https://via.placeholder.com/200" },
    { url: "https://via.placeholder.com/250" },
    { url: "https://via.placeholder.com/300" },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Header 
      <header className="w-full bg-blue-600 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-3xl font-bold">Photo Uploader</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/home" className="text-white hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/profile" className="text-white hover:underline">
                  Profile
                </a>
              </li>
              <li>
                <a href="/logout" className="text-white hover:underline">
                  Logout
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      */}

      {/* Main Content */}
      {//<main className="flex-grow container mx-auto px-4 py-8">
      //  {/* Photo Gallery Section */}
      //  {/* <PhotoGallery photos={photos} /> */}
     // </main>
     }

      {/* Footer */}
      
      {/* <footer className="w-full bg-gray-800 p-4 mt-8">
        <div className="container mx-auto text-center text-gray-400">
          &copy; 2024 Photo Uploader. All rights reserved.
        </div>
      </footer> */}
    </div>
  );
}

export default Home;
