const { Router } = require('express');
const DestinationsController = require('../controllers/DestinationsController');

const destinationsRoute = new Router();

destinationsRoute.post('/', DestinationsController.register);
destinationsRoute.get('/', DestinationsController.listAll);
destinationsRoute.get('/:id', DestinationsController.listOne);
destinationsRoute.put('/:id', DestinationsController.update);
destinationsRoute.delete('/:id', DestinationsController.delete);

module.exports = destinationsRoute;