const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Create Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://yashbirdavade9789:e1e5suJepaIVFwmL@physio.vlsqogo.mongodb.net/?retryWrites=true&w=majority&appName=physio';
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB Atlas');
});

// Define routes
app.get('/', (req, res) => {
    res.send('Welcome to the Physiotherapy Website API');
});

// Define route for handling contact form submissions
app.post('/contact', (req, res) => {
    // Handle form submission here
    console.log(req.body); // Assuming the form data is sent as JSON
    res.send('Form submitted successfully!');
});

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
