import express from "express"
import { loginUser,registerUser } from "../controllers/userController.js"
const userRouter = express.Router();// using express router we create get post and all other method

userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)

export default userRouter;