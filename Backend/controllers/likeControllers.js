import { addLike, deleteLike } from "../models/likeModel.js";

export const likePost = async (req, res) => {
  const { postId } = req.body;
  const userId = req.session.userId;
  const like = await addLike(postId, userId);
  res.status(201).json(like);
};

export const unlikePost = async (req, res) => {
  const { postId } = req.body;
  const userId = req.session.userId;
  const like = await deleteLike(postId, userId);
  res.status(201).json(like);
};
