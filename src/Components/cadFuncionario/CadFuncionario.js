import { Link } from 'react-router-dom';
import './CadFuncionario.css';

function CadFuncionario(){
    return(
        <div class="CadFuncionario_container">
            <h1>Cadastro ArcoMix</h1>

            <form class="formulario-funcionario">
            <input type="text" placeholder='Nome*' request></input>
            <input type="text" placeholder='Matricula*' request></input>
            <br />
            <input type="email" placeholder='Email empresarial' request></input>
            <input type="email" placeholder='Confirmar email' request></input>
            <br />
            <input type="password" placeholder='Senha' request></input>
            <input type="password" placeholder='Confirmar senha' request></input>
            </form>

            <Link to="/"><button class="enviar"><p>ENVIAR</p></button></Link>
        </div>

    )
}

export default CadFuncionario