const express = require('express');
const router = express.Router();

const CarController = require('./controllers/CarController');
router.get('/cars', CarController.findAll);
router.get('/cars/:code', CarController.findOne);


module.exports = router;