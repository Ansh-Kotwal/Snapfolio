import { User } from "../models/userData.model.js";

const generateAccessAndRefreshToken = async (userId) => 
    {
           
     try {
           const user = await User.findById(userId)
   
           const accessToken = user.generateAccessToken()
           const refreshToken = user.generateRefreshToken()

           user.refreshToken.token = refreshToken
           user.refreshToken.createdAt = Date.now()
           
           await user.save({ validateBeforeSave: false })

           return {accessToken , refreshToken}
   
     } catch (error) {
        console.log(error.message)
     }

    };

 export default generateAccessAndRefreshToken