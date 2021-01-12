const mongoose = require('mongoose');
const developmentDB = 'mongodb://127.0.0.1:27017/instant_pot_recipes';
const dbUrl = process.env.DB_URL;

// mongoose.connect(developmentDB, {
// mongoose.connect(dbUrl, {
mongoose.connect('mongodb+srv://yunshine:ilJC8239@cluster0.zow7p.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    // mongoose.connect('mongodb://127.0.0.1:27017/instant_pot_recipes', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
    .then(() => console.log('Connected to database!'))
    .catch(error => console.error('Connection error', error.message));

const db = mongoose.connection;

module.exports = db;