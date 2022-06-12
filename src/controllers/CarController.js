const CarService = require('../service/CarService');

module.exports = {
    findAll: async (req, res)=> {
        let json = { error:'', result:[]};
        let cars = await CarService.findAll();

        for(let i in cars){
            json.result.push({
                code: cars[i].code,
                model: cars[i].model
            })
        }
        res.json(json);
    }
}