import './modal.css'

export default function modalExclusao(){

    return(
        <div className="modal">
        <div className="modal-content-exclusao">
            <div className="modal-header-exclusao">
            <h2>Deseja excluir esta Solicitação?</h2>
            </div>
            <div className="modal-body">
            </div>
            <div className="modal-footer">
            <button id="confirmarExclusãoButton">Confirmar</button>
            <button id="cancelarExclusãoButton">Cancelar</button>
            </div>
        </div>
        </div>
    )
}