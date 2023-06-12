import React from 'react';
import '../Main/index.css';
import logo from '../../Components/imgs/logo.png'
import CadFornecedor from '../../Components/cadFornecedor/CadFornecedor'

function combinacaoCadFornecedor(){
  return(
      <div class="container">
        <section class="backgroundOne">
          <img class="logoclass" src={logo} alt="logo" /> {/* não consegui importa a imagem diretamente, apenas na variavel*/}
        </section>

        <section class="backgroundTwo"> 
          <CadFornecedor />
        </section>
      </div>
      )
}

export default combinacaoCadFornecedor