const loginUsuarioDB = require('../../Database/Tables/Usuarios/loginUsuario')
let login
let senha
let result
async function loginUsuarioAPI(req, res) {
    res.header("Access-Control-Allow-Origin", "*")
    login = req.query.login
    senha = req.query.senha
    result = await loginUsuarioDB(login, senha)
    res.json(result)
}

module.exports = loginUsuarioAPI