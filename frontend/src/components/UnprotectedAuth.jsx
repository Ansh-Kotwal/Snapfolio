import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UnprotectedAuth({ children }) {

  
  const [error , setError] = useState();
  const [loader , setLoader] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
     ;(async()=> 
      {
         try {
          const response = await axios.get("/users/getUser")
          navigate("/home")

         } catch (error) {
           setLoader(false)
           setError(error)
         }
      })()
    
  }, []);

  return (loader ? <></> : children);
}

export default UnprotectedAuth;
