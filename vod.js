
const express = require('express');
const router = express.Router();

const sampleVOD = [
  {
    id: "vod1",
    title: "John Wick",
    category: "Action",
    description: "Ein ehemaliger Auftragskiller rächt sich...",
    streamUrl: "https://stream.watch4k.to/johnwick.m3u8",
    coverImage: "https://cdn.watch4k.to/covers/johnwick.jpg"
  },
  {
    id: "vod2",
    title: "Interstellar",
    category: "Sci-Fi",
    description: "Ein Team reist durch ein Wurmloch im All...",
    streamUrl: "https://stream.watch4k.to/interstellar.m3u8",
    coverImage: "https://cdn.watch4k.to/covers/interstellar.jpg"
  }
];

// VOD-Kategorien abrufen
router.get('/categories', (req, res) => {
  const categories = [...new Set(sampleVOD.map(item => item.category))];
  res.json(categories);
});

// VOD-Liste nach Kategorie
router.get('/list', (req, res) => {
  const category = req.query.category;
  const list = sampleVOD.filter(item => item.category === category);
  res.json(list);
});

// VOD-Suche
router.get('/search', (req, res) => {
  const q = req.query.q.toLowerCase();
  const results = sampleVOD.filter(item => item.title.toLowerCase().includes(q));
  res.json(results);
});

// VOD-Detail
router.get('/:id', (req, res) => {
  const vod = sampleVOD.find(item => item.id === req.params.id);
  if (vod) {
    res.json(vod);
  } else {
    res.status(404).json({ error: "VOD nicht gefunden" });
  }
});

module.exports = router;
