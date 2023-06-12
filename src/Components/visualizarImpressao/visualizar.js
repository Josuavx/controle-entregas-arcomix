import React from 'react';
import './visualizarImpressao.css';
import logoInteiro from '../../Components/imgs/arco-mix-logo-inteiro.png'

export default function visualizar() {
    /*const impressoes = [
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
        }]
        */
    return(
        <div id="body">
            <div>
                <img id="logo-inteiro" src={logoInteiro} alt="logo inteiro"/>
            </div>
            <div id='topo'>
                <h1 id='controle'>Cliente</h1>
                <ul id='liTopo'>
                    <li >Razão social:</li>
                    <li >CNPJ/CPF:</li>
                    <li >Cidade:</li>
                    <li >Telefone:</li>
                    <li >Email:</li>
                </ul>
            </div>
            <div id='informacoes'>
                <h1 id='info'>Informações</h1>
                <div id='listas'>
                    <ul class='lista1'>
                        <li>Codigo da solicitacao:</li>
                        <li>Motorista:</li>
                        <li>Modelo do veiculo:</li>
                        <li>Placa:</li>
                        <li>Observação:</li>
                    </ul>
                    <ul class='lista2'>
                        <li>Tipo:</li>
                        <li>Unidades:</li>
                        <li>Pedidos:</li>
                        <li>Data e hora da entrega:</li>
                        <li>Status:</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}