const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');

// POST route to add a menu item
router.post('/', async (req, res) => {
    try {
      const data = req.body;
      const newMenu = new MenuItem(data);
      const response = await newMenu.save();
      console.log('menu item saved');
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'internal server error' });
    }
  })
  
  // GET route to fetch all menu items
  router.get('/', async (req, res) => {
    try {
      const data = await MenuItem.find();
      console.log('menu data fetched');
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'internal server error' });
    }
  })

  router.get('/:taste', async (req, res) => {
    try {
      const taste = req.params.taste;
      if (taste === 'sweet' || taste === 'sour' || taste === 'spicy') {
        const response = await MenuItem.find({ taste: taste });
        console.log('filtered menu items fetched');
        res.status(200).json(response);
      } else {
        res.status(404).json({ error: 'Invalid taste type' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  module.exports=router;
