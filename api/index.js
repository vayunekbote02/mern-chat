const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

// configurations
dotenv.config();
const app = express();
connectDB();
app.use(express.json());
app.use(cors());

// constants
const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI;

// endpoints
app.get("/", (req, res) => {
  res.json("App running!");
});

app.use("/api/user", userRoutes);

// starting server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
