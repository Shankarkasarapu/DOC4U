const express = require('express');
const router = express.Router()
const multer = require('multer')
const upload = multer()
const {connectToDatabase} = require("../mongodb/connectDB")
router.post("/add-user",upload.none(),async (req,res)=>
    {
        try {
            const database = await connectToDatabase()
            const collection = database.collection("users");
            const userData = {};
            for (const key in req.body) {
                if (Object.hasOwnProperty.call(req.body, key)) {
                    userData[key] = req.body[key];
                }
            }
            const existingUser = await collection.findOne({ email: userData.email });
            if (existingUser) {
                return res.status(200).json({ status: "error", message: "User already exists" });
            }

            const result = await collection.insertOne(userData);
    
            res.status(200).json({ status: "success", insertedId: result.insertedId });
        } catch (error) {
            console.error("Error adding user:", error);
            res.status(500).json({ status: "error", message: "Internal Server Error" });
        }
})
module.exports = router