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
  try {
    const post = await createPost(userId, title, content, isPrivate, imageUrl);
    res.status(201).json(post);
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ error: "Failed to create post" });
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await getPostts();
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
};

export const getPostById = async (req, res) => {
  const { postId } = req.params;
  try {
    const post = await getPosttById(postId);
    res.status(200).json(post);
  } catch (error) {
    console.error("Error fetching post by ID:", error);
    res.status(500).json({ error: "Failed to fetch post by ID" });
  }
};

export const updatePost = async (req, res) => {
  const { postId } = req.params;
  const { title, content, isPrivate, imageUrl } = req.body;
  const userId = req.session.userId;
  try {
    const post = await updatePostt(
      postId,
      userId,
      title,
      content,
      isPrivate,
      imageUrl
    );
    res.status(200).json(post);
  } catch (error) {
    console.error("Error updating post:", error);
    res.status(500).json({ error: "Failed to update post" });
  }
};

export const deletePost = async (req, res) => {
  const { postId } = req.params;
  const userId = req.session.userId;
  try {
    const post = await deletePostt(postId, userId);
    res.status(200).json(post);
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).json({ error: "Failed to delete post" });
  }
};
