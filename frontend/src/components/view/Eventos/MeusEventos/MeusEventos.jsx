import React, { useState, useEffect } from 'react'
import './MeusEventos.css'
import EventoDestaque from '../EventoDestaque/EventoDestaque'
import EditarEvento from '../EditarEvento/EditarEvento'
import AdicionarEvento from '../AdicionarEvento/AdicionarEvento'
import axios from 'axios'
let res
export default props => {
    const [eventos, setEventos] = useState([])
    const [displayDetalhes, setDisplayDetalhes] = useState(false)
    const [displayEditar, setDisplayEditar] = useState(false)
    const [displayAdicionar, setDisplayAdicionar] = useState(false)
    const [displayAdicionarBotao, setDisplayAdicionarBotao] = useState('block')
    const [idEvento, setIdEvento] = useState(null)
    const [nomeEvento, setNomeEvento] = useState(null)
    const [descricaoEvento, setDescricaoEvento] = useState(null)
    const [diaInicio, setDiaInicio] = useState(null)
    const [diaTermino, setDiaTermino] = useState(null)
    const [horarioInicio, setHorarioInicio] = useState(null)
    const [horarioTermino, setHorarioTermino] = useState(null)
    const pegarLista = async () => {
        res = await axios.get(`http://localhost:3001/evento/listarMeusEventos/${props.idUsuario}`)
        setEventos(res.data)
    }
    useEffect(() => {
        pegarLista()
    }, [])
    const deletarEvento = async e => { 
        let idEvento = e.currentTarget.getAttribute("data-id-evento")
        if (window.confirm('Deseja mesmo excluir esse evento?')) {
            res = await axios.post(`http://localhost:3001/evento/deletar?idUsuario=${props.idUsuario}&idEvento=${idEvento}`)
            console.log(res)
            alert('Evento deletado!')
        }
    }
    const handleVoltarPagina = () => {
        setDisplayDetalhes(false)
        setDisplayEditar(false)
        setDisplayAdicionar(false)
        setDisplayAdicionarBotao('block')
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
    const handleEditar = e => {
        setIdEvento(e.currentTarget.getAttribute("data-id-evento"))
        setNomeEvento(e.currentTarget.getAttribute("data-nome-evento"))
        setDescricaoEvento(e.currentTarget.getAttribute("data-descricao-evento"))
        setDiaInicio(e.currentTarget.getAttribute("data-dia-inicio-evento"))
        setDiaTermino(e.currentTarget.getAttribute("data-dia-termino-evento"))
        setHorarioInicio(e.currentTarget.getAttribute("data-horario-inicio-evento"))
        setHorarioTermino(e.currentTarget.getAttribute("data-horario-termino-evento"))
        setDisplayEditar(true)
    }
    const handleAdicionar = () =>{
        setDisplayAdicionarBotao('none')
        setDisplayAdicionar(true)
    }
    const List = eventos.map(evento => {
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
                    <button
                        data-id-evento={evento.id}
                        data-nome-evento={evento.nome}
                        data-descricao-evento={evento.descricao}
                        data-dia-inicio-evento={evento.dia_inicio}
                        data-dia-termino-evento={evento.dia_termino}
                        data-horario-inicio-evento={evento.horario_inicio}
                        data-horario-termino-evento={evento.horario_termino}
                        onClick={handleEditar}>
                        Editar
                    </button>
                    <button
                        data-id-evento={evento.id}
                        onClick={deletarEvento}>
                        Excluir
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
        } else if (displayEditar) {
            return(
                <EditarEvento
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
        }else if(displayAdicionar){
            return(
                <AdicionarEvento
                    idUsuario={props.idUsuario}
                    voltarPagina={handleVoltarPagina}
                />
            )
        } else {
            return (
                <div className="Eventos">
                    <ul>
                        {List}
                    </ul>
                </div>
            )
        }
    }
    return (
        <div className="MeusEventos">
            <button className="botaoAdicionar" onClick={handleAdicionar} style={{display:displayAdicionarBotao}}>+ Adicionar Evento</button>
            <h1>Meus Eventos</h1>
            {handleComponents()}
        </div>
    )
}