const { getDbDiets, uploadDiets } = require("../adapter/Diet");


class Diet{
    async getDiets(req,res,next){
        try {
            const diets = await getDbDiets();
            if(diets.length){
                res.status(200).json(diets);
            }
            else {
                const dietsDb = await uploadDiets();
                res.status(200).json(dietsDb);
            }
        } catch (error) {
            next(error);
        }
    }
}

module.exports = Diet;