const express = require('express');
const router = express.Router();

const CarController = require('./controllers/CarController');
router.get('/cars', CarController.findAll);
router.get('/cars/:code', CarController.findOne);
router.post('/cars', CarController.insert);
router.put('/cars/:code', CarController.replace);


module.exports = router;