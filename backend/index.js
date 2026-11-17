require("dotenv").config();
const express = require("express");
const cors = require("cors");
const compression = require("compression");
const { connectToDatabase, ensureIndexes } = require("./mongodb/connectDB");

const app = express();
app.disable("x-powered-by");
app.use(cors());
app.use(compression());
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));

// Health check (useful for Render and for waking the free-tier instance)
app.get("/health", (req, res) => res.json({ status: "ok" }));

const routes = [
  "addUserDetails", "googleSignup", "createOrder", "sendMessages",
  "changePassword", "resetPassword", "verifyOtp", "topDoctors", "adduser",
  "getDoctorDetails", "updateUserDetails", "login", "addreview",
  "getUserDetails", "getDoctor", "addDependants", "bookAppointment",
  "getUserAppointments", "forgotPassword",
];
routes.forEach((name) => app.use("/api", require(`./routes/${name}`)));

// Catch-all error handler so one bad request never returns an HTML stack trace
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ status: "error", message: "Internal server error" });
});

const port = process.env.PORT || 3001;

// Connect to MongoDB first so the very first request is not slow
connectToDatabase()
  .then(ensureIndexes)
  .then(() => app.listen(port, () => console.log(`app listening on port ${port}`)));
