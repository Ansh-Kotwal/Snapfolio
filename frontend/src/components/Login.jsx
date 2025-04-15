import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Input from "./Input.jsx";
import { useDispatch } from "react-redux";
import { login as authLogin } from "../store/authSlice";
import axios from "axios";

function Login() {
  const { register, handleSubmit } = useForm();


  const navigate = useNavigate();
  const [err, setError] = useState(null);

  const onSubmit = async (userData) => {
    try {
      const response = await axios.post("/users/login", {
        email: userData.email,
        password: userData.password,
      });
     // console.log(response.data.accessToken)
      localStorage.setItem('access_token', response.data.data.accessToken);
    //  console.log(localStorage.getItem('access_token'))
      navigate("/home");
    } catch (error) {
      switch (error.response.status) {
        case 409:
          setError(
            "Sorry, your password was incorrect. Please double-check your password."
          );
          break;
        case 404:
          setError("User not found , Please Sign up");
          break;
        default:
          setError(error);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-2xl shadow-blue-500/50">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div>
              <Input
                label="Email address"
                name="email"
                type="email"
                autoComplete="email"
                {...register("email", {
                  required: true,
                  validate: {
                    matchPatern: (value) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                        value
                      ) || "Email address must be a valid address",
                  },
                })}
              />
            </div>
            <div>
              <Input
                label="Password"
                name="password"
                type="password"
                autoComplete="current-password"
                {...register("password", {
                  required: true,
                })}
              />
            </div>
          </div>
          <div>
            {err && (
              <div className="mb-4">
                <div
                  className="text-red-600 bg-red-100 border border-red-400 px-4 py-3 rounded relative"
                  role="alert"
                >
                  {err}
                </div>
              </div>
            )}
            <button
              type="submit"
              className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-700 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
          <button className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-700 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <Link to="/signup">New to our Services !! Sign Up</Link>
          </button>
        </form>
      </div>
    </div>
  );
}

export { Login };
