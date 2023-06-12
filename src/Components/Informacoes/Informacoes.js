import React from 'react';
import './informacoes.css';
import Informacao from '../../Components/informacao/informacao';

export default function Informacoes({ diaSelecionado }) {
  const informacoes = [
    {
      endereco: "Rua Principal, 123, Bairro Central, Cidade Nova, Estado XPTO",
      status: "Entregue",
      nome: "Empresa ABC Ltda",
      cnpj: "123.456.789/0001-00",
      data: "11/06/2023",
    },
    {
      endereco: "Av. Comercial, 789, Bairro Central, Cidade Alegria, Estado Feliz",
      status: "Entregue",
      nome: "Empresa XYZ S.A",
      cnpj: "987.654.321/0001-99",
      data: "11/06/2023",
    },
    {
      endereco: "Rua das Flores, 456, Bairro Bela Vista, Cidade Encantada, Estado dos Sonhos",
      status: "Entregue",
      nome: "Empresa ABCD Ltda",
      cnpj: "555.888.777/0001-11",
      data: "11/06/2023",
    }
  ];

  const hoje = new Date().toLocaleDateString('pt-BR');

  const dia = diaSelecionado || hoje;

  const informacoesFiltradas = informacoes.filter(informacao => informacao.data === dia);

  return (
    <div className="imp">
      <div className="impressoes">
        <div className='cabecalhoInformacoes'>
          <h1>{dia}</h1>
        </div>
        <table>
          {informacoesFiltradas.map((impressao, index) => (
            <Informacao
              key={index}
              endereco={impressao.endereco}
              status={impressao.status}
              nome={impressao.nome}
              cnpj={impressao.cnpj}
              data={impressao.data}
            />
          ))}
        </table>
      </div>
    </div>
  );
}
