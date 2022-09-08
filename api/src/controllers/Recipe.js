const {getRecipe} = require('../adapter/Recipe.js');

class Recipe {
    async getApiRecipe(req,res,next){
        try {
            let data = await getRecipe();
            res.status(200).json(data);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = Recipe;