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
    },
    insert: async (req, res)=> {
        let json = { error:'', result: {}};
        let body = req.body;
        let car = await CarService.insert(body);  
        if(car) json.result = car; 
        res.json(body);
    },
    replace: async (req, res)=> {
        let json = { error:'', result: {}};
        let code = req.params.code;
        let body = req.body;
        if(!(code && body.model && body.board)){
            json.error = 'Could not complete action';
            res.json(json);
            return;
        }
        let cars = await CarService.findOne(code);  
        if(!cars){
            json.error = 'Could not complete action find';
            res.json(json);
            return;
        }      
        
        await CarService.replace(code,body); 
        json.result = {
            code, model: body.model, board: body.board
        }
        res.json(json);
    },
    delete: async (req, res)=> {
        let json = { error:'', result: {}};
        let code = req.params.code;
        if(!(code)){
            json.error = 'Could not complete action';
            res.json(json);
            return;
        }
        let cars = await CarService.findOne(code);  
        if(!cars){
            json.error = 'Could not complete action find';
            res.json(json);
            return;
        }   
        await CarService.delete(code);
        res.json(json);
    }
}