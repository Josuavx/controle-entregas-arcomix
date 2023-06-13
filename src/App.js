import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Impressoes from './pages/Impressoes/Impressoes';
import Index from './pages/Main/index';
import Opcadastro from './pages/CombinacaoOp/combinacaoOp';
import Combinacaofornecedor from './pages/CadFornecedor/combinacaoCadFornecedor';
import Combinacaofuncionario from './pages/CadFuncionario/combinacaoCadFuncionario';
import Arcomix from './pages/Arcomix/Arcomix';
import Visualizar from './Components/visualizarImpressao/visualizar';
import Fornecedor from './pages/Fornecedor/Fornecedor';
import Pesquisa from './pages/Pesquisa/Pesquisa';
import Problemas from './pages/Problemas/Problemas';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/opcadastro" element={<Opcadastro/>}/>
          <Route path="/cFornecedor" element={<Combinacaofornecedor/>}/>
          <Route path="/cFuncionario" element={<Combinacaofuncionario/>}/>
          <Route path="/Arcomix" element={<Arcomix/>}/>
          <Route path="/Impressoes" element={<Impressoes/>}/>
          <Route path="/visualizar" element={<Visualizar/>}/>
          <Route path="/fornecedor" element={<Fornecedor/>}/>
          <Route path="/pesquisa" element={<Pesquisa/>}/>
          <Route path="/problemas" element={<Problemas/>}/>
        </Routes>
      </Router>
  );
}

export default App;
