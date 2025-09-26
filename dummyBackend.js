// npm install express mongoose bcryptjs jsonwebtoken body-parser
// node server.js

// # .env
// MONGODB_URI=mongodb://127.0.0.1:27017/mern_login
// JWT_SECRET=your_super_long_random_string_here
// PORT=5000

// Then in code:
// import dotenv from "dotenv";
// dotenv.config();

// mongoose.connect(process.env.MONGODB_URI, { ... });

// const PORT = process.env.PORT || 5000;
// const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });


// 14) TL;DR mental model
// Registration = take credentials → hash password → save user.
// Login = find user → compare hash → sign JWT.
// Protected route = verify JWT → fetch user → respond (without password).
// Security = strong secrets, short expirations, validation, rate limiting, HTTPS.



// server.js
import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

// --- DB Connection ---
mongoose
  .connect("mongodb://127.0.0.1:27017/mern_login", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("DB Error:", err));

// --- User Schema ---
const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);


// --- Register Route ---
app.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ msg: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    res.json({ msg: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- Login Route ---
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, "SECRET_KEY", { expiresIn: "1h" });

    res.json({ token, msg: "Login successful" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- Protected Route Example ---
// app.get("/profile", async (req, res) => {
//   const token = req.headers["authorization"];
//   if (!token) return res.status(401).json({ msg: "No token provided" });

//   try {
//     const decoded = jwt.verify(token, "SECRET_KEY");
//     const user = await User.findById(decoded.id).select("-password");
//     res.json(user);
//   } catch (err) {
//     res.status(401).json({ msg: "Invalid token" });
//   }
// });

// auth.js (could be inline in the same file)
const auth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || "";
    const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : authHeader;
    if (!token) return res.status(401).json({ msg: "No token provided" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;           // attach to request for later handlers
    next();
  } catch (e) {
    return res.status(401).json({ msg: "Invalid token" });
  }
};

// Use it:
app.get("/profile", auth, async (req, res) => {
  const user = await User.findById(req.userId).select("-password");
  res.json(user);
});

// --- Start Server ---
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// Testing with cURL / Postman

// Register
// ************************||*****************

// curl -X POST http://localhost:5000/register \
//   -H "Content-Type: application/json" \
//   -d '{"email":"alice@example.com","password":"S3cret!123"}'

//*************************||******************

//Login
//*************************||******************

// curl -X POST http://localhost:5000/login \
//   -H "Content-Type: application/json" \
//   -d '{"email":"alice@example.com","password":"S3cret!123"}'

//*************************||******************

//Access protected route
//*************************||******************

// curl http://localhost:5000/profile \
//   -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6..."

//*************************||******************


