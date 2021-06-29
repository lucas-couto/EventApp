const { EventosRLDB } = require('../../Database/RelationalTables/Usuarios_Eventos/Usuarios_EventosCattegory')

async function inscreverEventoAPI(req, res) {
    res.header("Access-Control-Allow-Origin", "*")
    idUsuario = req.query.idUsuario
    idEvento = req.query.idEvento
    console.log(idUsuario, idEvento)
    result = await EventosRLDB(idUsuario, idEvento)
    res.json(result)
}

module.exports = inscreverEventoAPI