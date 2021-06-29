const editarEventoDB = require('../../Database/Tables/Eventos/editarEvento')

let nome
let descricao
let dia_inicio
let dia_termino
let horario_inicio
let horario_termino
let result
async function editarEventoAPI(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    id = req.query.id
    nome = req.query.nome
    descricao = req.query.descricao
    dia_inicio = req.query.dia_inicio
    dia_termino = req.query.dia_termino
    horario_inicio = req.query.horario_inicio
    horario_termino = req.query.horario_termino
    console.log(id, nome)
    result = await editarEventoDB(id, nome, descricao, dia_inicio, dia_termino, horario_inicio, horario_termino)
    res.json(result)
}

module.exports = editarEventoAPI