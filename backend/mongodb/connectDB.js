const { MongoClient } = require("mongodb");
require('dotenv').config();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

let database;

async function connectToDatabase() {
    if (!database) {
        try {
            await client.connect();
            database = client.db("Hospital");
            console.log("Connected to MongoDB");
        } 
        catch (error) {
            console.error("Error connecting to MongoDB:", error);
            process.exit(1);
        }
    }
    return database;
}

module.exports = { connectToDatabase };
