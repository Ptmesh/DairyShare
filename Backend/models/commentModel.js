import { query } from "./userModel.js";

export const addComment = async (postId, userId, content) => {
  const result = await query(
    "INSERT INTO comments (post_id, user_id, content) VALUES ($1, $2, $3) RETURNING *",
    [postId, userId, content]
  );
  return result.rows[0];
};
