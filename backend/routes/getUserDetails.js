const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();
const { connectToDatabase } = require("../mongodb/connectDB");
const { ObjectId } = require("mongodb");

router.post("/get-user-details", upload.none(), async (req, res) => {
  try {
    const userId = req.body.user_id;

    if (!userId) {
      return res
        .status(400)
        .json({ status: "error", message: "User ID is required" });
    }

    if (!ObjectId.isValid(userId)) {
      return res
        .status(200)
        .json({ status: "error", message: "Invalid User ID" });
    }

    const database = await connectToDatabase();
    const collection = database.collection("users");

    const user = await collection.findOne({ _id: new ObjectId(userId) });

    if (user) {
      res.status(200).json({ status: "success", user: user });
    } else {
      res
        .status(404)
        .json({ status: "error", message: "User not found" });
    }
  } catch (error) {
    console.error("Error querying user:", error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

module.exports = router;
