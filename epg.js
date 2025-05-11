
const express = require('express');
const router = express.Router();

const sampleEPG = [
  {
    channelId: "channel-1",
    epg: [
      { title: "News", start: "10:00", end: "10:30" },
      { title: "Sports Live", start: "10:30", end: "12:00" }
    ]
  }
];

// EPG-Daten pro Kanal abrufen
router.get('/:channelId', (req, res) => {
  const channelId = req.params.channelId;
  const channelData = sampleEPG.find(epg => epg.channelId === channelId);
  if (channelData) {
    res.json(channelData);
  } else {
    res.status(404).json({ error: "Keine EPG-Daten gefunden" });
  }
});

module.exports = router;
