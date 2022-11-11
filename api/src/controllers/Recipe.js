const {getApiRecipe,postDbRecipe} = require('../adapter/Recipe.js');

class Recipe {
    async getRecipe(req,res,next){
        try {
            let data = await getApiRecipe();
            res.status(200).json(data);
        } catch (error) {
            next(error);
        }
    }
    async postRecipe(req,res,next){
        try {
            const {recipe,diets} = req.body;
            const result = await postDbRecipe(recipe,diets);
            res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = Recipe;