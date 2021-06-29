const Usuarios_Eventos = require('./Usuarios_EventosModel')
const Eventos = require('../../Tables/Eventos/eventosModel')
let eventosRLDB = []
async function listarMeusEventosDB(idUsuario){
    await Usuarios_Eventos.findAll({where:{id_usuario:idUsuario}})
        .then(eventos =>{
            eventos.forEach(evento =>{
                eventosRLDB.push(evento.dataValues.id_evento)
            })
        })
    await Eventos.findAll({where: {id: eventosRLDB}})
        .then(eventos =>{
            eventosRLDB = []
            eventos.forEach(evento =>{
                eventosRLDB.push(evento.dataValues)
            })
        })
    return eventosRLDB
}

module.exports = listarMeusEventosDB