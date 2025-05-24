const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();
const { ObjectId } = require("mongodb");
const { connectToDatabase } = require("../mongodb/connectDB");

router.post("/add-dependants", upload.none(), async (req, res) => {
  try {
    const { user_id: userId, ...dependantFields } = req.body;

    if (!userId) {
      return res.status(400).json({ status: "error", message: "User ID is required" });
    }

    if (!ObjectId.isValid(userId)) {
      return res.status(400).json({ status: "error", message: "Invalid User ID" });
    }

    // Format dependant data
    const dependantData = Object.fromEntries(
      Object.entries(dependantFields).map(([key, value]) => [key, value])
    );

    const database = await connectToDatabase();
    const collection = database.collection("users");

    // Update user with dependant data
    const result = await collection.updateOne(
      { _id: new ObjectId(userId) },
      { $push: { dependants: dependantData } }
    );

    if (result.modifiedCount > 0) {
      return res.status(200).json({
        status: "success",
        message: "Dependants added successfully",
      });
    }

    res.status(400).json({
      status: "error",
      message: "User not found or no dependants added",
    });
  } catch (error) {
    console.error("Error adding dependants:", error);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
});

module.exports = router;
