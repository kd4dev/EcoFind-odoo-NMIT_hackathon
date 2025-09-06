import express from "express";
import "dotenv/config";
import { signupController,loginController } from "../controllers/user.controllers.js";
const router = express.Router();

router.post("/signup", signupController);
router.post("/login", loginController);

export default router;
