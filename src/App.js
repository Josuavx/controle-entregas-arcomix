import './App.css';
import Header from './Components/header/Header';
import Impressoes from './pages/Impressoes/Impressoes';
import Footer from './Components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Impressoes />
      <Footer/>
    </div>
  );
}

export default App;
