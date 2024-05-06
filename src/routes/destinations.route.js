const {Router} = require('express');
const DestinationsController = require('../controllers/DestinationsController');

const destinationsRoute = new Router();

destinationsRoute.post('/', DestinationsController.register);

module.exports = destinationsRoute;