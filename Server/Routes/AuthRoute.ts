import  Express from "express";
import { login } from "../Authentication/Login";
import { signUp } from "../Authentication/Signup";

const router=Express.Router();

router.post('/login',login);

router.post('/signup',signUp);

export default router;