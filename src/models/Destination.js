const {connection} = require('../database/connection');
const {DataTypes} = require('sequelize');

const Destination = connection.define('destinations', {
    destination_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    postal_code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    locality: {
        type: DataTypes.STRING,
        allowNull: false
    },
    latitude: {
        type: DataTypes.STRING
    },
    longitude: {
        type: DataTypes.STRING
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

});

module.exports = Destination;