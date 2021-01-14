const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db');
const recipesRouter = require('./routes/recipes-router');

if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
    let currentEnviroment = process.env.NODE_ENV || "development";
    console.log(`Current Server Environment: ${currentEnviroment}`);
};

const app = express();
const apiPort = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error.'));

app.get('/', (req, res) => {
    res.send('Instant Pot Recipes server connected and listening on Heroku...')
});

app.use('/api', recipesRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));