const listarTodosEventosDB = require('../../Database/Tables/Eventos/listarEventos')
let result
async function listarTodosEventosAPI(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    result = await listarTodosEventosDB()
    res.json(result)
}

module.exports = listarTodosEventosAPI