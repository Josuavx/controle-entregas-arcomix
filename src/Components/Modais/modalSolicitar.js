
import './modal.css';

export default function ModalSolicitar() {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <button className="back-button">
            {'<'}
          </button>
          <h2>Solicitação de Entrega</h2>
        </div>
        <div className="modal-body">

          <div className="input-wrapper">
            <label>Razão Social</label>
            <input
              type="text"
              placeholder="Razão Social"
            />
          </div>

          <div className="input-wrapper">
            <label>Nome do Motorista</label>
            <input
              type="text"
              placeholder="Nome do Motorista"
            />
          </div>

          <div className="input-wrapper">
            <label>Código Fornecedor</label>
            <input
              type="text"
              placeholder="Código Fornecedor"
            />
          </div>

          <div className="input-wrapper">
            <label>Modelo do Veículo</label>
            <input
              type="text"
              placeholder="Modelo do Veículo"
            />
          </div>

          <div className="input-wrapper">
            <label>Data Agendada</label>
            <input
              type="date"
              className="date-input"
            />
          </div>

          <div className="input-wrapper">
            <label>Placa</label>
            <input
              type="text"
              placeholder="Placa"
            />
          </div>

          <div className="input-wrapper">
            <label>Horário Agendado</label>
            <input
              type="time"
              className="time-input"
            />
          </div>

          <div className="input-wrapper">
            <label>Cargas</label>
            <input
              type="text"
              placeholder="Cargas"
            />
          </div>

          <div className="input-wrapper">
            <label>Tipo de entrega</label>
            <input
              type="text"
              placeholder="Tipo"
            />
          </div>

          <div className="checkbox-wrapper">
              <div className="checkbox-item">
                <input type="checkbox" id="isolada" />
                <p htmlFor="isolada">Isolada</p>
              </div>
              <div className="checkbox-item">
                <input type="checkbox" id="semanal" />
                <p htmlFor="semanal">Semanal</p>
              </div>
              <div className="checkbox-item">
                <input type="checkbox" id="mensal" />
                <p htmlFor="mensal">Mensal</p>
              </div>
              <div className="checkbox-item">
                <input type="checkbox" id="manual" />
                <p htmlFor="manual">Manual</p>
              </div>
              <div className="checkbox-item">
                <input type="checkbox" id="paletizada" />
                <p htmlFor="paletizada">Paletizada</p>
              </div>
            </div>
        </div>
        <button className="enviarButton">
          Enviar
        </button>
      </div>
    </div>
  );
}
