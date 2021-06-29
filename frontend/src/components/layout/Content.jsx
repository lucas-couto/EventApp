import React from 'react'
import './Content.css'
import {Switch, Route} from 'react-router-dom'
import Inicio from '../view/Inicio/Inicio'
import Login from '../view/Usuario/Login/Login'
import Cadastro from '../view/Usuario/Cadastro/Cadastro'
import Perfil from '../view/Perfil/Perfil'
export default () =>{
    return(
        <div className="Content">
            <Switch>
                <Route path="/perfil">
                    <Perfil/>
                </Route>
                <Route exact path="/usuario/cadastro">
                    <Cadastro/>
                </Route>
                <Route exact path="/usuario/login">
                    <Login/>
                </Route>
                <Route exact path="/">
                    <Inicio/>
                </Route>
            </Switch>
        </div>
    )
}