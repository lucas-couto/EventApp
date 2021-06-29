const Usuarios = require('./usuarioModel')
let usuarioExiste

async function cadastroUsuarioDB(nome, login, senha){
    usuarioExiste = await Usuarios.findOne({where:{login: login}})
    if(!usuarioExiste){
        await Usuarios.create({nome: nome, login:login, senha:senha})
        return 'USUARIO_CADASTRADO'
    }else{
        return 'USUARIO_EXISTENTE'
    }
}

module.exports = cadastroUsuarioDB