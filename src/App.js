import './App.css';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import Fornecedor from './pages/Fornecedor/Fornecedor'

function App() {
  return (
    <div className="App">
      <Header/>
      <Fornecedor/>
      <Footer/>
    </div>
  );
}

export default App;
