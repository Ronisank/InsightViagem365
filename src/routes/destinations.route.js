const { Router } = require('express');
const DestinationsController = require('../controllers/DestinationsController');
const auth = require('../middlewares/auth');


const destinationsRoute = new Router();

destinationsRoute.post('/', auth, DestinationsController.register
    /*
        #swagger.tags = ['Destinations'],
        #swagger.description = 'Adiciona um novo destino.'
        #swagger.parameters['body'] = {
            in: 'body',
            type: 'object',
            description: 'Adiciona um novo destino, ao usuário autenticado.',
            schema: {
                description: "Descrição do Local",
                $postal_code: "00000000",                
            }  
        }
    */
);

destinationsRoute.get('/', auth, DestinationsController.listAll
    /*
        #swagger.tags = ['Destinations'],
        #swagger.description = 'Filtra todos os destinos, associados ao usuário autenticado.'
                   schema: {
                destination_name: "Nome do Local",
                description: "Descrição do Local",
                postal_code: "CEP do Local",
                locality: "A localização",
                latitude: "lat. do Local",
                longitude: "long. do Local",
            }  
        }              
    */
);
destinationsRoute.get('/:id', auth, DestinationsController.listOne
/*
    #swagger.tags = ['Destinations'],
    #swagger.description = 'Filtra um destino específico informado pelo ID do destino, associado ao usuário autenticado.'
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
    }
*/
);
destinationsRoute.put('/:id', auth, DestinationsController.update
    /*
        #swagger.tags = ['Destinations'],
       #swagger.description = 'Atualiza um destino específico informado pelo usuário.'
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Atualiza um destino específico informado pelo ID do destino, associado ao usuário autenticado.',
            schema: {
                description: "Descrição do Local",
                postal_code: "00000000",                
            }
        }
    */
);
destinationsRoute.delete('/:id', auth, DestinationsController.delete
    /*
        #swagger.tags = ['Destinations'],       
        
        #swagger.description = 'Exclui um destino específico informado pelo ID do destino, associado ao usuário autenticado.'
    */
);

module.exports = destinationsRoute;