import React from "react";
import backgroundImage from "../assets/backgroundImage.jpg";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div
      className="min-h-screen bg-gray-100 flex flex-col justify-center items-center"
      // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Getting Started Section */}
      <div>
        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600 my-12">
          Snapfolio
        </h1>

        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Our Service
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Start your journey with us today!
        </p>
        <Link
          to="/login"
          className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

export { LandingPage };
