const express = require('express');
const cors = require('cors');
const {connection} = require('./database/connection');

const PORT_API = process.env.PORT_API

class Server {}

module.exports = {Server}; //? Export the Server class
