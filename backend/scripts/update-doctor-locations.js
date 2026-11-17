// Usage:  node scripts/update-doctor-locations.js          -> apply (writes backup first)
//         node scripts/update-doctor-locations.js --revert  -> restore from backup
require("dotenv").config();
const fs = require("fs");
const path = require("path");
const { MongoClient, ObjectId } = require("mongodb");

const BACKUP = path.join(__dirname, "doctor-locations.backup.json");
// Non-AP doctors are re-homed to Andhra Pradesh cities; AP doctors are only whitespace-cleaned.
const REHOME = {
  Hyderabad: "Nellore", Pune: "Kakinada", Mumbai: "Anantapur", Noida: "Kurnool",
  Kolkata: "Eluru", Chandigarh: "Ongole", Bengaluru: "Srikakulam",
  Ahmedabad: "Vizianagaram", Chennai: "Kadapa", Delhi: "Machilipatnam",
};

(async () => {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const col = client.db("Hospital").collection("Doctors_data");

  if (process.argv.includes("--revert")) {
    const saved = JSON.parse(fs.readFileSync(BACKUP, "utf8"));
    for (const d of saved) await col.updateOne({ _id: new ObjectId(d._id) }, { $set: { location: d.location } });
    console.log("Reverted", saved.length, "doctors");
  } else {
    const docs = await col.find({}, { projection: { name: 1, location: 1 } }).toArray();
    fs.writeFileSync(BACKUP, JSON.stringify(docs.map((d) => ({ _id: String(d._id), location: d.location })), null, 2));
    for (const d of docs) {
      const raw = (d.location || "").replace(/\s+/g, " ").trim();
      const city = raw.split(",")[0].trim();
      const next = /andhra pradesh/i.test(raw) ? `${city}, Andhra Pradesh` : `${REHOME[city] || city}, Andhra Pradesh`;
      await col.updateOne({ _id: d._id }, { $set: { location: next } });
      console.log(`${d.name}: "${d.location}" -> "${next}"`);
    }
  }
  await client.close();
})().catch((e) => { console.error(e.message); process.exit(1); });
