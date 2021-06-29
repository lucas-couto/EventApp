const cadastroUsuarioDB = require('../../Database/Tables/Usuarios/cadastroUsuario')
let nome
let login
let senha
let result
async function cadastroUsuarioAPI(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    nome = req.query.nome
    login = req.query.login
    senha = req.query.senha
    result = await cadastroUsuarioDB(nome,login,senha)
    res.send(result)
}

module.exports = cadastroUsuarioAPI