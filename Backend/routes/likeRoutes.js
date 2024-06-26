import express from "express";
import { likePost, unlikePost } from "../controllers/likeControllers.js";
import { isAuthenticated } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/", isAuthenticated, likePost);
router.delete("/", isAuthenticated, unlikePost);

export default router;
