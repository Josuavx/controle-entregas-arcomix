import lixo from "./../imgs/lixo.png";
import "./Anotacoes.css";
import React, { useState } from 'react';

export default function Anotacoes() {
  const [anotacoes, setAnotacoes] = useState([]);
  const [edicao, setEdicao] = useState(false);

  const adicionarAnotacao = () => {
    setAnotacoes([...anotacoes, { conteudo: 'Nova anotação', editavel: true }]);
  };

  const modificarAnotacao = (index, novoConteudo) => {
    if (novoConteudo.includes('\n')) {

      novoConteudo = novoConteudo.replace(/\n/g, '');
      salvarAnotacao(index, novoConteudo);
    }
    const novasAnotacoes = [...anotacoes];
    novasAnotacoes[index].conteudo = novoConteudo;
    setAnotacoes(novasAnotacoes);
  };

  const salvarAnotacao = (index, conteudo) => {
    const novasAnotacoes = [...anotacoes];
    novasAnotacoes[index].conteudo = conteudo;
    novasAnotacoes[index].editavel = false;
    setAnotacoes(novasAnotacoes);
    setEdicao(false);
  };

  const habilitarEdicao = (index) => {
    setEdicao(true);
    const novasAnotacoes = [...anotacoes];
    novasAnotacoes[index].editavel = true;
    setAnotacoes(novasAnotacoes);
  };

  const desabilitarEdicao = () => {
    setEdicao(false);
    const novasAnotacoes = anotacoes.map((anotacao) => {
      return { ...anotacao, editavel: false };
    });
    setAnotacoes(novasAnotacoes);
  };

  const handleKeyDown = (e, index, conteudo) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      salvarAnotacao(index, conteudo);
    }
  };

  return (
    <div className="anotacoes-container">
      <div className="anotacoesCabecalho">
        <h1>Anotações</h1>
      </div>

      <div className="anotacoesbody">

        <button className="anotacoesButton" onClick={adicionarAnotacao}>
          <h4 className="mais">&#43;</h4>
        </button>

        {anotacoes.map((anotacao, index) => (
          <div className="anotacao" key={index}>
            {anotacao.editavel ? (
              <textarea
                className="input-edicao"
                value={anotacao.conteudo}
                onChange={(e) => modificarAnotacao(index, e.target.value)}
                onBlur={desabilitarEdicao}
                autoFocus
                onKeyDown={(e) => handleKeyDown(e, index, anotacao.conteudo)}
              />
            ) : (
              <div onClick={() => habilitarEdicao(index)}>
                {anotacao.conteudo}
              </div>
            )}
          <button className="lixoButton">
            <img id="lixo" src={lixo} alt="Lixo" />
          </button>

          </div>
        ))}
      </div>
    </div>
  );
}
