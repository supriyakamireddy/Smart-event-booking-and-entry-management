const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Database Connection
mongoose.connect('mongodb://localhost:27017/eventBooking')
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Error connecting to MongoDB:", err));

// Define Models
const Event = mongoose.model('Event', { name: String, description: String });
const User = mongoose.model('User', { regnum: String, password: String });
const Payment = mongoose.model('Payment', { event: String, card: String, name: String, expiry: String, cvv: String });

// Routes

// Login Route
app.post('/login', async (req, res) => {
    const { regnum, password } = req.body;
    const user = await User.findOne({ regnum, password });
    if (user) {
        res.json({ success: true, message: "Login successful!" });
    } else {
        res.status(401).json({ success: false, message: "Invalid credentials" });
    }
});

// Events Route
app.get('/events', async (req, res) => {
    const events = await Event.find();
    res.json(events);
});

// Payment Route
app.post('/payment', async (req, res) => {
    const { event, card, name, expiry, cvv } = req.body;

    // Validate Payment Data
    if (!event || !card || !name || !expiry || !cvv) {
        return res.status(400).json({ success: false, message: 'All payment fields are required.' });
    }

    try {
        // Save Payment Details to MongoDB
        const payment = new Payment({
            event,
            card,
            name,
            expiry,
            cvv,
        });
        await payment.save();
        res.json({ success: true, message: 'Payment processed successfully!' });
    } catch (error) {
        console.error('Error saving payment details:', error);
        res.status(500).json({ success: false, message: 'Internal server error.' });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});