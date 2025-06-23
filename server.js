const express = require('express');
const app = express();
const db = require('./db'); // make sure this connects to MongoDB
const bodyParser = require('body-parser');
require('dotenv').config();

// Use JSON parser middleware
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

// Import Mongoose models
//const MenuItem = require('./models/MenuItem');

// Use personRoutes for all /person routes
const personRoutes = require('./routes/personRoutes');
const MenuItemRoutes = require('./routes/menuItemRoutes');

//use routers
app.use('/person', personRoutes);

//app.use('/menu',menuItemRoutes );
app.use('/menu', MenuItemRoutes); // ✅ use the variable name you declared


// Home Route
app.get('/', function (req, res) {
  res.send('Welcome to our hotel');
})




// Start server
app.listen(PORT, () => {
  console.log('listening on port 3000');
});
 