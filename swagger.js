const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        version: "1.0.0",
        title: 'API-Viagem365',
        description: 'API para gerenciamento de locais turísticos e viagens',

    },
    host: 'localhost:3000',
    security: [{ "apiKeyAuth": [] }],
    securityDefinitions: {
        apiKeyAuth: {
            type: 'apiKey',
            in: 'header', // can be 'header', 'query' or 'cookie'
            name: 'authorization', // name of the header, query parameter or cookie
            description: 'Token de Autenticação'
        }
    }
};

const outputFile = './src/routes/swagger.json';
const routes = ['./src/server.js'];

swaggerAutogen(outputFile, routes, doc);