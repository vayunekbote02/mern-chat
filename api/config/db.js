const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected, host: ${conn.connection.host}`.bgCyan.white);
  } catch (error) {
    console.log(`Error: ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
