const express = require("express");
const router = express.Router();
const { connectToDatabase } = require("../mongodb/connectDB");
const multer = require("multer");
const upload = multer();

router.post("/change-password", upload.none(), async (req, res) => {
  try {
    const { old_password, new_password, mail } = req.body;

    // Validate input fields
    if (!old_password || !new_password || !mail) {
      return res.status(400).json({
        status: "error",
        message: "Old password, new password, and email are required",
      });
    }

    const database = await connectToDatabase();
    const collection = database.collection("users");

    // Check if user exists with the provided email and old password
    const user = await collection.findOne({ email: mail, password: old_password });

    if (!user) {
      return res.status(400).json({
        status: "error",
        message: "No user found with the provided email and password",
      });
    }

    // Update the password in the database
    const result = await collection.updateOne(
      { email: mail, password: old_password },
      { $set: { password: new_password } }
    );

    if (result.modifiedCount >= 1) {
      // Password updated successfully
      return res.status(200).json({
        status: "success",
        message: "Password updated successfully",
      });
    }

    // If no update occurred (passwords were the same)
    res.status(400).json({
      status: "error",
      message: "Failed to update password, ensure the new password is different",
    });
  } catch (error) {
    console.error("Error changing password:", error);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
});

module.exports = router;
