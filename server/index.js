const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db');
const recipesRouter = require('./routes/recipes-router');

if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
    console.log(`Development Environment .env file: process.env.key`);
};

const app = express();
const apiPort = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error.'));

app.get('/', (req, res) => {
    res.send('Instant Pot Recipes connected...')
});

app.use('/api', recipesRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));