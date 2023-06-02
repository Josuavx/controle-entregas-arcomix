import styles from './Styles/login.module.css'
import { Route, BrowserRouter } from 'react-router-dom';


/* import OpCadastro from './OpCadastro' */

/* 
Alinhar titulo
fazer desaparecer quando algum botao for clicado
botões encaminhar para aparecer outra classe 
*/

import React from "react";

function login() {
    
    const rotas = () =>{
        
    }

      function Home() { 
        alert(`Pagina inicial `)
    }
    function TelaOpCadastro(){
        alert(`Pagina opcadastro `)
        
    } 

    return (
        
        <div className={styles.login_container}>
            <h1>Controle  de  Entrada</h1>
            <div>
                <form className={styles.formulario}> {/* tirei a action e o method para ele nn ir pra proxima pagina*/}
                    <h4>Login</h4>
                    <input type="email" placeholder='Usuário'></input>
                    <h4>Senha</h4>
                    <input type="password" placeholder='* * * * * * * * * *'></input>

                    <br />
                    <button onClick={Home} type='submit' className={styles.btnEntrar}><p>Entrar</p></button> 
                    <button onClick={TelaOpCadastro} type='submit'  className={styles.btnCadastro}><p>Cadastro</p></button>
                
                    

                </form>
            </div>
        </div>
        
    )
    
}

export default login