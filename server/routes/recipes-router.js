const express = require('express');

const recipesController = require('../controllers/recipes-controller');

const router = express.Router();

router.post('/recipes/create', recipesController.createRecipe);
router.put('/recipes/:id', recipesController.updateRecipe);
router.delete('/recipes/:id', recipesController.deleteRecipe);
router.get('/recipes/list', recipesController.getRecipes);
router.get('/recipes/:id', recipesController.getRecipeById);

module.exports = router;