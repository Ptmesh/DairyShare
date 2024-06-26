import {
  createPost,
  deletePostt,
  getPosttById,
  getPostts,
  updatePostt,
} from "../models/postModel.js";

export const createNewPost = async (req, res) => {
  const { title, content, isPrivate, imageUrl } = req.body;
  const userId = req.session.userId;
  const post = await createPost(userId, title, content, isPrivate, imageUrl);
  res.status(201).json(post);
};

export const getPosts = async (req, res) => {
  const posts = await getPostts();
  res.status(200).json(posts);
};

export const getPostById = async (req, res) => {
  const { postId } = req.params;
  const post = await getPosttById(postId);
  res.status(200).json(post);
};

export const updatePost = async (req, res) => {
  const { postId } = req.params;
  const { title, content, isPrivate, imageUrl } = req.body;
  const userId = req.session.userId;
  const post = await updatePostt(
    postId,
    userId,
    title,
    content,
    isPrivate,
    imageUrl
  );
  res.status(200).json(post);
};

export const deletePost = async (req, res) => {
  const { postId } = req.params;
  const userId = req.session.userId;
  const post = await deletePostt(postId, userId);
  res.status(200).json(post);
};
