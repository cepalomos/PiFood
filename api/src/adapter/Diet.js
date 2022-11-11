require("dotenv").config();
const axios = require("axios");
const { Diet, Recipe } = require("../db.js");
const { unico } = require("../utils/Utilis.js");
const { API_PETICION } = process.env;

async function getDbDiets(){
    try {
      let diet = Diet.findAll({
        attributes: ["id", "name"],
        // include: {
        //   model: Diet,
        //   attributes: ["id","name"],
        //   through: { attributes: [] },
        // },
      })
      return diet;
    } catch (error) {
      throw {status:500,message:"Error en servidor"};
    }}

    async function uploadDiets(){
      try {
        const {data:{results}} = await axios(API_PETICION);
        const datos = results.map(({diets})=>diets).flat();
        const dietsApi = unico(datos);
        const diets = await Diet.bulkCreate(dietsApi);
        return diets
      } catch (error) {
        throw {status:500,message:"Error en servidor"}
      }
    }

module.exports = {getDbDiets,uploadDiets}