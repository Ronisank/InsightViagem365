const {Router} = require('express');
const LoginController = require('../controllers/LoginController');


const loginRoute = Router();

loginRoute.post('/', LoginController.login);

module.exports = loginRoute;