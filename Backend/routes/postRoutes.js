import express from "express";
import {
  createNewPost,
  deletePost,
  getPostById,
  getPosts,
  updatePost,
} from "../controllers/postControllers.js";
import { isAuthenticated } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/", isAuthenticated, createNewPost);
router.get("/", getPosts);
router.get("/:id", getPostById);
router.put("/:id", isAuthenticated, updatePost);
router.delete("/:id", isAuthenticated, deletePost);

export default router;
