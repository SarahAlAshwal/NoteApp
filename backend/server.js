const express = require('express');
const notes = require('./data/notes');
const dotenv = require('dotenv');
const connectDB = require('./db');

const app = express();

dotenv.config();
connectDB();

app.get('/', (req, res) => {
  res.send('API is running..');
});

app.get('/api/notes', (req, res) => {
  res.json(notes);
});

app.get('/api/notes/:id', (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});

const PORT = process.env.PORT || 5000;
console.log('xxxx', PORT);

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
