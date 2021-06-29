const connection = require('./database')

const Usuarios = require('./Tables/Usuarios/usuarioModel')
const Eventos = require('./Tables/Eventos/eventosModel')
const Usuarios_Eventos = require('./RelationalTables/Usuarios_Eventos/Usuarios_EventosModel')

Usuarios_Eventos.belongsTo(Usuarios, {foreignKey: 'id_usuario', targetKey: 'id'}, { onDelete: 'CASCADE'}) 
Usuarios_Eventos.belongsTo(Eventos, {foreignKey: 'id_evento', targetKey: 'id'}) 

module.exports = connection.sync()