import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors(
    {
        origin : process.env.CORS_ORIGIN ,
        credentials : true
    }))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true , limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//router import

// default import hence anyName
import userRouter from "./routes/user.routes.js"
import postRouter from './routes/post.routes.js'
import operationRouter from './routes/operation.routes.js'

//router declearation
app.use("/api/v1/users" , userRouter)  /// api/v1/users/register etc

app.use("/api/v1/post" , postRouter)  /// api/v1/users/register

app.use("/api/v1/operation" , operationRouter)

export {app}