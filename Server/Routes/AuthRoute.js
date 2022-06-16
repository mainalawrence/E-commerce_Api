"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Login_1 = require("../Authentication/Login");
const Signup_1 = require("../Authentication/Signup");
const router = express_1.default.Router();
router.post('/login', Login_1.login);
router.post('/signup', Signup_1.signUp);
exports.default = router;
