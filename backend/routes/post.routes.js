import { Router } from "express";
import { upload } from "../middleware/multer.middleware.js";
import {uploadPost , getUserPost , getHomePost} from '../controller/post.controller.js'
import verifyJWT from "../middleware/auth.middleware.js";

const router = Router();

router.route("/uploadPost").post(verifyJWT , upload.single("uploaded_post"), uploadPost);

router.route("/getUserPost").get(verifyJWT , getUserPost)

router.route("/getHomePost").get(verifyJWT , getHomePost)

export default router;

