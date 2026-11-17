const { MongoClient } = require("mongodb");
require("dotenv").config();

const client = new MongoClient(process.env.MONGODB_URI, {
  maxPoolSize: 20,
  minPoolSize: 2,
  serverSelectionTimeoutMS: 10000,
});

let database;

async function connectToDatabase() {
  if (!database) {
    try {
      await client.connect();
      database = client.db("Hospital");
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      process.exit(1);
    }
  }
  return database;
}

// Indexes turn full collection scans into lookups (login, appointments, etc.)
async function ensureIndexes() {
  try {
    const db = await connectToDatabase();
    await Promise.all([
      db.collection("users").createIndex({ email: 1 }),
      db.collection("appointments").createIndex({ user_id: 1 }),
      // One booking per doctor/date/time. Partial, so older rows without date_key don't block it.
      db.collection("appointments").createIndex(
        { doctor_id: 1, date_key: 1, time: 1 },
        { unique: true, partialFilterExpression: { date_key: { $exists: true } } }
      ),
    ]);
  } catch (error) {
    console.error("Index creation failed (non-fatal):", error.message);
  }
}

module.exports = { connectToDatabase, ensureIndexes };
