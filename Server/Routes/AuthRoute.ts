import  Express from "express";
import passport from "../Authentication/AuthPassport";

import { login, LoginWithFacebook, LoginWithGoogle } from "../Authentication/Login";
import { signUp } from "../Authentication/Signup";

const router=Express.Router();

router.post('/login',login);

router.post('/signup',signUp);

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get('/facebook/',passport.authenticate('facebook'))


router.get('/google/callback',passport.authenticate('google',{scope:['profile']}),LoginWithGoogle)

router.get('/facebook/callback',passport.authenticate('facebook'),LoginWithFacebook)

export default router;