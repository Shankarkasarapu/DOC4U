const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();
const { ObjectId } = require("mongodb");
const { connectToDatabase } = require("../mongodb/connectDB");

router.post("/get-doctor-details", upload.none(), async (req, res) => {
  try {
    const doctorId = req.body.doctor_id;

    if (!doctorId) {
      return res
        .status(400)
        .json({ status: "error", message: "Doctor ID is required" });
    }

    if (!ObjectId.isValid(doctorId)) {
      return res
        .status(400)
        .json({ status: "error", message: "Invalid Doctor ID" });
    }

    const database = await connectToDatabase();
    const doctorsCollection = database.collection("Doctors_data");
    const usersCollection = database.collection("users");

    // Fetch doctor details
    const doctor = await doctorsCollection.findOne({ _id: new ObjectId(doctorId) });

    if (!doctor) {
      return res
        .status(404)
        .json({ status: "error", message: "Doctor not found" });
    }

    // Enrich reviews with user details
    const enrichedReviews = await Promise.all(
      (doctor.reviews || []).map(async (review) => {
        if (review.user_id && ObjectId.isValid(review.user_id)) {
          try {
            const user = await usersCollection.findOne({ _id: new ObjectId(review.user_id) });
            if (user) {
              return {
                ...review,
                user_name: user.name,
                user_email: user.email,
                profileImage: user.profileImage,
              };
            } else {
              console.log("User not found for ID:", review.user_id);
            }
          } catch (err) {
            console.error("Error fetching user details for ID:", review.user_id, err);
          }
        } else {
          console.log("Invalid user_id:", review.user_id);
        }
        return review; // Return original review if user details are not found
      })
    );

    // Update doctor reviews with enriched data
    doctor.reviews = enrichedReviews;

    res.status(200).json({ status: "success", data: doctor });
  } catch (error) {
    console.error("Error querying doctor details:", error);
    res
      .status(500)
      .json({ status: "error", message: "Internal server error" });
  }
});

module.exports = router;
