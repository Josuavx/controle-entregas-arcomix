import Calendario from '../../Components/ArcoCalendario/aCalendario'
import Header from '../../Components/header/Header'
import Footer from '../../Components/footer/Footer'

export default function Arcomix() {
    return (
      <div className="arcomix">
          <Header/>
          <Calendario/>
          <Footer/>
      </div>
    )
  }