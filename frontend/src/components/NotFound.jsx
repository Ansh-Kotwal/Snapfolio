import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
    <p className="text-2xl text-gray-600 mb-8">Page Not Found</p>
    <Link to="/">
      <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
        Go Back to Home
      </button>
    </Link>
  </div>
  )
}

export default NotFound



