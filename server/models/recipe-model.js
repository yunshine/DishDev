const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    images: { type: [String], required: true },
    ingredients: { type: [String], required: true },
    directions: { type: [String], required: true },
    // rating: { type: Number, required: true },

    // author: {
    //   id: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User"
    //   },
    //   username: String
    // },

},
    { timestamps: true },
);

// 'recipes' should be uppercase and singular, and Recipe should be recipeSchema...
module.exports = mongoose.model('Recipe', recipeSchema);