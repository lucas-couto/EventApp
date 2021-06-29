import React, {useState} from 'react'
import './Login.css'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
let res
export default () => {
    const [login, setLogin] = useState(null)
    const [senha, setSenha] = useState(null)
    const [redirecionar, setRedirecionar] = useState(false)
    const handleSubmit = async e =>{
        e.preventDefault()
        res = await axios.post(`http://localhost:3001/usuario/logar?&login=${login}&senha=${senha}`)
        console.log(res.data)
        if(res.data.title == 'USUARIO_LOGADO'){
            localStorage.setItem("usuario", JSON.stringify(res.data.usuario))
            alert('Você foi logado com sucesso!')
            setRedirecionar(true)
        }
        else
            alert('Login e/ou senha incorretos. Por favor, tente novamente!')
    }
    return (
        <div className="Login">
            <div className="Formulario">
                <div className="Cabecalho">
                <Link to="/">
                        <button>{"<-"}</button>
                    </Link>
                    <span>Logar</span>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="InputTeclado">
                        <input type="text" placeholder="Login" onChange={e => {setLogin(e.target.value)}}/>
                        <input type="password" placeholder="Senha" onChange={e => {setSenha(e.target.value)}}/>
                    </div>
                    <div className="InputBotao">
                        <input type="submit" value="Login" />
                    </div>
                </form>
            </div>
            {redirecionar? <Redirect to="/perfil"/>: null}
        </div>
    )
}