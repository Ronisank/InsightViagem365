const { Router } = require('express');
const userRoute = require('./user.route');
const destinationsRoute = require('./destinations.route');
const loginRoute = require('./login.route');


const routes = Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../routes/swagger.json');

routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
routes.use('/users', userRoute);
routes.use('/destinations', destinationsRoute);
routes.use('/login', loginRoute);

module.exports = routes;