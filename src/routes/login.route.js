const { Router } = require('express');
const LoginController = require('../controllers/LoginController');


const loginRoute = Router();

loginRoute.post('/', LoginController.login
/*
    #swagger.tags = ['Login'],
    #swagger.description = 'Realiza o login, com email e senha. Retorna um token de acesso.'
    #swagger.parameters['body'] = {
        in: 'body',
        type: 'object',
        description: 'Realiza o login, com email e senha.',
        schema: {
            email: "nome@email.com",
            password: "********",
        }
    }
*/            
);

module.exports = loginRoute;