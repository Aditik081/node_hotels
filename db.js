const mongoose = require('mongoose');

// Define the MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotels'; // Replace 'hotels' with your DB name if needed

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
