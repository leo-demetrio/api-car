const db = require('../db');

module.exports = {
    findAll: () => {
        return new Promise((acept, rej) => {
            db.query("SELECT * FROM tb_cars", (error, result)=> {
                if(error) {rej(error);return;}
                acept(result);
            });
        });
    },
    findOne: (code) => {
        return new Promise((acept, rej) => {
            db.query("SELECT * FROM tb_cars WHERE code = ?", [code], (error, result)=> {
                if(error) {rej(error);return;}
                if(result.length < 0) acept(false);
                acept(result[0]);
            });
        });
    }
};