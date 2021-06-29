const listarMeusEventosDB = require('../../Database/RelationalTables/Usuarios_Eventos/listarMeusEventos')
let idUsuario
let result
async function listarMeusEventosAPI(req,res){
    idUsuario = req.params.idUsuario
    res.header("Access-Control-Allow-Origin", "*")
    result = await listarMeusEventosDB(idUsuario)
    res.json(result)
}

module.exports = listarMeusEventosAPI