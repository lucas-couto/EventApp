import React from 'react'
import './Perfil.css'
import { Switch, Route, Link } from 'react-router-dom'
import TodosEventos from '../Eventos/TodosEventos/TodosEventos'
import MeusEventos from '../Eventos/MeusEventos/MeusEventos'
let usuario
export default () => {
    usuario = localStorage.getItem("usuario")
    usuario = JSON.parse(usuario)
    return (
        <div className="Perfil">
            <div className="Topo">
                <span>Bem vindo <b>{usuario.nome}</b>!</span>
                <div className="Botao">
                    <button>Sair</button>
                </div>
            </div>
            <div className="Corpo">
                <div className="Menu">
                    <div className="Titulo">
                        <span>Menu</span>
                    </div>
                    <div className="Links">
                        <Link to="/perfil/evento/todosEventos">
                            Todos os Eventos
                        </Link><br />
                        <Link to="/perfil/evento/meusEventos">
                            Meus Eventos
                        </Link>
                    </div>
                </div>
                <div className="Conteudo">
                    <Switch>
                        <Route path="/perfil/evento/todosEventos">
                            <TodosEventos/>
                        </Route>
                        <Route path="/perfil/evento/meusEventos">
                            <MeusEventos idUsuario={usuario.id}/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
}