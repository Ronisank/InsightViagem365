const { Router } = require('express');

const UserController = require('../controllers/UserController');
const auth  = require('../middlewares/auth');
const validating = require('../middlewares/validating');

const userRoute = new Router();

userRoute.post('/', validating, UserController.register);
userRoute.get('/', auth, UserController.listAll);

module.exports = userRoute;