const express = require("express");
const multer = require("multer");
const { ObjectId } = require("mongodb");
const { connectToDatabase } = require("../mongodb/connectDB");
const { nowIST } = require("../lib/slots");

const router = express.Router();
const upload = multer();

// Returns the already-booked times for a doctor from today onwards:
//   { status: "success", booked: { "2026-11-18": ["9:00 AM", "2:00 PM"] } }
router.post("/get-booked-slots", upload.none(), async (req, res) => {
  const { doctor_id } = req.body;
  if (!doctor_id || !ObjectId.isValid(doctor_id)) {
    return res.status(400).json({ status: "error", message: "Valid doctor_id is required." });
  }
  try {
    const database = await connectToDatabase();
    const rows = await database
      .collection("appointments")
      .find({ doctor_id: String(doctor_id), date_key: { $gte: nowIST().dateKey } }, { projection: { date_key: 1, time: 1, _id: 0 } })
      .toArray();

    const booked = {};
    rows.forEach((r) => {
      (booked[r.date_key] = booked[r.date_key] || []).push(r.time);
    });

    res.set("Cache-Control", "no-store");   // availability must always be live
    return res.status(200).json({ status: "success", booked });
  } catch (error) {
    console.error("Error fetching booked slots:", error);
    return res.status(500).json({ status: "error", message: "Internal server error." });
  }
});

module.exports = router;
