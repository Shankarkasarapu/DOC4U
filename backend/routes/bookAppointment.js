const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();
const nodemailer = require("nodemailer");
const { ObjectId } = require("mongodb");
const { connectToDatabase } = require("../mongodb/connectDB");
const transporter = require("../nodemailer/nodemailer")
router.post("/book-appointment", upload.none(), async (req, res) => {
  try {
    const { user_id, doctor_id, date, time } = req.body;
    if (!user_id || !doctor_id || !date || !time) {
      return res.status(400).json({
        status: "error",
        message: "Missing required fields: user_id, doctor_id, date, and time are required.",
      });
    }
    const database = await connectToDatabase();
    const appointmentsCollection = database.collection("appointments");
    const usersCollection = database.collection("users");
    const doctorsCollection = database.collection("Doctors_data");
    const appointment = {
      user_id: user_id,
      doctor_id: doctor_id,
      date: new Date(date),
      time: time,
      status: "pending",
      created_at: new Date(),  
      updated_at: new Date(),
    };
    const result = await appointmentsCollection.insertOne(appointment);
    const user = await usersCollection.findOne({ _id: new ObjectId(user_id) });
    const doctor = await doctorsCollection.findOne({ _id: new ObjectId(doctor_id) });

    if (!user || !user.email) {
      return res.status(400).json({
        status: "error",
        message: "User not found or email is missing.",
      });
    }

    if (!doctor) {
      return res.status(400).json({
        status: "error",
        message: "Doctor not found.",
      });
    }
    const mailOptions = {
      from: "doc4u@gmail.com",
      to: user.email,
      subject: "Appointment Confirmation ✅👨‍⚕️",
      text: `Dear ${user.name},\n\nYour appointment with ${doctor.name} is confirmed on ${date} at ${time}.\n\nThank you for choosing us!\n\nBest regards,\nYour DOC4U Team 😊`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    // Respond to the client
    res.status(200).json({
      status: "success",
      message: "Appointment booked successfully.",
      appointmentId: result.insertedId,
    });
  } catch (error) {
    console.error("Error booking appointment:", error);
    res.status(500).json({
      status: "error",
      message: "Internal server error.",
    });
  }
});

module.exports = router;
