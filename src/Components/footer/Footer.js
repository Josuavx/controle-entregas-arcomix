import React from 'react';
import './footer.css';
import Seta from '../imgs/seta-direita.png';
import Calendario from '../imgs/calendario.png';
import Lupa from '../imgs/documento.png';
import Impressora from '../imgs/impressora.png';
import { Link } from 'react-router-dom';


export default function Footer() {

    return(
        <footer>
            <div id="foot">
                <button id="botao-seta" class="botao-redirect"><img src={Seta} id="imagem-retorno" alt='seta retorno'/></button>
                <Link to="/Arcomix"><button class="botao-redirect"><img src={Calendario} class="img-btn" alt="icone calendario"/>Agenda</button></Link>
                <Link to="/pesquisa"><button class="botao-redirect"><img src={Lupa} class="img-btn" alt="icone lupa"/>Pesquisar</button></Link>
                <Link to="/Impressoes"><button class="botao-redirect"><img src={Impressora} class="img-btn" alt="icone impressao"/>Impressão</button></Link>
            </div>
        </footer>
    )
}