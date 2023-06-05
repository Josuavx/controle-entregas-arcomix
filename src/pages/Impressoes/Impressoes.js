import React, { useState } from 'react';
import './impressoes.css';
import Header from '../../Components/header/Header';
import Impressao from '../../Components/Impressao/Impressao';
import Footer from '../../Components/footer/Footer';

export default function Impressoes() {
    const [verifySelectAll, setVerifySelectAll] = useState(false);
    const [impressoes, setImpressoes] = useState([
        {
            codSolicitacao:"1668942",
            motorista: "José Fábio da Silva",
            modeloVeiculo: "Scania",
            placa: "PKE0947",
            observacao: "N/A",
            tipo: "Frios",
            unidades: "86",
            pedidos: "0548961+",
            dataHora: "27/05/2023 11:24",
            status: "Entregue",
            isChecked: false
        },
        {
            codSolicitacao: "1234567",
            motorista: "João Carlos Santos",
            modeloVeiculo: "Volkswagen",
            placa: "ABC1234",
            observacao: "N/A",
            tipo: "Alimentos",
            unidades: "30",
            pedidos: "9876543",
            dataHora: "01/06/2023 08:15",
            status: "Pendente",
            isChecked: false
        },
        {
            codSolicitacao: "2345678",
            motorista: "Maria Oliveira",
            modeloVeiculo: "Ford",
            placa: "DEF5678",
            observacao: "N/A",
            tipo: "Bebidas",
            unidades: "75",
            pedidos: "8765432",
            dataHora: "01/06/2023 14:20",
            status: "Em andamento",
            isChecked: false
        },
        {
            codSolicitacao: "3456789",
            motorista: "Ricardo Souza",
            modeloVeiculo: "Mercedes-Benz",
            placa: "GHI9012",
            observacao: "Sim",
            tipo: "Eletrônicos",
            unidades: "50",
            pedidos: "7654321",
            dataHora: "02/06/2023 09:45",
            status: "Entregue",
            isChecked: false
        },
        {
            codSolicitacao: "4567890",
            motorista: "Fernanda Costa",
            modeloVeiculo: "Volvo",
            placa: "JKL3456",
            observacao: "Não",
            tipo: "Higiene",
            unidades: "100",
            pedidos: "6543210",
            dataHora: "02/06/2023 12:30",
            status: "Pendente",
            isChecked: false
        },
        {
            codSolicitacao: "5678901",
            motorista: "Rodrigo Lima",
            modeloVeiculo: "Iveco",
            placa: "MNO7890",
            observacao: "N/A",
            tipo: "Limpeza",
            unidades: "40",
            pedidos: "5432109",
            dataHora: "03/06/2023 15:10",
            status: "Em andamento",
            isChecked: false
        },
        {
            codSolicitacao: "6789012",
            motorista: "Camila Rodrigues",
            modeloVeiculo: "Renault",
            placa: "PQR1234",
            observacao: "N/A",
            tipo: "Hortifruti",
            unidades: "60",
            pedidos: "4321098",
            dataHora: "03/06/2023 11:55",
            status: "Entregue",
            isChecked: false
        },
        {
            codSolicitacao: "7890123",
            motorista: "André Santos",
            modeloVeiculo: "Volkswagen",
            placa: "STU5678",
            observacao: "Sim",
            tipo: "Alimentos",
            unidades: "35",
            pedidos: "3210987",
            dataHora: "04/06/2023 07:40",
            status: "Pendente",
            isChecked: false
        },
        {
            codSolicitacao: "8901234",
            motorista: "Patrícia Silva",
            modeloVeiculo: "Fiat",
            placa: "VWX9012",
            observacao: "N/A",
            tipo: "Laticínios",
            unidades: "80",
            pedidos: "2109876",
            dataHora: "04/06/2023 16:25",
            status: "Entregue",
            isChecked: false
        },
        {
            codSolicitacao: "9012345",
            motorista: "Rafaela Mendes",
            modeloVeiculo: "Chevrolet",
            placa: "YZA2345",
            observacao: "N/A",
            tipo: "Bebidas",
            unidades: "50",
            pedidos: "1098765",
            dataHora: "05/06/2023 10:50",
            status: "Pendente",
            isChecked: false
        },
        {
            codSolicitacao: "0123456",
            motorista: "Lucas Oliveira",
            modeloVeiculo: "Renault",
            placa: "BCD6789",
            observacao: "Não",
            tipo: "Padaria",
            unidades: "90",
            pedidos: "0987654",
            dataHora: "05/06/2023 13:15",
            status: "Em andamento",
            isChecked: false
        },
        {
            codSolicitacao: "1234567",
            motorista: "Fernando Santos",
            modeloVeiculo: "Volkswagen",
            placa: "EFG0123",
            observacao: "Sim",
            tipo: "Higiene",
            unidades: "60",
            pedidos: "9876543",
            dataHora: "06/06/2023 09:30",
            status: "Entregue",
            isChecked: false
        },
        {
            codSolicitacao: "2345678",
            motorista: "Vanessa Rodrigues",
            modeloVeiculo: "Ford",
            placa: "GHI3456",
            observacao: "N/A",
            tipo: "Carnes",
            unidades: "70",
            pedidos: "8765432",
            dataHora: "06/06/2023 15:55",
            status: "Pendente",
            isChecked: false
        },
        {
            codSolicitacao: "3456789",
            motorista: "Maurício Costa",
            modeloVeiculo: "Mercedes-Benz",
            placa: "JKL6789",
            observacao: "Sim",
            tipo: "Congelados",
            unidades: "45",
            pedidos: "7654321",
            dataHora: "07/06/2023 11:40",
            status: "Em andamento",
            isChecked: false
        },
        {
            codSolicitacao: "4567890",
            motorista: "Roberta Almeida",
            modeloVeiculo: "Volvo",
            placa: "MNO9012",
            observacao: "Não",
            tipo: "Hortifruti",
            unidades: "80",
            pedidos: "6543210",
            dataHora: "07/06/2023 16:05",
            status: "Entregue",
            isChecked: false
        },
        {
            codSolicitacao: "5678901",
            motorista: "Carlos Lima",
            modeloVeiculo: "Iveco",
            placa: "PQR2345",
            observacao: "N/A",
            tipo: "Bebidas",
            unidades: "55",
            pedidos: "5432109",
            dataHora: "08/06/2023 13:20",
            status: "Pendente",
            isChecked: false
        },
        {
            codSolicitacao: "6789012",
            motorista: "Amanda Fernandes",
            modeloVeiculo: "Renault",
            placa: "STU5678",
            observacao: "Sim",
            tipo: "Laticínios",
            unidades: "70",
            pedidos: "4321098",
            dataHora: "08/06/2023 09:45",
            status: "Em andamento",
            isChecked: false
        },
        {
            codSolicitacao: "7890123",
            motorista: "Felipe Santos",
            modeloVeiculo: "Volkswagen",
            placa: "VWX9012",
            observacao: "N/A",
            tipo: "Padaria",
            unidades: "40",
            pedidos: "3210987",
            dataHora: "09/06/2023 14:35",
            status: "Entregue",
            isChecked: false
        },
        {
            codSolicitacao: "8901234",
            motorista: "Giovanna Silva",
            modeloVeiculo: "Fiat",
            placa: "YZA2345",
            observacao: "Não",
            tipo: "Higiene",
            unidades: "90",
            pedidos: "2109876",
            dataHora: "09/06/2023 11:10",
            status: "Pendente",
            isChecked: false
        },
        {
            codSolicitacao: "9012345",
            motorista: "Rafaela Mendes",
            modeloVeiculo: "Chevrolet",
            placa: "BCD6789",
            observacao: "Sim",
            tipo: "Congelados",
            unidades: "65",
            pedidos: "1098765",
            dataHora: "10/06/2023 16:45",
            status: "Em andamento",
            isChecked: false
        },
        {
            codSolicitacao: "0123456",
            motorista: "Lucas Oliveira",
            modeloVeiculo: "Renault",
            placa: "EFG0123",
            observacao: "N/A",
            tipo: "Bebidas",
            unidades: "50",
            pedidos: "0987654",
            dataHora: "10/06/2023 09:20",
            status: "Entregue",
            isChecked: false
        },
        {
            codSolicitacao: "1234567",
            motorista: "Fernando Santos",
            modeloVeiculo: "Volkswagen",
            placa: "GHI3456",
            observacao: "Sim",
            tipo: "Alimentos",
            unidades: "40",
            pedidos: "9876543",
            dataHora: "11/06/2023 14:05",
            status: "Pendente",
            isChecked: false
        },
        {
            codSolicitacao: "2345678",
            motorista: "Vanessa Rodrigues",
            modeloVeiculo: "Ford",
            placa: "JKL6789",
            observacao: "N/A",
            tipo: "Hortifruti",
            unidades: "75",
            pedidos: "8765432",
            dataHora: "11/06/2023 10:40",
            status: "Em andamento",
            isChecked: false
        },
        {
            codSolicitacao: "3456789",
            motorista: "Maurício Costa",
            modeloVeiculo: "Mercedes-Benz",
            placa: "MNO9012",
            observacao: "Sim",
            tipo: "Limpeza",
            unidades: "55",
            pedidos: "7654321",
            dataHora: "12/06/2023 15:25",
            status: "Entregue",
            isChecked: false
        },
        {
            codSolicitacao: "4567890",
            motorista: "Roberta Almeida",
            modeloVeiculo: "Volvo",
            placa: "PQR2345",
            observacao: "Não",
            tipo: "Carnes",
            unidades: "85",
            pedidos: "6543210",
            dataHora: "12/06/2023 12:00",
            status: "Pendente",
            isChecked: false
        },
        {
            codSolicitacao: "5678901",
            motorista: "Carlos Lima",
            modeloVeiculo: "Iveco",
            placa: "STU5678",
            observacao: "N/A",
            tipo: "Congelados",
            unidades: "60",
            pedidos: "5432109",
            dataHora: "13/06/2023 07:45",
            status: "Em andamento",
            isChecked: false
        },
        {
            codSolicitacao: "6789012",
            motorista: "Amanda Fernandes",
            modeloVeiculo: "Renault",
            placa: "VWX9012",
            observacao: "N/A",
            tipo: "Hortifruti",
            unidades: "70",
            pedidos: "4321098",
            dataHora: "13/06/2023 13:20",
            status: "Entregue",
            isChecked: false
        },
        {
            codSolicitacao: "7890123",
            motorista: "Felipe Santos",
            modeloVeiculo: "Volkswagen",
            placa: "YZA2345",
            observacao: "Sim",
            tipo: "Alimentos",
            unidades: "45",
            pedidos: "3210987",
            dataHora: "14/06/2023 08:05",
            status: "Pendente",
            isChecked: false
        },
        {
            codSolicitacao: "8901234",
            motorista: "Giovanna Silva",
            modeloVeiculo: "Fiat",
            placa: "BCD6789",
            observacao: "Não",
            tipo: "Higiene",
            unidades: "75",
            pedidos: "2109876",
            dataHora: "14/06/2023 16:40",
            status: "Em andamento",
            isChecked: false
        },
        {
            codSolicitacao: "9012345",
            motorista: "Rafaela Mendes",
            modeloVeiculo: "Chevrolet",
            placa: "EFG0123",
            observacao: "N/A",
            tipo: "Bebidas",
            unidades: "50",
            pedidos: "1098765",
            dataHora: "15/06/2023 11:25",
            status: "Entregue",
            isChecked: false
        },
        {
            codSolicitacao: "0123456",
            motorista: "Lucas Oliveira",
            modeloVeiculo: "Renault",
            placa: "GHI3456",
            observacao: "Sim",
            tipo: "Carnes",
            unidades: "90",
            pedidos: "0987654",
            dataHora: "15/06/2023 09:00",
            status: "Pendente",
            isChecked: false
        },
        {
            codSolicitacao: "1234567",
            motorista: "Fernando Santos",
            modeloVeiculo: "Volkswagen",
            placa: "JKL6789",
            observacao: "N/A",
            tipo: "Laticínios",
            unidades: "65",
            pedidos: "9876543",
            dataHora: "16/06/2023 13:45",
            status: "Em andamento",
            isChecked: false
        },
        {
            codSolicitacao: "2345678",
            motorista: "Vanessa Rodrigues",
            modeloVeiculo: "Ford",
            placa: "MNO9012",
            observacao: "Sim",
            tipo: "Padaria",
            unidades: "55",
            pedidos: "8765432",
            dataHora: "16/06/2023 10:20",
            status: "Entregue",
            isChecked: false
        },
        {
            codSolicitacao: "3456789",
            motorista: "Maurício Costa",
            modeloVeiculo: "Mercedes-Benz",
            placa: "PQR2345",
            observacao: "Não",
            tipo: "Bebidas",
            unidades: "40",
            pedidos: "7654321",
            dataHora: "17/06/2023 15:05",
            status: "Pendente",
            isChecked: false
        },
        {
            codSolicitacao: "4567890",
            motorista: "Roberta Almeida",
            modeloVeiculo: "Volvo",
            placa: "STU5678",
            observacao: "N/A",
            tipo: "Higiene",
            unidades: "70",
            pedidos: "6543210",
            dataHora: "17/06/2023 11:40",
            status: "Em andamento",
            isChecked: false
        },
        {
            codSolicitacao: "5678901",
            motorista: "Carlos Lima",
            modeloVeiculo: "Iveco",
            placa: "VWX9012",
            observacao: "Sim",
            tipo: "Alimentos",
            unidades: "50",
            pedidos: "5432109",
            dataHora: "18/06/2023 16:25",
            status: "Entregue",
            isChecked: false
        },
        {
            codSolicitacao: "6789012",
            motorista: "Amanda Fernandes",
            modeloVeiculo: "Renault",
            placa: "YZA2345",
            observacao: "Não",
            tipo: "Hortifruti",
            unidades: "80",
            pedidos: "4321098",
            dataHora: "18/06/2023 13:00",
            status: "Pendente",
            isChecked: false
        },
        {
            codSolicitacao: "7890123",
            motorista: "Felipe Santos",
            modeloVeiculo: "Volkswagen",
            placa: "BCD6789",
            observacao: "N/A",
            tipo: "Carnes",
            unidades: "60",
            pedidos: "3210987",
            dataHora: "19/06/2023 07:45",
            status: "Em andamento",
            isChecked: false
        },
        {
            codSolicitacao: "8901234",
            motorista: "Giovanna Silva",
            modeloVeiculo: "Fiat",
            placa: "EFG0123",
            observacao: "Sim",
            tipo: "Congelados",
            unidades: "75",
            pedidos: "2109876",
            dataHora: "19/06/2023 14:30",
            status: "Entregue",
            isChecked: false
        },
        {
            codSolicitacao: "9012345",
            motorista: "Rafaela Mendes",
            modeloVeiculo: "Chevrolet",
            placa: "GHI3456",
            observacao: "Não",
            tipo: "Padaria",
            unidades: "45",
            pedidos: "1098765",
            dataHora: "20/06/2023 09:15",
            status: "Pendente",
            isChecked: false
        },
        {
            codSolicitacao: "0123456",
            motorista: "Lucas Oliveira",
            modeloVeiculo: "Renault",
            placa: "JKL6789",
            observacao: "N/A",
            tipo: "Laticínios",
            unidades: "65",
            pedidos: "0987654",
            dataHora: "20/06/2023 16:50",
            status: "Em andamento",
            isChecked: false
        },
        {
            codSolicitacao: "1234567",
            motorista: "Fernando Santos",
            modeloVeiculo: "Volkswagen",
            placa: "MNO9012",
            observacao: "Sim",
            tipo: "Higiene",
            unidades: "55",
            pedidos: "9876543",
            dataHora: "21/06/2023 11:35",
            status: "Entregue",
            isChecked: false
        },
        {
            codSolicitacao: "2345678",
            motorista: "Vanessa Rodrigues",
            modeloVeiculo: "Ford",
            placa: "PQR2345",
            observacao: "N/A",
            tipo: "Bebidas",
            unidades: "70",
            pedidos: "8765432",
            dataHora: "21/06/2023 09:10",
            status: "Pendente",
            isChecked: false
        },
        {
            codSolicitacao: "3456789",
            motorista: "Maurício Costa",
            modeloVeiculo: "Mercedes-Benz",
            placa: "STU5678",
            observacao: "Não",
            tipo: "Alimentos",
            unidades: "50",
            pedidos: "7654321",
            dataHora: "22/06/2023 13:55",
            status: "Em andamento",
            isChecked: false
        },
        {
            codSolicitacao: "4567890",
            motorista: "Roberta Almeida",
            modeloVeiculo: "Volvo",
            placa: "VWX9012",
            observacao: "N/A",
            tipo: "Hortifruti",
            unidades: "75",
            pedidos: "6543210",
            dataHora: "22/06/2023 10:30",
            status: "Entregue",
            isChecked: false
        },
        {
            codSolicitacao: "5678901",
            motorista: "Carlos Lima",
            modeloVeiculo: "Iveco",
            placa: "YZA2345",
            observacao: "Sim",
            tipo: "Congelados",
            unidades: "60",
            pedidos: "5432109",
            dataHora: "23/06/2023 15:15",
            status: "Pendente",
            isChecked: false
        }
    ]);
    
    const handleFirstCheckboxChange = () => {
        const updatedImpressoes = impressoes.map((impressao, index) => {
            // Atualiza o estado isChecked de todas as impressoes
            return {
                ...impressao,
                isChecked: !impressao.isChecked
            };
        });
    
        setImpressoes(updatedImpressoes);
        //setVerifySelectAll(verifySelect);
        verifySelect();
      };
    
      function handleCheckboxChange(index){
        const updatedImpressoes = impressoes.map((impressao, i) => {
            console.log("laço: "+ i);
            if (i === index) {
                console.log("Muda uma só");
                return {
                    ...impressao,
                    isChecked: !impressao.isChecked
                };
            } else {
                console.log("Deixou igual");
                return impressao;
            }
        });
        
        setImpressoes(updatedImpressoes);
        verifySelect();
        //setVerifySelectAll(verifySelect);
        
      };

      function verifySelect() {
        var resultado = false;
        try{
            impressoes.forEach((impressao, i) => {
                console.log(impressao.isChecked);
                if(impressao.isChecked){
                    resultado = false;
                    console.log("Uma deu false");
                    throw "2";

                    //setVerifySelectAll(true);
                }else{
                    console.log("Setou true");
                    resultado = true;
                    
                }
                /*else {
                    console.log("Setou false");
                    setVerifySelectAll(false);
                }*/
            });
        }catch(e){
            console.log("Acabou!");
        }

        setVerifySelectAll(resultado);
        
        /*
        const verify = impressoes.every((impressao) => impressao.isChecked);
        console.log(verify);
        if (verify) {
            setVerifySelectAll(false);
        }
        else{
            setVerifySelectAll(true);
        }*/
      }

    return(
        <div>
            <Header/>
            <div class="imp">
                
                <nav className="navegacao">
                    <button>Impressão</button>
                    <button>Visualizar</button>
                    <button>Filtro</button>
                </nav>
                <div class="impressoes">
                    <table>
                        <thead>
                            <tr>
                                <th id="firstth"><input type="checkbox" checked={verifySelectAll} onChange={handleFirstCheckboxChange}/></th>
                                <th>Cód. solicitação</th>
                                <th>Motorista</th>
                                <th>Mod. Veículo</th>
                                <th>Placa</th>
                                <th>Observação</th>
                                <th>Tipo</th>
                                <th>Unidades</th>
                                <th>Pedidos</th>
                                <th>Data e hora da entrega</th>
                                <th id="lastth">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {impressoes.map((impressao, index) => (
                                <Impressao
                                key={index}
                                impressao={impressao}
                                handleCheckboxChange={handleCheckboxChange}
                                contador={index}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer/>
        </div>
    )

}