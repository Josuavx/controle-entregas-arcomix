import React from 'react';
import '../../pages/Main/index.css';
import logo from '../../Components/imgs/logo.png';
import CadFuncinonario from '../../Components/cadFuncionario/CadFuncionario';

function combinacaoCadFuncionario(){
  return(
      <div class="container">
        <section class="backgroundOne">
          <img class="logoclass" src={logo} alt="logo" />
        </section>

        <section class="backgroundTwo"> 
          <CadFuncinonario />
        </section>
      </div>
      )
}

export default combinacaoCadFuncionario