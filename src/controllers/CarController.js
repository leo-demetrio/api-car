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
    },
    findOne: async (req, res)=> {
        let json = { error:'', result: {}};
        let code = req.params.code;
        let cars = await CarService.findOne(code);  
        if(cars) json.result = cars; 
        res.json(json);
    }
}