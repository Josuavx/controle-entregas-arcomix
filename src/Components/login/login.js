import './login.css'
import { Link } from 'react-router-dom';

/* import OpCadastro from './OpCadastro' */

/* 
Alinhar titulo
fazer desaparecer quando algum botao for clicado
botões encaminhar para aparecer outra classe 
*/

import React from "react";

function login() {

    return (
        
        <div class="login_container">
            <h1>Controle  de  Entrada</h1>
            <div>
                <form class="formulario-login"> {/* tirei a action e o method para ele nn ir pra proxima pagina*/}
                    <h4>Login</h4>
                    <input type="email" placeholder='Usuário'></input>
                    <h4>Senha</h4>
                    <input type="password" placeholder='* * * * * * * * * *'></input>

                    <br />
                    <Link to="/Arcomix"><button type='submit' class="btnEntrar"><p>Entrar</p></button></Link>
                    <Link to="/fornecedor"><button type='submit' class="btnEntrar"><p>Fornecedor</p></button></Link> 
                    <Link to="/opcadastro"><button type='submit'  class="btnCadastro"><p>Cadastro</p></button></Link>
                    
                </form>
            </div>
        </div>   
    )
}

export default login