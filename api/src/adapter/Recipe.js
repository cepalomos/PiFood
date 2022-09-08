require("dotenv").config();
const axios = require("axios");
const { Diet, Recipe } = require("../db.js");
const { API_PETICION } = process.env;

async function getRecipe() {
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
      steps:analyzedInstructions.map(({steps})=>steps.map(({step})=>step)).join('%'),
      diets
    }));
  } catch (error) {
    new Error(error);
  }
}

module.exports = { getRecipe };
