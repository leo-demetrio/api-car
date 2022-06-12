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
    },
    insert: (body) => {
        return new Promise((acept, rej) => {
            db.query("INSERT INTO tb_cars (model,board) VALUES (?,?)", 
            [body.model,body.board], 
            (error, result)=> {
                if(error) {rej(error);return;}
                acept(result.code);
            });
        });
    },
    replace: (code,body) => {
        return new Promise((acept, rej) => {
            db.query("UPDATE tb_cars SET model = ? ,board = ? WHERE code= ?", 
            [body.model,body.board,code], 
            (error, result)=> {
                if(error) {rej(error);return;}
                acept(result);
            });
        });
    },
    delete: (code) => {
        return new Promise((acept, rej) => {
            db.query("DELETE FROM tb_cars WHERE code= ?", 
            [code], 
            (error, result)=> {
                if(error) {rej(error);return;}
                acept(result);
            });
        });
    }
};