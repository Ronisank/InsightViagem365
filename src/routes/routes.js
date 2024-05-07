const { Router } = require('express');
const userRoute = require('./user.route');
const destinationsRoute = require('./destinations.route');
const loginRoute = require('./login.route');


const routes = Router();

routes.use('/users', userRoute);
routes.use('/destinations', destinationsRoute);
routes.use('/login', loginRoute);

module.exports = routes;