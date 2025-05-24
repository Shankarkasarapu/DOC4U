const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();
const { connectToDatabase } = require("../mongodb/connectDB");
const {ObjectId} = require("mongodb")
router.post("/add-review", upload.none(), async (req, res) => {
  try {
    const database = await connectToDatabase();
    const collection = database.collection("Doctors_data");

    const reviewData = {};
    for (const key in req.body) {
      if (Object.hasOwnProperty.call(req.body, key)) {
        reviewData[key] = req.body[key];
      }
    }

    const doctorId = reviewData.doctor_id;
    const userId = reviewData.user_id;

    if (!doctorId || !userId) {
      return res
        .status(400)
        .json({ status: "error", message: "Doctor ID and User ID are required" });
    }

    const doctor = await collection.findOne({
      _id: new ObjectId(doctorId),
      "reviews.user_id": userId,
    });

    if (doctor) {
      return res
        .status(200)
        .json({ status: "error", message: "Review already exists for this doctor" });
    }

    const newReview = { ...reviewData, user_id: userId };

    const result = await collection.updateOne(
      { _id: new ObjectId(doctorId) },
      { $push: { reviews: newReview } }
    );

    if (result.matchedCount === 0) {
      return res
        .status(404)
        .json({ status: "error", message: "Doctor not found" });
    }

    res
      .status(200)
      .json({ status: "success", message: "Review added successfully" });
  } catch (error) {
    console.error("Error adding review:", error);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
});

module.exports = router;
