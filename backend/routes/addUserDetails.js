const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();
const { ObjectId } = require("mongodb");
const { connectToDatabase } = require("../mongodb/connectDB");

router.post("/add-user-details", upload.none(), async (req, res) => {
    try {
        const { id, ...userData } = req.body;

        if (!id || !ObjectId.isValid(id)) {
            return res.status(400).json({
                status: "error",
                message: "Invalid or missing User ID",
            });
        }

        const database = await connectToDatabase();
        const usersCollection = database.collection('users');

        // Convert ObjectId and update the user data
        const result = await usersCollection.updateOne(
            { _id: new ObjectId(id) },
            { $set: userData }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({
                status: "error",
                message: "User not found",
            });
        }

        res.status(200).json({
            status: "success",
            message: "User data updated successfully"
        });
    } catch (error) {
        console.error("Database error:", error);
        res.status(500).json({
            status: "error",
            message: "Internal server error",
        });
    }
});

module.exports = router;
