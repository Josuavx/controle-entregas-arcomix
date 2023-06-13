import React from 'react';
import './informacoesArcomix.css';
import InformacaoArcomix from '../informacao-arcomix/informacaoArcomix';

export default function Informacoes({ diaSelecionado }) {
  const informacoes = [
    {
      razaoSocial: "AutoLogística Expressa Ltda",
      status: "Entregue",
      cnpj: "123.456.789/0001-00",
      modVeiculo: "Caminhão Baú",
      nomeMotorista: "Carlos Silva",
      placa: "ABC-1234",
      data: "11/06/2023",
    },
    {
      razaoSocial: "AutoLogística Expressa Ltda",
      status: "Solicitado",
      cnpj: "123.456.789/0001-00",
      modVeiculo: "Caminhão Baú",
      nomeMotorista: "Carlos Silva",
      placa: "ABC-1234",
      data: "11/06/2023",
    },
    {
      razaoSocial: "AutoLogística Expressa Ltda",
      status: "Atrasado",
      cnpj: "123.456.789/0001-00",
      modVeiculo: "Caminhão Baú",
      nomeMotorista: "Carlos Silva",
      placa: "ABC-1234",
      data: "11/06/2023",
    }
  ];

  const hoje = new Date().toLocaleDateString('pt-BR');

  const dia = diaSelecionado || hoje;

  const informacoesFiltradas = informacoes.filter(informacao => informacao.data === dia);

  return (
    <div className="imp">
      <div className="impressoesa">
        <div className='cabecalhoInformacoes'>
          <h1>{dia}</h1>
        </div>
        <table class="tabelaArco">
          {informacoesFiltradas.map((impressao, index) => (
            <InformacaoArcomix
              key={index}
              razaoSocial={impressao.razaoSocial}
              status={impressao.status}
              cnpj={impressao.cnpj}
              modVeiculo={impressao.modVeiculo}
              nomeMotorista={impressao.nomeMotorista}
              placa={impressao.placa}
              data={impressao.data}
            />
          ))}
        </table>
      </div>
    </div>
  );
}
