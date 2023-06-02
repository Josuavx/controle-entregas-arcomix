import Styles from './Styles/OpCadastro.module.css'

function OpCadastro(){
    return(
        <div className={Styles.OpCadastro_conteiner}>
            <h1>Cadastro</h1>

            <button className={Styles.btnFornecedor}><p>Fornecedor</p></button>
            <button className={Styles.btnArcoMix}><p>ArcoMix</p></button>
        </div>
    )
}

export default OpCadastro