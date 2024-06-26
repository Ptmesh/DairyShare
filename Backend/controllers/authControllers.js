import bcrypt from "bcryptjs";
import { query } from "../models/userModel.js";

export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const result = await query(
    "INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING *",
    [username, email, hashedPassword]
  );
  res.status(201).json(result.rows[0]);
};

export const loginUser = async (req, res) => {
  // Implementation of login logic
};

export const logoutUser = async (req, res) => {
  // Implementation of logout logic
};
