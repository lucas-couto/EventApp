const Sequelize = require('sequelize')
const connection = require('../../database')

const Usuarios_Eventos = connection.define('usuarios_eventos', {
    id_usuario:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    id_evento:{
        type: Sequelize.INTEGER,
        allowNull: false,
    }
})

module.exports = Usuarios_Eventos