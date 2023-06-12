import { Link } from 'react-router-dom';
import './CadFornecedor.css';

function CadFornecedor() {
    return (
        <div class="CadFornecedor_container">
            <h1>CADASTRO FORNECEDOR</h1>
            <form class="formulario-fornecedor"> 
                
                    <input class="inputBox" type="text" placeholder="Razão Social*" required></input>
                    <input class="inputBox" type="text" placeholder="CNPJ*" required></input>
                    <br/>
                    <input class="inputBox" type="text" placeholder="CEP*" required></input>
                    <input class="inputBox" type="text" placeholder="Cidade"></input>
                    <br/>
                    <input class="inputBoxLOG" type="text" placeholder="Logradouro*" required></input>
                    <br/>
                    <input class="inputBox" type="text" placeholder="Bairro"></input>
                    <input class="inputBoxUF" type="text" placeholder="UF*" required></input>
                    <br/>
                    <input class="inputBox" type="tel" placeholder="Telefone*" required></input>
                    <input class="inputBox" type="tel" placeholder="Telefone 2"></input>
                    <br/>
                    <input class="inputBox" type="email" placeholder="Email empresarial*" required></input>
                    <input class="inputBox" type="email" placeholder="Confirmar email*" required></input>
                    <br/>
                    <input class="inputBox" type="password" placeholder="Senha*" required></input>
                    <input class="inputBox" type="password" placeholder="Confirmar senha*" required></input>
                    <br/> 
                
                <Link to="/"><button><p>ENVIAR</p></button></Link>
            </form>
        </div>
    )
}

export default CadFornecedor