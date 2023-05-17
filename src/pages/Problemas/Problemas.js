import { Problema } from "../../components/Problema/Problema";
import "./Problemas.css";

export const Problemas = () => {
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
  );
};
