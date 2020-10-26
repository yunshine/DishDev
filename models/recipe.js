const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Recipe = new Schema(
  {
    name: { type: String, required: true },
    ingredients: { type: [String], required: true },
    // rating: { type: Number, required: true },
  },
  { timestamps: true },
)

module.exports = mongoose.model('movies', Movie)