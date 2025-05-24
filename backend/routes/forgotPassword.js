const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();
const nodemailer = require("nodemailer");
const { connectToDatabase } = require("../mongodb/connectDB");
const transporter = require("../nodemailer/nodemailer")

// Function to generate OTP
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Forgot password route
router.post("/forgot-password", upload.none(), async (req, res) => {
  try {
    const { mail } = req.body;

    // Validate the email field
    if (!mail) {
      return res.status(400).json({
        status: "error",
        message: "Email ID is required.",
      });
    }

    const database = await connectToDatabase();
    const collection = database.collection("users");

    // Find user by email
    const user = await collection.findOne({ email: mail });

    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "User not found with this email ID.",
      });
    }

    // Generate OTP and save it in the user's record
    const otp = generateOTP();
    await collection.updateOne({ email: mail }, { $set: { otp: otp } });

    // Send OTP email
    const mailOptions = {
      from: "doc4u@gmail.com",
      to: user.email,
      subject: "OTP Verification for Password Reset 📱",
      text: `Dear ${user.name},\n\nYour OTP for resetting your password is: ${otp}.\n\nThank you for choosing us!\n\nBest regards,\nYour DOC4U Team 😊`,
    };

    transporter.sendMail(mailOptions, (emailError, info) => {
      if (emailError) {
        console.error("Error sending email:", emailError);
        return res.status(500).json({
          status: "error",
          message: "Internal server error sending OTP email.",
        });
      }

      res.status(200).json({
        status: "success",
        message: "Email sent with OTP for password reset.",
      });
    });
  } catch (error) {
    console.error("Error processing password reset:", error);
    res.status(500).json({
      status: "error",
      message: "Internal server error.",
    });
  }
});

module.exports = router;
