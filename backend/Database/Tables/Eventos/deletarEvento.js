const Eventos = require('./eventosModel')

async function deletarEventoDB(id) {
    await Eventos.destroy({ where: { id: id } }) ? ('EVENTO_REMOVIDO') : ('EVENTO_NAO_REMOVIDO')
}

module.exports = deletarEventoDB