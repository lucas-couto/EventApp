const Usuarios_Eventos = require('./Usuarios_EventosModel')

async function deletarMeusEventosDB(idUsuario, idEvento){
    await Usuarios_Eventos.destroy({where:{id_usuario:idUsuario, id_evento:idEvento}})
}

module.exports = deletarMeusEventosDB
