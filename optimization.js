
const express = require('express');
const router = express.Router();

router.get('/settings', (req, res) => {
  res.json({
    bufferSizeMs: 5000,
    maxBitrateKbps: 8000,
    adaptiveBitrate: true,
    preloadSeconds: 5
  });
});

router.post('/diagnostics', (req, res) => {
  res.json({ status: "received", diagnostics: req.body });
});

router.get('/status', (req, res) => {
  res.json({
    cpuLoad: 0.32,
    memoryUsage: 0.58,
    activeStreams: 122,
    streamErrors: 0
  });
});

module.exports = router;
