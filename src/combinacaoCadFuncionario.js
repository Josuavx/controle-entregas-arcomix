import React from 'react';
import styles from './App.module.css';
import logo from './img/logo.png'
import CadFuncinonario from './pages/CadFuncinonario'

function combinacaoOp(){
  return(
      <div className={styles.container}>
        <section className={styles.backgroundOne}>
          <img className={styles.logoclass} src= {logo} alt="logo" /> {/* não consegui importa a imagem diretamente, apenas na variavel*/}
        </section>

        <section className={styles.backgroundTwo}> 
          <CadFuncinonario />

        </section>
      </div>
      )
}

export default combinacaoOp