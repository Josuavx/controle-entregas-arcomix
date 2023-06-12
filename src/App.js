import './App.css';
import Header from './Components/header/Header';
import FooterFornecedor from './Components/footerFornecedor/FooterFornecedor';
import Fornecedor from './pages/Fornecedor/Fornecedor'

function App() {
  return (
    <div className="App">
      <Header/>
      <Fornecedor/>
      <FooterFornecedor/>
    </div>
  );
}

export default App;
