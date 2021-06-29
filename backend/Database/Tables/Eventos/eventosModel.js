const Sequelize = require('sequelize')
const connection = require('../../database')

const Eventos = connection.define('eventos', {
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    dia_inicio:{
        type: Sequelize.DATEONLY,
        allowNull: true
    },
    dia_termino:{
        type: Sequelize.DATEONLY,
        allowNull: true
    },
    horario_inicio:{
        type: Sequelize.STRING,
        allowNull: false
    },
    horario_termino:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Eventos