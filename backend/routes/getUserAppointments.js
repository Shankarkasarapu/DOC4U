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

    // Enrich appointments with doctor details
    const enrichedAppointments = await Promise.all(
      appointments.map(async (appointment) => {
        if (appointment.doctor_id) {
          const doctor = await doctorsCollection.findOne({ _id: new ObjectId(appointment.doctor_id) });

          if (doctor) {
            return {
              ...appointment,
              doctor: {
                name: doctor.name,
                speciality: doctor.speciality,
                image: doctor.image,
              },
            };
          }
        }
        return appointment;
      })
    );

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
