const express = require('express');
const multer = require('multer');
const { connectToDatabase } = require('../mongodb/connectDB');

const router = express.Router();
const upload = multer();

router.post('/google-signup', upload.none(), async (req, res) => {
    try {
        const { mail } = req.body;
        const database = await connectToDatabase();
        const collection = database.collection('users');

        const user = await collection.findOne({ email: mail });

        if (user) {
            console.log('User exists:', user._id);
            return res.status(200).json({ status: 'success', message: 'User exists', user_id: user._id });
        } else {
            const result = await collection.insertOne({ email: mail });

            if (result.insertedId) {
                console.log('User created:', result.insertedId);
                return res.status(200).json({ status: 'success', message: 'User created', user_id: result.insertedId });
            } else {
                return res.status(500).json({ status: 'error', message: 'User creation failed' });
            }
        }
    } catch (err) {
        console.error('Error processing request:', err);
        res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
});

module.exports = router;
