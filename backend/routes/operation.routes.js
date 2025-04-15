import { Router } from "express";
import {updateLikes , addComment} from "../controller/operation.controller.js";
import verifyJWT from "../middleware/auth.middleware.js";

const router = Router();

router.route("/updateLikes").put(verifyJWT , updateLikes );
router.route("/addComment").put(verifyJWT , addComment );


export default router;

