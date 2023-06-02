import Styles from './Styles/CadFuncionario.module.css'

function CadFuncionario(){
    return(
        <div className={Styles.CadFuncionario_container}>
            <h1>Cadastro ArcoMix</h1>

            <form className={Styles.formulario}>
            <input type="text" placeholder='Nome*' request></input>
            <input type="text" placeholder='Matricula*' request></input>
            <br />
            <input type="email" placeholder='Email empresarial' request></input>
            <input type="email" placeholder='Confirmar email' request></input>
            <br />
            <input type="password" placeholder='Senha' request></input>
            <input type="password" placeholder='Confirmar senha' request></input>
            </form>

            <button><p>ENVIAR</p></button>
        </div>

    )
}

export default CadFuncionario