import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/">Social Feed</Link>
        </h1>
        <div className="flex items-center gap-4">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
          {user ? (
            <>
              <Link to="/profile" className="hover:text-gray-200">
                Profile
              </Link>
              <button
                className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
                onClick={() => {
                  // Firebase logout logic goes here
                  alert("Logout functionality to be implemented!");
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <button
              className="bg-green-500 px-4 py-2 rounded hover:bg-green-600"
              onClick={() => {
                // Redirect to login or trigger GoogleAuthButton
                alert("Login functionality to be implemented!");
              }}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
