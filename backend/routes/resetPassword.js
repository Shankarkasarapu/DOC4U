const express = require("express");
const router = express.Router();
const { connectToDatabase } = require("../mongodb/connectDB");
const multer = require("multer");
const upload = multer();
const {ObjectId} = require("mongodb")
router.post("/reset-password", upload.none(), async (req, res) => {
  try {
    const { id, new_password } = req.body;

    // Validate inputs
    if (!id || !new_password) {
      return res.status(400).json({
        status: "error",
        message: "User ID and new password are required",
      });
    }
    const database = await connectToDatabase();
    const collection = database.collection("users");
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { password: new_password } }
    );

    if (result.modifiedCount === 0) {
      return res.status(200).json({
        status: "error",
        message: "New password and old password are the same",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Password changed successfully",
    });
  } catch (error) {
    console.error("Error resetting password:", error);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
});

module.exports = router;
