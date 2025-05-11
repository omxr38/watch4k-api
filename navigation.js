
const express = require('express');
const router = express.Router();

router.get('/menu', (req, res) => {
  res.json([
    { name: "Home", route: "/home" },
    { name: "Live TV", route: "/live" },
    { name: "VOD", route: "/vod" },
    { name: "Settings", route: "/settings" }
  ]);
});

router.get('/routes', (req, res) => {
  res.json([
    { path: "/home", component: "HomeScreen" },
    { path: "/live", component: "LiveTVScreen" },
    { path: "/vod", component: "VODScreen" },
    { path: "/settings", component: "SettingsScreen" }
  ]);
});

module.exports = router;
