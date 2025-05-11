
const express = require('express');
const router = express.Router();

router.get('/theme', (req, res) => {
  res.json({
    primaryColor: "#0D0D0D",
    accentColor: "#FF4081",
    font: "Sans-Serif"
  });
});

router.get('/layout', (req, res) => {
  res.json({
    homeLayout: "grid",
    playerControls: "overlay",
    navigationStyle: "tab"
  });
});

router.post('/feedback', (req, res) => {
  res.json({ message: "Feedback erhalten", feedback: req.body });
});

module.exports = router;
