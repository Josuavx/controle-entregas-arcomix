import React from 'react';
import './impressao.css';

export default function Impressao({ codSolicitacao, motorista, modeloVeiculo, placa, observacao, tipo, unidades, pedidos, dataHora, status }) {
    return(
        <tr class="linha">
            <td class="firsttd"><input id="check" type="checkbox"/></td>
            <td>{codSolicitacao}</td>
            <td>{motorista}</td>
            <td>{modeloVeiculo}</td>
            <td>{placa}</td>
            {/* observacao vai vazar quando o texto for longo, colocar limitador*/}
            <td>{observacao}</td>
            <td>{tipo}</td>
            <td>{unidades}</td>
            <td>{pedidos}</td>
            <td>{dataHora}</td>
            <td class="lasttd">{status}</td>
        </tr>
    )
}