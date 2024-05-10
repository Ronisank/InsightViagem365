const { Router } = require('express');
const DestinationsController = require('../controllers/DestinationsController');
const auth = require('../middlewares/auth');

const destinationsRoute = new Router();

destinationsRoute.post('/', auth, DestinationsController.register
    /*
        #swagger.tags = ['Destinations'],
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Adiciona um novo destino.',
            schema: {
                destination_name: "Endereço do Local ",
                description: "Descrição do Local",
                postal_code: "CEP do Local",
                locality: "A localização",
                latitude: "-16.7143625",
                longitude: "-49.3028444",
            }
    
    */
);

destinationsRoute.get('/', auth, DestinationsController.listAll
    /*
        #swagger.tags = ['Destinations'],
        #swagger.parameters['query'] = {
            in: 'query',
            description: 'Filtrar destinos, associados ao usuário autenticado.',
            schema: {
                destination_name: "Nome do Local",
                description: "Descrição do Local",
                postal_code: "CEP do Local",
                locality: "A localização",
                latitude: "lat. do Local",
                longitude: "long. do Local",
            }                
    */
);
destinationsRoute.get('/:id', auth, DestinationsController.listOne
/*
    #swagger.tags = ['Destinations'],
    #swagger.parameters['path'] = {
        id: { description: "ID do destino" }
        description: "Retorna um destino específico informado pelo ID do destino, associado ao usuário autenticado.",
        schema: {
              destination_name: "Nome do Local",
              description: "Descrição do Local",
              postal_code: "CEP do Local",
              locality: "A localização",
              latitude: "lat. do Local",
              longitude: "long. do Local",
        }
*/
);
destinationsRoute.put('/:id', auth, DestinationsController.update
    /*
        #swagger.tags = ['Destinations'],
        #swagger.parameters['path'] = {
            id: { description: "ID do destino" }
        }
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Atualiza um destino específico informado pelo ID do destino, associado ao usuário autenticado.',
            schema: {
                destination_name: "Endereço do Local ",
                description: "Descrição do Local",
                postal_code: "CEP do Local",
                locality: "A localização",
                latitude: "A latitude do Local",
                longitude: "A longitude do Local",
            }
        }
    */
);
destinationsRoute.delete('/:id', auth, DestinationsController.delete
    /*
        #swagger.tags = ['Destinations'],
        #swagger.parameters['path'] = {
            id: { description: "ID do destino" }
        }
        #swagger.description = 'Exclui um destino específico informado pelo ID do destino, associado ao usuário autenticado.'
    */
);

module.exports = destinationsRoute;