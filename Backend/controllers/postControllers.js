import { createPost } from "../models/postModel.js";

export const createNewPost = async (req, res) => {
  const { title, content, isPrivate, imageUrl } = req.body;
  const userId = req.session.userId;
  const post = await createPost(userId, title, content, isPrivate, imageUrl);
  res.status(201).json(post);
};

export const getPosts = async (req, res) => {
  //
};

export const getPostById = async (req, res) => {
  //
};

export const updatePost = async (req, res) => {
  //
};

export const deletePost = async (req, res) => {
  //
};
