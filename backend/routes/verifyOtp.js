const express = require("express");
const router = express.Router();
const { connectToDatabase } = require("../mongodb/connectDB");
const multer = require("multer");
const upload = multer();

router.post("/verify-otp", upload.none(), async (req, res) => {
  try {
    const { mail, otp } = req.body;

    // Validate the inputs
    if (!mail || !otp) {
      return res.status(400).json({
        status: "error",
        message: "Email and OTP are required",
      });
    }

    const database = await connectToDatabase();
    const collection = database.collection("users");

    // Check if the user exists with the provided email and OTP
    const user = await collection.findOne({ email: mail, otp: otp });

    if (!user) {
      return res.status(200).json({
        status: "error",
        message: "Invalid OTP or email",
      });
    }

    // OTP verified successfully
    res.status(200).json({
      status: "success",
      message: "OTP verified successfully",
      user_id: user._id,
    });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
});

module.exports = router;
