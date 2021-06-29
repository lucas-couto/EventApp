const Sequelize = require('sequelize')
const connection = require('../../database')

const Usuarios = connection.define('usuarios', {
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    login:{
        type: Sequelize.STRING,
        allowNull: false
    },
    senha:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Usuarios