import Styles from './Styles/CadFornecedor.module.css'

function CadFornecedor() {
    return (
        <div className={Styles.CadFornecedor_container}>
            <h1>CADASTRO FORNECEDOR</h1>
            <form className={Styles.formulario}> 
                
                    <input className={Styles.inputBox} type="text" placeholder="Razão Social*" required></input>
                    <input className={Styles.inputBox} type="text" placeholder="CNPJ*" required></input>
                    <br/>
                    <input className={Styles.inputBox} type="text" placeholder="CEP*" required></input>
                    <input className={Styles.inputBox} type="text" placeholder="Cidade"></input>
                    <br/>
                    <input className={Styles.inputBoxLOG} type="text" placeholder="Logradouro*" required></input>
                    <br/>
                    <input className={Styles.inputBox} type="text" placeholder="Bairro"></input>
                    <input className={Styles.inputBoxUF} type="text" placeholder="UF*" required></input>
                    <br/>
                    <input className={Styles.inputBox} type="tel" placeholder="Telefone*" required></input>
                    <input className={Styles.inputBox} type="tel" placeholder="Telefone 2"></input>
                    <br/>
                    <input className={Styles.inputBox} type="email" placeholder="Email empresarial*" required></input>
                    <input className={Styles.inputBox} type="email" placeholder="Confirmar email*" required></input>
                    <br/>
                    <input className={Styles.inputBox} type="password" placeholder="Senha*" required></input>
                    <input className={Styles.inputBox} type="password" placeholder="Confirmar senha*" required></input>
                    <br/> 

                <button><p>ENVIAR</p></button>
            </form>
        </div>
    )
}

export default CadFornecedor