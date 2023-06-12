import React from 'react';
import '../Main/index.css';
import logo from '../../Components/imgs/logo.png'
import OpCadastro from '../../Components/opCadastro/OpCadastro'

function combinacaoOp(){
  return(
      <div class="container">
        <section class="backgroundOne">
          <img class="logoclass" src= {logo} alt="logo" /> {/* não consegui importa a imagem diretamente, apenas na variavel*/}
        </section>

        <section class="backgroundTwo"> 
          <OpCadastro />
        </section>
      </div>
      )
}

export default combinacaoOp