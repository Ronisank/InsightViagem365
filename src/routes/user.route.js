const { Router } = require('express');

const UserController = require('../controllers/UserController');
const validating = require('../middlewares/validating');

const userRoute = new Router();

userRoute.post('/', validating, UserController.register
    /*
                #swagger.tags = ['User'],
                #swagger.description = 'Adiciona um novo usuário.'
                #swagger.parameters['body'] = {
                     in: 'body',
                     description: 'Adiciona um novo usuário.',
                     schema: {
                           name: "Fulano de Tal",
                           email: "fulano@email.com",
                           password: "********",
                           cpf: "12345678900",
                           date_of_birth: "yyyy-mm-dd",
                           gender: "Male or Female",
                           postal_code: "12345678",
                           address: "Rua Tal, ",
                 }
             }
         */
);

module.exports = userRoute;