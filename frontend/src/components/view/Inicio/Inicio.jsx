import React from 'react'
import './Inicio.css'
import { Link } from 'react-router-dom'
export default () => {
    return (
        <div className="Inicio">
            <div className="Topo">
                <span>Event App</span>
                <div className="Botao">
                    <Link to="/usuario/login">
                        <button>Login</button>
                    </Link>
                    <Link to="/usuario/cadastro">
                        <button>Cadastrar</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}