import { addComment } from "../models/commentModel.js";

export const createComment = async (req, res) => {
  const { postId, content } = req.body;
  const userId = req.session.userId;
  const comment = await addComment(postId, userId, content);
  res.status(201).json(comment);
};

export const deleteComment = async (req, res) => {
  //
};

export const getCommentsByPost = async (req, res) => {
  //
};

export const updateComment = async (req, res) => {
  //
};
