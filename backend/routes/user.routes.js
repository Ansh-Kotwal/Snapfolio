import { Router } from "express";
import verifyJWT from "../middleware/auth.middleware.js";
import { loginUser, logoutUser, refreshAccessToken, registerUser , updatePassword , jokes, getUser} from "../controller/user.controller.js";


const router = Router()

router.route("/register").post(registerUser)

router.route("/login").post(loginUser)

router.route("/logout").post(verifyJWT , logoutUser)

router.route("/refreshAccessToken").post(refreshAccessToken)

router.route("/updatePassword").post(verifyJWT , updatePassword)

router.route("/getUser").get(verifyJWT , getUser)

router.route("/auth").get(verifyJWT)

router.route("/jokes").get(jokes)



export default router