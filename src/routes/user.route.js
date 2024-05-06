const { Router } = require('express');

const UserController = require('../controllers/UserController');

const userRoute = new Router();

userRoute.post('/', UserController.register);
userRoute.get('/', UserController.listAll);

module.exports = userRoute;