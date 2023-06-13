import setaCima from './../imgs/seta-cima.png';
import setaBaixo from './../imgs/seta-baixo.png';
import React, { useState } from 'react';
import './informacaoArcomix.css';

export default function Informacao({razaoSocial, status, cnpj, modVeiculo, nomeMotorista, placa, data}) {

  let corClasse;

  switch (status) {
    case 'Entregue':
      corClasse = 'verde';
      break;
    case 'Solicitado':
      corClasse = 'azul';
      break;
    case 'Atrasado':
      corClasse = 'vermelho';
      break;
    default:
      corClasse = '';
      break;
  }

  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return(
    <div className={`cardArco ${expanded ? 'expanded' : 'minimized'} ${corClasse}`}>
      <button className="minimizarButton" onClick={handleExpand}>
        {expanded ? 
          <img className="setaImga" id='setaCima' src={setaCima} alt="setaCima"/>: 
          <img className="setaImga" id='setabaixo' src={setaBaixo} alt="setaBaixo"/>
        }
      </button>

      <div className="informacao-card">
        <p>razaoSocial: {razaoSocial}</p>
        <p className="lasttd">Status: {status}</p>
        <p>CNPJ: {cnpj}</p>
        <p>Nome do motorista: {nomeMotorista}</p>
        <p>Modelo do veiculo: {modVeiculo}</p>
        <p>Placa: {placa}</p>
        <p>Data: {data}</p>
      </div>
    </div>
  );
}
