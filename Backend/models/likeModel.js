import { query } from "./userModel.js";

export const addLike = async (postId, userId) => {
  const result = await query(
    "INSERT INTO likes (post_id, user_id) VALUES ($1, $2) RETURNING *",
    [postId, userId]
  );
  return result.rows[0];
};
