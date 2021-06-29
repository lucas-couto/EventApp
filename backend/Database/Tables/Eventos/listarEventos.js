const Eventos = require('./eventosModel')
let eventos
let eventosLimpo = []
async function listarTodosEventosDB() {
    eventosLimpo = []
    eventos = await Eventos.findAll()
    for(let evento of eventos){
        eventosLimpo.push({
            id:evento.dataValues.id,
            nome: evento.dataValues.nome,
            descricao: evento.dataValues.descricao,
            dia_inicio: evento.dataValues.dia_inicio,
            dia_termino: evento.dataValues.dia_termino,
            horario_inicio: evento.dataValues.horario_inicio,
            horario_termino: evento.dataValues.horario_termino,
        })
    }
    return eventosLimpo
}

module.exports = listarTodosEventosDB