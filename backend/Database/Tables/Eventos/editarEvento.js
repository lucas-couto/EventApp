const Eventos = require('./eventosModel')

async function editarEventoDB(id, nome, descricao, dia_inicio, dia_termino, horario_inicio, horario_termino) {
    await Eventos.update({
        nome: nome,
        descricao: descricao,
        dia_inicio: dia_inicio,
        dia_termino: dia_termino,
        horario_inicio: horario_inicio,
        horario_termino: horario_termino,
    }, {
        where:
        {
            id: id
        }
    }).then(() =>{
        return 'EVENTO_EDITADO'
    }).catch(() =>{
        return 'EVENTO_NAO_EDITADO'
    })
}

module.exports = editarEventoDB 