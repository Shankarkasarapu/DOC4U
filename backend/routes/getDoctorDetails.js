const express = require('express');
const router = express.Router()
const {connectToDatabase} = require("../mongodb/connectDB")
router.post("/get-doctors",async (req,res)=>{
  const database = await connectToDatabase()
  const collection = database.collection('Doctors_data');
    const data = await collection.find({}).toArray();

    if (data.length === 0) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.write(JSON.stringify({ message: 'No doctors found' }));
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write(JSON.stringify({ status: "success", data: data }));
    }
    res.end(); 
    
})
module.exports=router