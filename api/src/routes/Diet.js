const {Router}=require("express");
const Diet = require("../controllers/Diet");
const route = Router();
const diet = new Diet();

route.get("/",diet.getDiets);

module.exports = route;