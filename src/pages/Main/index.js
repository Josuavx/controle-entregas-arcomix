import React from 'react';
import './index.css';
import logo from '../../Components/imgs/logo.png';
import Login from '../../Components/login/login';

function Background(){
    return(
      <div class="container" /*className={styles.container}*/>
        <section class="backgroundOne" /*className={styles.backgroundOne}*/>
          <img class="logoclass" /*className={styles.logoclass}*/ src= {logo} alt="logo" /> {/* não consegui importa a imagem diretamente, apenas na variavel*/}
        </section>
        
        <section class="backgroundTwo" /*className={styles.backgroundTwo}*/>
          <Login /> 
        </section>
      </div>
    )
}

export default Background