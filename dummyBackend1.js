// npm install express mongoose bcryptjs jsonwebtoken dotenv helmet cors express-rate-limit
// Optional (development helpers)
// npm install --save-dev nodemon
// nodemon → restarts server automatically on file changes (dev only).
// Run with:
// npx nodemon server.js

// node server.js

// .env
// MONGODB_URI=mongodb://127.0.0.1:27017/mern_login
// JWT_SECRET=your_super_long_random_secret_here
// PORT=5000


// Explanation of each:
// express → web framework (routing, server).
// mongoose → connect & interact with MongoDB.
// bcryptjs → password hashing (instead of storing plain text).
// jsonwebtoken → issue & verify JWT tokens.
// dotenv → load secrets from .env file.
// helmet → adds security headers (XSS, sniffing, etc).
// cors → allow frontend (React) to call backend.
// express-rate-limit → limits repeated requests (protects login/register).


// server.js
import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";

dotenv.config(); // Load .env

const app = express();
app.use(express.json()); // Parse JSON
app.use(helmet());       // Secure HTTP headers
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// Rate limiting: max 10 requests/min per IP on auth endpoints
const authLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  message: { msg: "Too many requests, try again later" },
});

// --- DB Connection ---
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ DB Error:", err));

// --- User Schema ---
const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true, lowercase: true, trim: true },
  password: { type: String, required: true, select: false }, // don't return password by default
});
const User = mongoose.model("User", userSchema);

// --- Validation helper ---
function validateCredentials(email, password) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) return "Invalid email format";
  if (!password || password.length < 6) return "Password must be at least 6 characters";
  return null;
}

// --- Auth Middleware ---
const auth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || "";
    const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : authHeader;
    if (!token) return res.status(401).json({ msg: "No token provided" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch {
    return res.status(401).json({ msg: "Invalid or expired token" });
  }
};

// --- Register ---
app.post("/register", authLimiter, async (req, res) => {
  try {
    const { email, password } = req.body;
    const validationError = validateCredentials(email, password);
    if (validationError) return res.status(400).json({ msg: validationError });

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ msg: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    res.json({ msg: "User registered successfully" });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ msg: "Email already registered" });
    }
    res.status(500).json({ error: err.message });
  }
});

// --- Login ---
app.post("/login", authLimiter, async (req, res) => {
  try {
    const { email, password } = req.body;
    const validationError = validateCredentials(email, password);
    if (validationError) return res.status(400).json({ msg: validationError });

    const user = await User.findOne({ email }).select("+password");
    if (!user) return res.status(400).json({ msg: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token, msg: "Login successful" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- Protected Route ---
app.get("/profile", auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    if (!user) return res.status(404).json({ msg: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- Start Server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
