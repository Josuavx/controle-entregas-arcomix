import { Link } from 'react-router-dom';
import './OpCadastro.css';

function OpCadastro(){
    return(
        <div class="OpCadastro_conteiner">
            <h1>Cadastro</h1>

            <Link to="/cFornecedor"><button class="button-op" id="btnFornecedor"><p>Fornecedor</p></button></Link>
            <Link to="/cFuncionario"><button class="button-op" id="btnArcoMix"><p>ArcoMix</p></button></Link>
        </div>
    )
}

export default OpCadastro