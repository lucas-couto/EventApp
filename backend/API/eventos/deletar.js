const deletarEventoDB = require('../../Database/Tables/Eventos/deletarEvento')
const deletarMeusEventosDB = require('../../Database/RelationalTables/Usuarios_Eventos/deletarMeusEventos')
async function deletarEventosAPI(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    idUsuario = req.query.idUsuario
    idEvento = req.query.idEvento
    await deletarMeusEventosDB(idUsuario, idEvento)
    await deletarEventoDB(idEvento)
    res.json('OK')
}

module.exports = deletarEventosAPI