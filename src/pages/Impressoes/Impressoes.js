import React from 'react';
import './impressoes.css';
import Impressao from '../../Components/Impressao/Impressao';

export default function Impressoes() {
    const impressoes = [
        {
            codSolicitacao:"1668942",
            motorista: "José Fábio da Silva",
            modeloVeiculo: "Scania",
            placa: "PKE0947",
            observacao: "N/A",
            tipo: "Frios",
            unidades: "86",
            pedidos: "0548961+",
            dataHora: "27/05/2023 11:24",
            status: "Entregue"
        },
        {
            codSolicitacao:"1668943",
            motorista: "José Fábio da Silva",
            modeloVeiculo: "Scania",
            placa: "PKE0947",
            observacao: "N/A",
            tipo: "Frutas",
            unidades: "45",
            pedidos: "0548969+",
            dataHora: "27/05/2023 10:30",
            status: "Entregue"
        },
        {
            codSolicitacao:"1668944",
            motorista: "José Fábio da Silva",
            modeloVeiculo: "Scania",
            placa: "PKE0947",
            observacao: "N/A",
            tipo: "Frios",
            unidades: "36",
            pedidos: "0548980+",
            dataHora: "27/05/2023 10:00",
            status: "Entregue"
        }
    ]
    return(
        <div class="imp">
            <nav class="navegacao">
                <button>Impressão</button>
                <button>Visualizar</button>
                <button>Filtro</button>
            </nav>
            <div class="impressoes">
                <table>
                    <tr>
                        <th id="firstth"><input type="checkbox"/></th>
                        <th>Cód. solicitação</th>
                        <th>Motorista</th>
                        <th>Mod. Veículo</th>
                        <th>Placa</th>
                        <th>Observação</th>
                        <th>Tipo</th>
                        <th>Unidades</th>
                        <th>Pedidos</th>
                        <th>Data e hora da entrega</th>
                        <th id="lastth">Status</th>
                    </tr>
                    {impressoes.map((impressao, index) => (
                        <Impressao
                        key={index}
                        codSolicitacao={impressao.codSolicitacao}
                        motorista={impressao.motorista}
                        modeloVeiculo={impressao.modeloVeiculo}
                        placa={impressao.placa}
                        observacao={impressao.observacao}
                        tipo={impressao.tipo}
                        unidades={impressao.unidades}
                        pedidos={impressao.pedidos}
                        dataHora={impressao.dataHora}
                        status={impressao.status}
                        />
                    ))}
                </table>
            </div>
        </div>

    )

}