const { Router } = require('express');
const DestinationsController = require('../controllers/DestinationsController');
const auth = require('../middlewares/auth');

const destinationsRoute = new Router();

destinationsRoute.post('/', auth, DestinationsController.register);
destinationsRoute.get('/', auth, DestinationsController.listAll);
destinationsRoute.get('/:id',auth, DestinationsController.listOne);
destinationsRoute.put('/:id',auth, DestinationsController.update);
destinationsRoute.delete('/:id',auth, DestinationsController.delete);

module.exports = destinationsRoute;