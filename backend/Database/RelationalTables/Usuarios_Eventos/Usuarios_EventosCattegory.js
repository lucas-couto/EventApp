const Usuarios_Eventos = require('./Usuarios_EventosModel')
let usuarioEvento
async function EventosRLDB(usuarioId, eventoId){
    usuarioEvento = false
    await Usuarios_Eventos.findOne({where:{id_usuario: usuarioId, id_evento: eventoId}})
        .then(async usuario_evento =>{
            if(usuario_evento)
                usuarioEvento = true
            else
                await Usuarios_Eventos.create({
                    id_usuario: usuarioId, 
                    id_evento: eventoId
                })
        })
    if(usuarioEvento){
        return 'USUARIO_EVENTO_EXISTE'
    }else{
        return 'USUARIO_EVENTO_CADASTRADO'
    }
}

module.exports = {EventosRLDB}