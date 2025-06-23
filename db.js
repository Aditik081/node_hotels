const mongoose = require('mongoose');
require('dotenv').config();

// Define the MongoDB connection URL
//const mongoURL = process.env.MONGODB_URL_LOCAL // Replace 'hotels' with your DB name if needed
//const mongoURL = 'mongodb+srv://aditik605:Ad0812iti@cluster0.kmwni89.mongodb.net/'
const mongoURL = process.env.MONGODB_URL;


// Set up the MongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Get the default connection
const db = mongoose.connection;

db.on('connected',()=>{
    console.log('connected to MongoDB server');
});

// Bind connection to error event (to get notification of connection errors)
db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

// Export the database connection
module.exports = db;
