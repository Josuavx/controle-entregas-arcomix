import { useState, useEffect } from 'react';
import ModalExclusao from '../Modais/modalExclusao';
import ModalSolicitar from '../Modais/modalSolicitar';
import impressora from './../imgs/impressoraSimples.png';
import alterar from './../imgs/alterar.png';
import lixo from './../imgs/lixo.png';
import './Botoes.css';

export default function Botoes() {
  const [exibirModalExclusao, setExibirModalExclusao] = useState(false);
  const [exibirModalSolicitar, setExibirModalSolicitar] = useState(false);

  const handleCancelarSolicitacao = () => {
    setExibirModalExclusao(true);
  };

  const handleSolicitarEntrega = () => {
    setExibirModalSolicitar(true);
  };

  const fecharModal = () => {
    setExibirModalExclusao(false);
    setExibirModalSolicitar(false);
  };

  useEffect(() => {
    const fecharModalComEsc = (event) => {
      if (event.key === 'Escape') {
        fecharModal();
      }
    };

    document.addEventListener('keydown', fecharModalComEsc);

    return () => {
      document.removeEventListener('keydown', fecharModalComEsc);
    };
  }, []);

  return (
    <div className="button-container">
      <button className="button" onClick={handleSolicitarEntrega}>
        <span className="plusButton">&#43;</span>
        Solicitar Entrega
      </button>

      <button className="button" onClick={handleCancelarSolicitacao}>
        <img className="imgButton" id="lixo" src={lixo} alt="lixo" />
        Cancelar Solicitação
      </button>

      <button className="button" onClick={handleSolicitarEntrega}>
        <img className="imgButton" id="alterar" src={alterar} alt="alterar" />
        Alterar Entrega
      </button>

      <button className="button">
        <img
          className="imgButton"
          id="impressora"
          src={impressora}
          alt="impressora"
        />
        Imprimir Entrega
      </button>

      {exibirModalExclusao && <ModalExclusao onClose={fecharModal} />}
      {exibirModalSolicitar && <ModalSolicitar onClose={fecharModal} />}
    </div>
  );
}
