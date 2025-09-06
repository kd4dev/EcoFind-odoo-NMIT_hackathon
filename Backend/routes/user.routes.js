import express from "express";
import "dotenv/config";
import { signupController,loginController ,addToCartController} from "../controllers/user.controllers.js";
const router = express.Router();

router.post("/signup", signupController);
router.post("/login", loginController);
router.post('/addToCart',addToCartController);
export default router;
