const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    username: String,
    password: String,
    // how to set a default value in the schema...
    // created:  {type: Date, default: Date.now},
  });


module.exports = mongoose.model('User', userSchema);
