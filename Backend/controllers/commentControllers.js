import {
  addComment,
  deleteCommentt,
  getComments,
  updateCommentt,
} from "../models/commentModel.js";

export const createComment = async (req, res) => {
  const { postId, content } = req.body;
  const userId = req.session.userId;
  const comment = await addComment(postId, userId, content);
  res.status(201).json(comment);
};

export const deleteComment = async (req, res) => {
  const { commentId } = req.params;
  const userId = req.session.userId;
  const comment = await deleteCommentt(commentId, userId);
  res.status(200).json(comment);
};

export const getCommentsByPost = async (req, res) => {
  //
  const { postId } = req.params;
  const comments = await getComments(postId);
  res.status(200).json(comments);
};

export const updateComment = async (req, res) => {
  //
  const { commentId } = req.params;
  const { content } = req.body;
  const userId = req.session.userId;
  const comment = await updateCommentt(commentId, userId, content);
  res.status(200).json(comment);
};
