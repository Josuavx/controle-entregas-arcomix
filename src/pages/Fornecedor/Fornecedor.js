import Calendario from '../../Components/Calendario/Calendario'
import Header from '../../Components/header/Header'
import footerFornecedor from '../../Components/footerFornecedor/FooterFornecedor'

export default function Fornecedor() {
    return (
      <div className="fornecedor">
          <Header/>
          <Calendario/>
          <footerFornecedor/>
      </div>
    )
  }