require("dotenv").config();
const axios = require("axios");
const { Diet, Recipe } = require("../db.js");
const { API_PETICION } = process.env;

async function getApiRecipe() {
  try {
    const {
      data: { results },
    } = await axios(API_PETICION);
    return results.map(({ id, title: name, summary,healthScore:points,veryHealthy,analyzedInstructions,diets }) => ({
      id,
      name,
      summary,
      points,
      veryHealthy,
      steps:analyzedInstructions.map(({steps})=>steps.map(({step})=>step)).join("*"),
      diets
    }));
  } catch (error) {
    throw {status:400,message:"No se encontro nada"};
  }
}

async function postDbRecipe(recipeFront,diets){
  let recipe =await Recipe.create(recipeFront).then(recipe=>recipe.addDiet(diets));
  console.log(recipe)
  if(recipe){
    return Recipe.findOne({
      where:{id:recipe[0].recipeId},
      include: {
        model: Diet,
        attributes: ["name"],
        through: { attributes: [] },
      },
     });
  }else{
    throw {status:400,message:"Fallo la creacion de la receta"}
  }
}

module.exports = { getApiRecipe,postDbRecipe };
