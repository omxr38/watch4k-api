
const express = require('express');
const router = express.Router();

router.get('/playlists', (req, res) => {
  res.json([{ id: 1, name: "Standard Playlist", url: "http://stream.watch4k.to/live.m3u8" }]);
});

router.post('/upload', (req, res) => {
  res.json({ status: "Playlist empfangen", data: req.body });
});

module.exports = router;
