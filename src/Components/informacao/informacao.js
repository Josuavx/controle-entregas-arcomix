import setaCima from './../imgs/seta-cima.png'
import setaBaixo from './../imgs/seta-baixo.png'
import React, { useState } from 'react';
import './informacao.css';

export default function Impressao({endereco, status, nome, cnpj, data}) {

    const [expanded, setExpanded] = useState(false);

    const handleExpand = () => {
      setExpanded(!expanded);
    };

    return(
        <div className={`card ${expanded ? 'expanded' : 'minimized'}`}>
            <button className="minimizarButton" onClick={handleExpand}>
                {expanded ? 
                <img className="setaImg" id='setaCima' src={setaCima} alt="setaCima"/>: 
                <img className="setaImg" id='setabaixo' src={setaBaixo} alt="setaBaixo"/>
                }
            </button>

            <tr>
                <p>Endereco: {endereco}</p>
                <p class="lasttd">Status: {status}</p>
                <p>Nome: {nome}</p>
                <p>CNPJ: {cnpj}</p>
                <p>Data: {data}</p>
            </tr>
        </div>
    )
}