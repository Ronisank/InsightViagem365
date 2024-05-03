const { connection } = require('../database/connection');
const { DataTypes } = require('sequelize');

const User = connection.define('users', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: { msg: 'Invalid email format' },
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: { args: [11, 11], msg: '11 characters are required ' },
        }
    },
    date_of_birth: {
        type: DataTypes.DATE,
        allowNull: false
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: { args: [['Male', 'Female', 'Masculino', 'Feminino', 'Other','Outro']], msg: "Invalid gender, Male or Female " },
        }
    },
    adress: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = User;