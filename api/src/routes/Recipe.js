const {Router} = require('express');
const router = Router();
const Recipe = require('../controllers/Recipe');
const recipe = new Recipe

router.route("/").get(recipe.getRecipe).post(recipe.postRecipe);


module.exports = router;