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
