const Usuarios = require('./usuarioModel')
let usuarioExiste
let infoUsuario
async function loginUsuarioDB(login, senha) {
    usuarioExiste = await Usuarios.findOne({ where: { login: login, senha: senha } })
    if (usuarioExiste) {
        infoUsuario = usuarioExiste.dataValues
        return {
            title: 'USUARIO_LOGADO',
            usuario: infoUsuario
        }
    } else {
        return {
            title: 'USUARIO_NAO_AUTORIZADO',
            usuario: null
        }
    }
}

module.exports = loginUsuarioDB