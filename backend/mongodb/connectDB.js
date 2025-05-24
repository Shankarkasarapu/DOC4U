const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://sairohith:1743@hospital.3hgft.mongodb.net/Hospital?retryWrites=true&w=majority";
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
