import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout as authLogout } from "../store/authSlice";
import { useDispatch } from "react-redux";
import axios from "axios";


function Logout() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error , setError] = useState();

  const logoutuser = async () => 
    {
      try {
        const response = await axios.post('/users/logout')
      } catch (error) {
        setError(error)
      }
      finally
      {
        navigate('/')
      }
    }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 m-8 rounded-lg  max-w-md shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Logout</h2>
        <p className="mb-6">Are you sure you want to logout?</p>
        <div className="flex justify-end ">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600" onClick={logoutuser}>
          Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Logout;
