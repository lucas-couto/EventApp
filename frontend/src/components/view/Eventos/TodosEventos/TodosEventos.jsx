import React, { useState, useEffect } from 'react'
import './TodosEventos.css'
import axios from 'axios'
import EventoDestaque from '../EventoDestaque/EventoDestaque'
let res
export default () => {
    const [eventos, setEventos] = useState([])
    const [displayDetalhes, setDisplayDetalhes] = useState(false)
    const [idEvento, setIdEvento] = useState(null)
    const [nomeEvento, setNomeEvento] = useState(null)
    const [descricaoEvento, setDescricaoEvento] = useState(null)
    const [diaInicio, setDiaInicio] = useState(null)
    const [diaTermino, setDiaTermino] = useState(null)
    const [horarioInicio, setHorarioInicio] = useState(null)
    const [horarioTermino, setHorarioTermino] = useState(null)
    const pegarLista = async () => {
        res = await axios.get('http://localhost:3001/evento/listarTodosEventos')
        setEventos(res.data)
    }
    useEffect(() => {
        pegarLista()
    }, [])
    const handleVoltarPagina = () =>{
        setDisplayDetalhes(false)
    }
    const handleDetalhes = e => {
        setIdEvento(e.currentTarget.getAttribute("data-id-evento"))
        setNomeEvento(e.currentTarget.getAttribute("data-nome-evento"))
        setDescricaoEvento(e.currentTarget.getAttribute("data-descricao-evento"))
        setDiaInicio(e.currentTarget.getAttribute("data-dia-inicio-evento"))
        setDiaTermino(e.currentTarget.getAttribute("data-dia-termino-evento"))
        setHorarioInicio(e.currentTarget.getAttribute("data-horario-inicio-evento"))
        setHorarioTermino(e.currentTarget.getAttribute("data-horario-termino-evento"))
        setDisplayDetalhes(true)
    }
    const Lista = eventos.map(evento => {
        return (
            <div className="Evento">
                <li>{evento.id}-{evento.nome}</li>
                <div className="Botao">
                    <button
                        data-id-evento={evento.id}
                        data-nome-evento={evento.nome}
                        data-descricao-evento={evento.descricao}
                        data-dia-inicio-evento={evento.dia_inicio}
                        data-dia-termino-evento={evento.dia_termino}
                        data-horario-inicio-evento={evento.horario_inicio}
                        data-horario-termino-evento={evento.horario_termino}
                        onClick={handleDetalhes}>
                        Detalhes
                    </button>
                </div>
            </div>
        )
    })
    const handleComponents = () => {
        if (displayDetalhes) {
            return (
                <EventoDestaque
                    id={idEvento}
                    nome={nomeEvento}
                    descricao={descricaoEvento}
                    dia_inicio={diaInicio}
                    dia_termino={diaTermino}
                    horario_inicio={horarioInicio}
                    horario_termino={horarioTermino}
                    voltarPagina={handleVoltarPagina}
                />
            )
        } else {
            return (
                <div className="Eventos">
                    <ul>
                        {Lista}
                    </ul>
                </div>
            )
        }
    }
    return (
        <div className="TodosEventos">
            <h1>Todos os Eventos</h1>
            {handleComponents()}
        </div>
    )
}