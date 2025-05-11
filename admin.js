
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Liste aller Nutzer
router.get('/users', async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Nutzer löschen
router.delete('/user/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "Benutzer gelöscht" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
