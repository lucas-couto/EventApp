import React, { useState } from 'react'
import './EditarEvento.css'
import axios from 'axios'
import EventoDestaque from '../EventoDestaque/EventoDestaque'
let res
export default props => {
    const [nomeEvento, setNomeEvento] = useState(null)
    const [descricaoEvento, setDescricaoEvento] = useState(null)
    const [diaInicio, setDiaInicio] = useState(null)
    const [diaTermino, setDiaTermino] = useState(null)
    const [horarioInicio, setHorarioInicio] = useState(null)
    const [horarioTermino, setHorarioTermino] = useState(null)
    const handleSubmit = async e => {
        e.preventDefault()
        res = await axios.post(`http://localhost:3001/evento/editar?id=${props.id}&nome=${nomeEvento}&descricao=${descricaoEvento}
        &dia_inicio=${diaInicio}&dia_termino=${diaTermino}&horario_inicio=${horarioInicio}&horario_termino=${horarioTermino}`)
        if (res.data == 'EVENTO_EDITADO'){
            alert('Evento editado com sucesso!')
            props.voltarPagina()
        }
        else
            alert('Ocorreu um erro, tente novamente mais tarde!')
    }
    const handleVoltarPagina = () =>{
        props.voltarPagina()
    }
    return (
        <div className="EditarEvento">
            <EventoDestaque
                id={props.id}
                nome={props.nome}
                descricao={props.descricao}
                dia_inicio={props.dia_inicio}
                dia_termino={props.dia_termino}
                horario_inicio={props.horario_inicio}
                horario_termino={props.horario_termino}
                voltarPagina={handleVoltarPagina}
            />
            <div className="Formulario">
                <div className="Cabecalho">
                    <button onClick={handleVoltarPagina}>{"<-"}</button>
                    <span>Editar Evento</span>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="InputTeclado">
                        <input type="text" placeholder="Novo nome" onChange={e => { setNomeEvento(e.target.value) }} />
                        <input type="text" placeholder="Nova descrição" onChange={e => { setDescricaoEvento(e.target.value) }} />
                        <input type="date"  onChange={e => { setDiaInicio(e.target.value) }} />
                        <input type="date"  onChange={e => { setDiaTermino(e.target.value) }} />
                        <input type="text" placeholder="Nova horário inicio" onChange={e => { setHorarioInicio(e.target.value) }} />
                        <input type="text" placeholder="Nova horário termino" onChange={e => { setHorarioTermino(e.target.value) }} />
                    </div>
                    <div className="InputBotao">
                        <input type="submit" value="Editar"/>
                    </div>
                </form>
            </div>
        </div>
    )
}