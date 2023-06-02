import React from 'react';
import styles from './App.module.css';
import logo from './img/logo.png'
import OpCadastro from './pages/OpCadastro'

function combinacaoOp(){
  return(
      <div className={styles.container}>
        <section className={styles.backgroundOne}>
          <img className={styles.logoclass} src= {logo} alt="logo" /> {/* não consegui importa a imagem diretamente, apenas na variavel*/}
        </section>

        <section className={styles.backgroundTwo}> 
          <OpCadastro />

        </section>
      </div>
      )
}

export default combinacaoOp