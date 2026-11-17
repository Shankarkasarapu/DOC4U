const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();
const { ObjectId } = require("mongodb");
const { connectToDatabase } = require("../mongodb/connectDB");

router.post("/get-user-appointments", upload.none(), async (req, res) => {
  try {
    const { user_id } = req.body;

    // Validate the user_id field
    if (!user_id || !ObjectId.isValid(user_id)) {
      return res.status(400).json({
        status: "error",
        message: "Invalid or missing user_id.",
      });
    }

    const database = await connectToDatabase();
    const appointmentsCollection = database.collection("appointments");
    const doctorsCollection = database.collection("Doctors_data");

    // Retrieve appointments for the user
    const appointments = await appointmentsCollection.find({ user_id: user_id }).toArray();

    if (appointments.length === 0) {
      return res.status(200).json({
        status: "success",
        message: "No appointments found.",
      });
    }

    // Fetch all needed doctors in ONE query instead of one query per appointment
    const doctorIds = [...new Set(appointments.map((a) => a.doctor_id).filter((id) => id && ObjectId.isValid(id)))]
      .map((id) => new ObjectId(id));
    const doctors = doctorIds.length
      ? await doctorsCollection
          .find({ _id: { $in: doctorIds } }, { projection: { name: 1, speciality: 1, image: 1 } })
          .toArray()
      : [];
    const doctorMap = new Map(doctors.map((d) => [String(d._id), d]));

    const enrichedAppointments = appointments.map((appointment) => {
      const doctor = doctorMap.get(String(appointment.doctor_id));
      return doctor
        ? { ...appointment, doctor: { name: doctor.name, speciality: doctor.speciality, image: doctor.image } }
        : appointment;
    });

    res.status(200).json({
      status: "success",
      appointments: enrichedAppointments,
    });
  } catch (error) {
    console.error("Error retrieving user appointments:", error);
    res.status(500).json({
      status: "error",
      message: "Internal server error.",
    });
  }
});

module.exports = router;
