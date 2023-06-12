import React from 'react';
import './header.css';
import Perfil from '../imgs/img_264570.png';
import logoArco from '../imgs/arco-mix-logo-arcoiris.png';
import logoNome from '../imgs/arco-mix-logo-nome.png';

export default function Header() {

    return(
        <header>
            <div id="azul">
                <img id="logo-arco" src={logoArco} alt="logo arcoiris"/>
                <img id="logo-nome" src={logoNome} alt="logo nome"/>
            </div>
            <div id="amarelo"></div>
            <div id="vermelho">
                <fieldset id="menu-perfil">
                    <img id="perfil" src={Perfil} alt="foto perfil"/>
                    <select>
                        <option selected disabled id="selecao">Perfil</option>
                        <option>Meus dados</option>
                        <option>Sair</option>
                    </select>
                </fieldset>
            </div>
        </header>
    )
}