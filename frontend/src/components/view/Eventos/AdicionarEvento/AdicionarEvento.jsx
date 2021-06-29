import React, {useState} from 'react'
import './AdicionarEvento.css'
import axios from 'axios'
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
        res = await axios.post(`http://localhost:3001/evento/adicionar?idUsuario=${props.idUsuario}&nome=${nomeEvento}&descricao=${descricaoEvento}
        &dia_inicio=${diaInicio}&dia_termino=${diaTermino}&horario_inicio=${horarioInicio}&horario_termino=${horarioTermino}`)
        console.log(res)
        if (res.data == 'USUARIO_EVENTO_CADASTRADO'){            
            alert('Evento cadastrado com sucesso!')
            props.voltarPagina()
        }
        else
            alert('Evento ja criado!')
    }
    const handleVoltarPagina = () =>{
        props.voltarPagina()
    }
    return (
        <div className="AdicionarEvento">
            <div className="Formulario">
                <div className="Cabecalho">
                    <button onClick={handleVoltarPagina}>{"<-"}</button>
                    <span>Adicionar Evento</span>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="InputTeclado">
                        <input type="text" placeholder="Novo nome" onChange={e => { setNomeEvento(e.target.value) }} />
                        <input type="text" placeholder="Nova descrição" onChange={e => { setDescricaoEvento(e.target.value) }} />
                        <input type="date" onChange={e => { setDiaInicio(e.target.value) }} />
                        <input type="date" onChange={e => { setDiaTermino(e.target.value) }} />
                        <input type="text" placeholder="Nova horário inicio" onChange={e => { setHorarioInicio(e.target.value) }} />
                        <input type="text" placeholder="Nova horário termino" onChange={e => { setHorarioTermino(e.target.value) }} />
                    </div>
                    <div className="InputBotao">
                        <input type="submit" value="Adicionar" />
                    </div>
                </form>
            </div>
        </div>
    )
}