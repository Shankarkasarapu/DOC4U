const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();
const { ObjectId } = require("mongodb");
const { connectToDatabase } = require("../mongodb/connectDB");
const transporter = require("../nodemailer/nodemailer");
const { normalizeDate, validateSlot } = require("../lib/slots");

router.post("/book-appointment", upload.none(), async (req, res) => {
  try {
    const { user_id, doctor_id, date, time } = req.body;
    if (!user_id || !doctor_id || !date || !time) {
      return res.status(400).json({
        status: "error",
        message: "Missing required fields: user_id, doctor_id, date, and time are required.",
      });
    }
    if (!ObjectId.isValid(user_id) || !ObjectId.isValid(doctor_id)) {
      return res.status(400).json({ status: "error", message: "Invalid user or doctor id." });
    }

    // Dates used to be parsed with new Date("17/11/2026"), which is invalid or silently wrong.
    const dateKey = normalizeDate(date);
    if (!dateKey) {
      return res.status(400).json({ status: "error", message: "Invalid date. Use YYYY-MM-DD." });
    }
    // Reject past dates, past times and times that are not real slots
    const slotError = validateSlot(dateKey, time);
    if (slotError) {
      return res.status(400).json({ status: "error", message: slotError });
    }

    const database = await connectToDatabase();
    const appointmentsCollection = database.collection("appointments");
    const usersCollection = database.collection("users");
    const doctorsCollection = database.collection("Doctors_data");

    // Only real, registered users may book: reject before anything is written
    const user = await usersCollection.findOne({ _id: new ObjectId(user_id) });
    if (!user) {
      return res.status(401).json({ status: "error", message: "Please log in to book an appointment." });
    }
    const doctor = await doctorsCollection.findOne({ _id: new ObjectId(doctor_id) });
    if (!doctor) {
      return res.status(404).json({ status: "error", message: "Doctor not found." });
    }

    // Slot already taken by someone else?
    const taken = await appointmentsCollection.findOne({ doctor_id: String(doctor_id), date_key: dateKey, time });
    if (taken) {
      return res.status(409).json({ status: "error", message: "Sorry, that slot was just booked. Please choose another time." });
    }

    const appointment = {
      user_id: String(user_id),
      doctor_id: String(doctor_id),
      date: new Date(`${dateKey}T00:00:00.000Z`),
      date_key: dateKey,                       // exact calendar day, used for availability checks
      time,
      status: "pending",
      created_at: new Date(),
      updated_at: new Date(),
    };

    let result;
    try {
      result = await appointmentsCollection.insertOne(appointment);
    } catch (err) {
      // Two people booking the same slot at the same instant: the unique index lets only one win
      if (err && err.code === 11000) {
        return res.status(409).json({ status: "error", message: "Sorry, that slot was just booked. Please choose another time." });
      }
      throw err;
    }

    // Confirmation email is best-effort: a mail problem must never undo a booking
    if (user.email) {
      const [y, m, d] = dateKey.split("-");
      transporter.sendMail(
        {
          from: "doc4u@gmail.com",
          to: user.email,
          subject: "Appointment Confirmation ✅👨‍⚕️",
          text: `Dear ${user.name},\n\nYour appointment with ${doctor.name} is confirmed on ${d}/${m}/${y} at ${time}.\n\nThank you for choosing us!\n\nBest regards,\nYour DOC4U Team 😊`,
        },
        (error, info) => {
          if (error) console.error("Error sending email:", error);
          else console.log("Email sent: " + info.response);
        }
      );
    }

    return res.status(200).json({
      status: "success",
      message: "Appointment booked successfully.",
      appointmentId: result.insertedId,
    });
  } catch (error) {
    console.error("Error booking appointment:", error);
    return res.status(500).json({ status: "error", message: "Internal server error." });
  }
});

module.exports = router;
