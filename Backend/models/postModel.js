import { query } from "./userModel.js";

export const createPost = async (
  userId,
  title,
  content,
  isPrivate,
  imageUrl
) => {
  const result = await query(
    "INSERT INTO posts (user_id, title, content, is_private, image_url) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [userId, title, content, isPrivate, imageUrl]
  );
  return result.rows[0];
};

export const getPostts = async () => {
  const result = await query("SELECT * FROM posts");
  return result.rows;
};

export const getPosttById = async (postId) => {
  const result = await query("SELECT * FROM posts WHERE id = $1", [postId]);
  return result.rows[0];
};

export const updatePostt = async (
  postId,
  userId,
  title,
  content,
  isPrivate,
  imageUrl
) => {
  const result = await query(
    "UPDATE posts SET title = $1, content = $2, is_private = $3, image_url = $4 WHERE id = $5 AND user_id = $6 RETURNING *",
    [title, content, isPrivate, imageUrl, postId, userId]
  );
  return result.rows[0];
};

export const deletePostt = async (postId, userId) => {
  const result = await query(
    "DELETE FROM posts WHERE id = $1 AND user_id = $2 RETURNING *",
    [postId, userId]
  );
  return result.rows[0];
};
