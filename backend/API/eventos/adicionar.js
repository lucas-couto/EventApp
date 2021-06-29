const adicionarEventoDB = require('../../Database/Tables/Eventos/adicionarEvento')
const {EventosRLDB} = require('../../Database/RelationalTables/Usuarios_Eventos/Usuarios_EventosCattegory')
let idUsuario
let nome
let descricao
let dia_inicio
let dia_termino
let horario_inicio
let horario_termino
let result
async function adicionarEventoAPI(req,res) {
    res.header("Access-Control-Allow-Origin", "*")
    idUsuario = req.query.idUsuario
    nome = req.query.nome
    descricao = req.query.descricao
    dia_inicio = req.query.dia_inicio
    dia_termino = req.query.dia_termino
    horario_inicio = req.query.horario_inicio
    horario_termino = req.query.horario_termino
    result = await adicionarEventoDB(nome, descricao, dia_inicio, dia_termino, horario_inicio, horario_termino)
    if(result.title == 'EVENTO_CRIADO'){
        result = await EventosRLDB(idUsuario, result.idEvento)
        res.json(result)
    }else{
        res.json(result)
    }
}

module.exports = adicionarEventoAPI