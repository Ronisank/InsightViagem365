const { Router } = require('express');
const userRoute = require('./user.route');
const destinationsRoute = require('./destinations.route');


const routes = Router();

routes.use('/users', userRoute);
routes.use('/destinations', destinationsRoute);

module.exports = routes;