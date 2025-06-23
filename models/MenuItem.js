const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  
  price: {               // ✅ add missing colon
    type: Number,
    required: true,
  },
  
  taste: {
    type: String,
    enum: ['sweet', 'spicy', 'sour'],
    required: true,
  },
  
  is_drink: {
    type: Boolean,
    default: false,
  },
  
  ingredients: {
    type: [String],      // ✅ use capital String
    default: undefined,  // or [] if you prefer an empty array
  },
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema); // ✅ capitalize model name properly

module.exports = MenuItem;
