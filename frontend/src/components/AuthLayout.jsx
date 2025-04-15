import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function AuthLayout({ children }) {
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    (async () => {
      try {
       // console.log(localStorage.getItem('access_token'))
        const response = await axios.get("/users/getUser");
      
        if (response.status == 401) {
           console.log("hrtr")
          const response = await axios.get("/users/refreshAccessToken");

          if (!response.ok) navigate("/");

          localStorage.setItem("access_token", response.data.data.accessToken);
        }

        setLoader(false);
      } catch (error) {
        console.log(error);
        navigate("/");
      }
    })();
  }, [navigate, location]);

  return <>{loader ? <></> : children}</>;
}

export default AuthLayout;
