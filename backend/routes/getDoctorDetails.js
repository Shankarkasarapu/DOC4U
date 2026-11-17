const express = require("express");
const router = express.Router();
const { connectToDatabase } = require("../mongodb/connectDB");

router.post("/get-doctors", async (req, res) => {
  try {
    const database = await connectToDatabase();
    const data = await database.collection("Doctors_data").find({}).toArray();

    if (data.length === 0) {
      return res.status(404).json({ message: "No doctors found" });
    }
    res.set("Cache-Control", "public, max-age=60");
    return res.status(200).json({ status: "success", data });
  } catch (error) {
    console.error("Error fetching doctors:", error);
    return res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

module.exports = router;
