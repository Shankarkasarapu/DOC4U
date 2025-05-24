const express = require("express");
const multer = require("multer");
const { connectToDatabase } = require("../mongodb/connectDB");
const router = express.Router();
const upload = multer(); 
router.post("/login", upload.none(), async (req, res) => {
  const { email, password } = req.body;
  try {
    const database = await connectToDatabase();
    const collection = database.collection("users");

    const user = await collection.findOne({ email: email, password: password });

    if (user) {
      return res.status(200).json({
        status: "success",
        message: "Login successful",
        id: user._id,
      });
    } else {
      return res.status(200).json({
        status: "error",
        message: "User not found",
      }); 
    }
  } catch (error) {
    console.error("Database error:", error);
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
});

module.exports = router;
