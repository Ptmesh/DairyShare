import pgSession from "connect-pg-simple";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import session from "express-session";
import pg from "pg";
import authRoutes from "./routes/authRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import likeRoutes from "./routes/likeRoutes.js";
import postRoutes from "./routes/postRoutes.js";

const { Pool } = pg;

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
});

app.use(
  session({
    store: new (pgSession(session))({
      pool,
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: true,
    },
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/likes", likeRoutes);
app.use("/api/comments", commentRoutes);

const checkDbConnection = async () => {
  try {
    await pool.query("SELECT NOW()");
    console.log("Connected to the database successfully.");
  } catch (err) {
    console.error("Failed to connect to the database:", err);
  }
};

app.listen(PORT, async () => {
  await checkDbConnection();
  console.log(`Server is running on port ${PORT}`);
});
