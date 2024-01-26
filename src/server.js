const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/myTokens', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const cardSchema = new mongoose.Schema({
  name: String,
  symbol: String,
  price: Number,
});

const Card = mongoose.model('Card', cardSchema);

// GET API - to get data
app.get('/api/cards', async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST API - to display data
app.post('/api/cards', async (req, res) => {
  try {
    const { name, symbol, price } = req.body;
    const newCard = new Card({ name, symbol, price });
    await newCard.save();
    res.status(201).json(newCard);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});