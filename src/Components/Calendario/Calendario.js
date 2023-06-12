import Informacoes from "../Informacoes/Informacoes";
import React, { useState } from "react";
import { ptBR } from 'date-fns/locale';
import Botoes from "../Botoes/Botoes";
import { format } from 'date-fns';
import "./Calendario.css";

export default function Calendario() {
  const [ano, setAno] = useState(new Date().getFullYear());
  const [mes, setMes] = useState(new Date().getMonth() + 1);
  const mesesDoAno = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ];

  const diasDaSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

  function obterDiasDoMes(ano, mes) {
    return new Date(ano, mes, 0).getDate();
  }

  const obterDiaDaSemana = (ano, mes, dia) => {
    return new Date(ano, mes - 1, dia).getDay();
  };

  const handleMesAnterior = () => {
    if (mes === 1) {
      setMes(12);
      setAno(ano - 1);
    } else {
      setMes(mes - 1);
    }
  };

  const handleProximoMes = () => {
    if (mes === 12) {
      setMes(1);
      setAno(ano + 1);
    } else {
      setMes(mes + 1);
    }
  };

  const obterDiaInicioMes = (ano, mes) => {
    return new Date(ano, mes - 1, 1).getDay();
  };

  const diasDoMes = obterDiasDoMes(ano, mes);
  const diaInicioMes = obterDiaInicioMes(ano, mes);
  const diaFimMes = diaInicioMes + diasDoMes;

  const [diaSelecionado, setDiaSelecionado] = useState(null);
  const [modoSelecaoAno, setModoSelecaoAno] = useState(false);

  const handleDiaClick = (dataCompleta) => {
    if (dataCompleta !== diaSelecionado) {
      setDiaSelecionado(dataCompleta);
    }
  };

  const obterDataCompleta = (ano, mes, dia) => {
    const data = new Date(ano, mes - 1, dia);
    const dataFormatada = format(data, 'dd/MM/yyyy', { locale: ptBR });
    return dataFormatada;
  };

  const handleSelecionarAno = (anoSelecionado) => {
    setAno(anoSelecionado);
    setModoSelecaoAno(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSelecionarAno(parseInt(event.target.value));
    }
  };

  return (
    <div className="page">
      <div className="ladoEsquerdo">
        <Informacoes diaSelecionado={diaSelecionado} />
      </div>

      <div className="ladoDireito">
        <div className="calendario">
          <div className="cabecalho">
            <button onClick={handleMesAnterior}>&lt;</button>
            <h2>{mesesDoAno[mes - 1]}</h2>
            {modoSelecaoAno ? (
              <input
                type="number"
                value={ano}
                onChange={(event) => setAno(parseInt(event.target.value))}
                onBlur={() => setModoSelecaoAno(false)}
                onKeyDown={handleKeyDown}
                autoFocus
              />
            ) : (
              <h2 onClick={() => setModoSelecaoAno(true)}>{ano}</h2>
            )}
            <button onClick={handleProximoMes}>&gt;</button>
          </div>
          <div className="dias-semana">
            {diasDaSemana.map((dia) => (
              <div key={dia} className="dia-semana">
                {dia}
              </div>
            ))}
          </div>
          <div className="dias-mes">
            {[...Array(diaInicioMes)].map((_, index) => {
              const dia = obterDiasDoMes(ano, mes - 1) - index;
              return (
                <div key={`prev-${index}`} className="dia menos-visivel">
                  {dia}
                </div>
              );
            })}

            {[...Array(diasDoMes)].map((_, index) => {
              const dia = index + 1;
              const diaDaSemana = obterDiaDaSemana(ano, mes, dia);
              const className =
                diaDaSemana === 0 ? "domingo" : diaDaSemana === 6 ? "sabado" : "";
              const isSelected = obterDataCompleta(ano, mes, dia) === diaSelecionado;
              const dataCompleta = obterDataCompleta(ano, mes, dia);
              return (
                <div
                  key={dia}
                  className={`dia ${className} ${isSelected ? "selecionado" : ""}`}
                  onClick={() => handleDiaClick(dataCompleta)}
                >
                  {dia}
                </div>
              );
            })}

            {diaFimMes <= 35 &&
              [...Array(35 - diaFimMes)].map((_, index) => {
                const dia = index + 1;
                return (
                  <div key={`next-${index}`} className="dia menos-visivel">
                    {dia}
                  </div>
                );
              })}

            {diaFimMes > 35 &&
              [...Array(42 - diaFimMes)].map((_, index) => {
                const dia = index + 1;
                return (
                  <div key={`next-${index}`} className="dia menos-visivel">
                    {dia}
                  </div>
                );
              })}
          </div>
        </div>
        <Botoes/>
      </div>
    </div>
  );
};


