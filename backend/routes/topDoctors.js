const express = require("express");
const router = express.Router();
const { connectToDatabase } = require("../mongodb/connectDB");

router.post("/top-doctors", async (req, res) => {
  try {
    const database = await connectToDatabase();
    const doctors = await database.collection("Doctors_data").find({}).limit(6).toArray();

    if (doctors.length) {
      res.status(200).json({
        status: "success",
        doctors: doctors,
      });
    } else {
      res.status(404).json({
        status: "error",
        message: "No doctors found",
      });
    }
  } catch (error) {
    console.error("Error fetching top doctors:", error);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
});

module.exports = router;
