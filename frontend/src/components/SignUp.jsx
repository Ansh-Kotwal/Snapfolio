import React, { useState } from "react";
import Input from "./Input";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const onSubmit = async (userData) => {
    try {
      const response = await axios.post("/users/register", {
        firstName: userData.firstname,
        lastName: userData.lastname,
        username: userData.username,
        email: userData.email,
        password: userData.password,
      });
      navigate("/login");
    } catch (error) {
      switch (error.response.status) {
        case 409:
          setError(
            "User already exist . Please try another email and username "
          );
          break;
        default:
          setError(error);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md shadow-2xl shadow-blue-500/50">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 flex flex-row justify-between">
            <div>
              <Input
                label="First Name"
                name="FirstName"
                type="text"
                placeholder="Enter your First Name"
                {...register("firstname", {
                  required: true,
                })}
              />
            </div>
            <div>
              <Input
                label="Last Name"
                name="LastName"
                type="text"
                placeholder="Enter your Last Name"
                {...register("lastname", {
                  required: true,
                })}
              />
            </div>
          </div>
          <div className="mb-4">
            <Input
              label="Username"
              name="username"
              type="text"
              placeholder="Enter your username"
              {...register("username", {
                required: true,
              })}
            />
          </div>
          <div className="mb-4">
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your Email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
          </div>
          <div className="mb-6">
            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />
          </div>
          <div className="mb-6">
            {error && (
              <div className="mb-2">
                <div
                  className="text-red-600 bg-red-100 border border-red-400 px-4 py-3 rounded relative"
                  role="alert"
                >
                  {error}
                </div>
              </div>
            )}

            <button
              type="submit"
              className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-700 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create Account
            </button>

          </div>
        </form>

        <div>
          Already got an account !!
          <Link to="/login" className="text-blue-700 font-semibold"> Sign In </Link>
        </div>
      </div>
    </div>
  );
}

export { SignUp };
