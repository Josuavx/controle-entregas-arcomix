import React from 'react';
import './footer.css';
import Seta from '../imgs/seta-direita.png';
import Calendario from '../imgs/calendario.png';
import Lupa from '../imgs/documento.png';
import Impressora from '../imgs/impressora.png';


export default function Footer() {

    return(
        <footer>
            <div id="foot">
                <button id="botao-seta" class="botao-redirect"><img src={Seta} id="imagem-retorno" alt='seta retorno'/></button>
                <button class="botao-redirect"><img src={Calendario} class="img-btn" alt="icone calendario"/>Agenda</button>
                <button class="botao-redirect"><img src={Lupa} class="img-btn" alt="icone lupa"/>Pesquisar</button>
                <button class="botao-redirect"><img src={Impressora} class="img-btn" alt="icone impressao"/>Impressão</button>
            </div>
        </footer>
    )
}