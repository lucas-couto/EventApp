import React, {useState} from 'react'
import './Cadastro.css'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
let res
export default () => {
    const [nome, setNome] = useState(null)
    const [login, setLogin] = useState(null)
    const [senha, setSenha] = useState(null)
    const [redirecionar, setRedirecionar] = useState(false)
    const handleSubmit = async e =>{
        e.preventDefault()
        res = await axios.post(`http://localhost:3001/usuario/cadastrar?nome=${nome}&login=${login}&senha=${senha}`)
        if(res.data == 'USUARIO_CADASTRADO'){
            alert('Você foi cadastrado com sucesso!')
            setRedirecionar(true)
        }
        else
            alert('Usuario já existente! Tente com outro login.')
    }
    return (
        <div className="Cadastro">
            <div className="Formulario">
                <div className="Cabecalho">
                    <Link to="/">
                        <button>{"<-"}</button>
                    </Link>
                    <span>Cadastrar</span>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="InputTeclado">
                        <input type="text" placeholder="Nome" onChange={e => {setNome(e.target.value)}}/>
                        <input type="text" placeholder="Login" onChange={e => {setLogin(e.target.value)}}/>
                        <input type="password" placeholder="Senha" onChange={e => {setSenha(e.target.value)}}/>
                    </div>
                    <div className="InputBotao">
                        <input type="submit" value="Cadastrar" />
                    </div>
                </form>
            </div>
            {redirecionar? <Redirect to="/usuario/login"/>: null}
        </div>
    )
}