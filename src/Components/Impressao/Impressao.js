import React from 'react';
import './impressao.css';

export default function Impressao({ impressao, handleCheckboxChange, contador }) {
    const {
      codSolicitacao,
      motorista,
      modeloVeiculo,
      placa,
      observacao,
      tipo,
      unidades,
      pedidos,
      dataHora,
      status,
      isChecked,
    } = impressao;
    
    return(
        <tr class="linha">
            <td class="firsttd"><input id="check" type="checkbox" checked={isChecked} onChange={() => handleCheckboxChange(contador)}/></td>
            <td>{codSolicitacao}</td>
            <td>{motorista}</td>
            <td>{modeloVeiculo}</td>
            <td>{placa}</td>
            <td>{observacao}</td>
            <td>{tipo}</td>
            <td>{unidades}</td>
            <td>{pedidos}</td>
            <td>{dataHora}</td>
            <td class="lasttd">{status}</td>
        </tr>
    )
}

