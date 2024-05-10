const { Router } = require('express');
const LoginController = require('../controllers/LoginController');


const loginRoute = Router();

loginRoute.post('/', LoginController.login
/*
    #swagger.tags = ['Login'],
    #swagger.parameters['body'] = {
        in: 'body',
        description: 'Realiza o login.',
        schema: {
            email: "nome@email.com",
            password: "********",
        }
*/            
);

module.exports = loginRoute;