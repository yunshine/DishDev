const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/instant_pot_recipes', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
    .then(() => console.log('Connected to database!'))
    .catch(error => console.error('Connection error', error.message));

const db = mongoose.connection;

module.exports = db;