import { query } from "./userModel.js";

export const addComment = async (postId, userId, content) => {
  const result = await query(
    "INSERT INTO comments (post_id, user_id, content) VALUES ($1, $2, $3) RETURNING *",
    [postId, userId, content]
  );
  return result.rows[0];
};

export const getComments = async (postId) => {
  const result = await query("SELECT * FROM comments WHERE post_id = $1", [
    postId,
  ]);
  return result.rows;
};

export const deleteCommentt = async (commentId, userId) => {
  const result = await query(
    "DELETE FROM comments WHERE id = $1 AND user_id = $2 RETURNING *",
    [commentId, userId]
  );
  return result.rows[0];
};

export const updateCommentt = async (commentId, userId, content) => {
  const result = await query(
    "UPDATE comments SET content = $1 WHERE id = $2 AND user_id = $3 RETURNING *",
    [content, commentId, userId]
  );
  return result.rows[0];
};
