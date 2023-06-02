import React from 'react';
import styles from './App.module.css';
import logo from './img/logo.png'
import Login from './pages/login'
//  import OpCadastro from './pages/OpCadastro' 
/* import CadFornecedor from './pages/CadFornecedor'; */
/* import CadFuncionario from './pages/CadFuncionario'; */

function Background(){

    
    return(
      
      <div className={styles.container}>
        <section className={styles.backgroundOne}>
          <img className={styles.logoclass} src= {logo} alt="logo" /> {/* não consegui importa a imagem diretamente, apenas na variavel*/}
        </section>
        
        <section className={styles.backgroundTwo}>
          <Login /> 
          {/*
          <OpCadastro />
          <CadFornecedor />
          <CadFuncionario />
          */}
        </section>
      </div>
    )
}

export default Background