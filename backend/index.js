require("dotenv").config();
const express   = require("express");
const cors      = require("cors");
const connectDB = require("./config/db");
const authRoutes= require("./routes/authRoutes");

connectDB();

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

app.use("/api/auth", authRoutes);

const auth = require("./middleware/authMiddleware");
app.get("/api/dashboard", auth, (req, res) => res.json({ msg: `Hello User ${req.user}` }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));