import { Problema } from "../../Components/Problema/Problema";
import Footer from "../../Components/footer/Footer";
import Header from "../../Components/header/Header";
import "./Problemas.css";

const Problemas = () => {
  const problemas = [
    {
      nome: "J&C Alimentos",
      data: "01/05/2023",
      descricao: "Entrega não realizada",
    },
    {
      nome: "J&C Alimentos",
      data: "01/05/2023",
      descricao: "Entrega não realizada",
    },
    {
      nome: "J&C Alimentos",
      data: "01/05/2023",
      descricao: "Entrega não realizada",
    },
    {
      nome: "J&C Alimentos",
      data: "01/05/2023",
      descricao: "Entrega não realizada",
    },
    {
      nome: "J&C Alimentos",
      data: "01/05/2023",
      descricao: "Entrega não realizada",
    },
    {
      nome: "J&C Alimentos",
      data: "01/05/2023",
      descricao: "Entrega não realizada",
    },
    {
      nome: "J&C Alimentos",
      data: "01/05/2023",
      descricao: "Entrega não realizada",
    },
  ];

  return (
    <div>
      <Header/>
      <div id="paginaProblema">
        <div id="breadcrumb">
          <span className="bread">Por fornecedor</span>
          <span>/</span>
          <span className="bread"> Mais recentes</span>
          <span>/</span>
          <span className="bread"> Mais Antigos</span>
        </div>
        <div id="problemas">
          {problemas.map((problema, index) => (
            <Problema
            key={index}
            title={problema.nome}
            date={problema.data}
            description={problema.descricao}
            />
            ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Problemas;