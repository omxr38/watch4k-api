
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(express.json());

// MongoDB-Verbindung
mongoose.connect('mongodb://localhost:27017/watch4k', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB verbunden'))
  .catch(err => console.error('MongoDB Fehler:', err));

// API-Routen
app.use('/api/olomitutu', require('./routes/olomitutu'));
app.use('/api/ojokube', require('./routes/ojokube'));
app.use('/api/uiux', require('./routes/uiux'));
app.use('/api/navigation', require('./routes/navigation'));
app.use('/api/optimization', require('./routes/optimization'));
app.use('/api/epg', require('./routes/epg'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/vod', require('./routes/vod'));
app.use('/api/payment', require('./routes/payment'));

app.listen(port, () => {
  console.log(`Watch4K API läuft auf http://localhost:${port}`);
});
