const Eventos = require('./eventosModel')
let eventoExistente
let idEvento
async function adicionarEventoDB(nome, descricao, dia_inicio, dia_termino, horario_inicio, horario_termino) {
    eventoExistente = await Eventos.findOne({ where: { nome: nome } })
    if(eventoExistente)
        return 'EVENTO_EXISTENTE'
    else{
        await Eventos.create({
            nome: nome,
            descricao: descricao,
            dia_inicio: dia_inicio,
            dia_termino: dia_termino,
            horario_inicio: horario_inicio,
            horario_termino: horario_termino,
        }).then(evento =>{
            idEvento = evento.dataValues.id
        })
        return {
            title: 'EVENTO_CRIADO',
            idEvento: idEvento
        }
    }
}

module.exports = adicionarEventoDB