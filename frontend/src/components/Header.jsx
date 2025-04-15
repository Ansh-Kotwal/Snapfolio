import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full bg-blue-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600 ">
          <Link
            to="/home"
          >
            Snapfolio
          </Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/home"
                className="text-white hover:bg-blue-500 px-3 py-2 rounded-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="text-white hover:bg-blue-500 px-3 py-2 rounded-md"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/photoUploader"
                className="text-white hover:bg-blue-500 px-3 py-2 rounded-md"
              >
                Upload
              </Link>
            </li>
            <li>
              <Link
                to="/logout"
                className="text-white hover:bg-blue-500 px-3 py-2 rounded-md"
              >
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
