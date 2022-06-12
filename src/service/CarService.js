const db = require('../db');

module.exports = {
    findAll: () => {
        return new Promise((acept, rej) => {
            db.query("SELECT * FROM tb_cars", (error, result)=> {
                if(error) {rej(error);return;}
                acept(result);
            });
        });
    }
};