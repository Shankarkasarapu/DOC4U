const express = require("express");
const multer = require("multer");
const { ObjectId } = require("mongodb");
const { connectToDatabase } = require("../mongodb/connectDB");

const router = express.Router();
const upload = multer();
router.post("/update-user", upload.any(), async (req, res) => {
    const { userId, ...fields } = req.body; 
    try {
        if (!userId) {
            return res.status(400).json({
                status: "error",
                message: "userId is required",
            });
        }

        const database = await connectToDatabase();
        const collection = database.collection("users");

        const userData = {};

        for (const key in fields) {
            if (fields.hasOwnProperty(key) && key !== 'email') {
                userData[key] = fields[key];
            }
        }
        const result = await collection.updateOne(
            { _id: new ObjectId(userId) }, 
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
            message: "User data updated",
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
