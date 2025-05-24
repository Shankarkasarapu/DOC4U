const express = require("express");
const router = express.Router();
const { connectToDatabase } = require("../mongodb/connectDB");
const nodemailer = require("nodemailer");
const multer = require("multer");
const upload = multer();

router.post("/send-messages", upload.none(), async (req, res) => {
  try {
    const { mail, name, phone_no, services, message } = req.body;

    // Validate input fields
    if (!mail || !name || !phone_no || !services || !message) {
      return res.status(400).json({
        status: "error",
        message: "All fields are required",
      });
    }

const transporter = require("../nodemailer/nodemailer")
    const mailOptions = {
      from: "doc4u@gmail.com",
      to: "docforyouhelpdesk@gmail.com",
      subject: "Support Request Notification",
      text: `Dear Admin,
              You have received a new support request from ${name} through the website.
              Details of the request:
              Name: ${name}
              Email: ${mail}
              Phone: ${phone_no}
              Subject: ${services}
              Message: ${message}
              Please review and respond to the request at your earliest convenience.
              Best regards,
              DOC4U Team`,
    };

    // Send email to admin
    transporter.sendMail(mailOptions, (emailError, info) => {
      if (emailError) {
        console.error("Error sending email:", emailError);
        return res.status(500).json({
          status: "error",
          message: "Internal server error sending support request email",
        });
      }

      return res.status(200).json({
        status: "success",
        message: "Support request email sent to admin",
      });
    });
  } catch (error) {
    console.error("Error processing the request:", error);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
});

module.exports = router;
