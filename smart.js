const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(express.static("public")); // Serve static files

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/eventifyDB", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

// Event Schema
const eventSchema = new mongoose.Schema({
  name: String,
  email: String,
  eventType: String,
  date: Date,
});

const Event = mongoose.model("Event", eventSchema);

// Routes
app.post("/api/book-event", async (req, res) => {
  const newEvent = new Event(req.body);
  try {
    await newEvent.save();
    res.status(201).send("Event booked successfully!");
  } catch (error) {
    res.status(500).send("Error booking event");
  }
});

app.get("/api/events", async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).send("Error fetching events");
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});