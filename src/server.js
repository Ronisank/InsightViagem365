const express = require('express');
const cors = require('cors');
const { connection } = require('./database/connection');

const PORT_API = process.env.PORT_API

class Server {
    constructor(server = express()) {
        this.middlewares(server);
        this.database();
        this.initializeServer(server);
    }
    async middlewares(app) {
        app.use(express.json());
        app.use(cors());
    }
    async database() {
        try {
            await connection.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
            throw error;
        }
    }
    async initializeServer(app) {
        app.listen(PORT_API, () => console.log(`Server is running on port ${PORT_API}`));
    }
}

module.exports = { Server }; //? Export the Server class
