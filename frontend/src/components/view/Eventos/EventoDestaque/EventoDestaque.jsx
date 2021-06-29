import React from 'react'
import './EventoDestaque.css'

export default props => {
    const voltarPagina = () => {
        props.voltarPagina()
    }
    return (
        <div className="EventoDestaque">
            <div className="Titulo">
                <button onClick={voltarPagina}>{'<-'}</button>
                <span>Titulo: <b>{props.nome}</b></span>
            </div>
            <div className="Conteudo">
                <div className="Descricao">
                    <label>Descrição:</label>
                    <p>{props.descricao}</p>
                </div>
                <div className="Informacoes">
                    <label>Informações:</label>
                    <span>ID: <b>{props.id}</b></span>
                    <span>Dia de inicio: <b>{props.dia_inicio}</b></span>
                    <span>Dia de termino: <b>{props.dia_termino}</b></span>
                    <span>Horário de inicio: <b>{props.horario_inicio}</b></span>
                    <span>Horário de termino: <b>{props.horario_termino}</b></span>
                </div>
            </div>
        </div>
    )
}