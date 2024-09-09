import { useState } from "react";
import { ExerciseHeader } from "../../../components/ExerciseHeader";
import { QuestionCard } from "../../../components/QuestionCard";

import "./styles.scss";

export function ExerciseEight() {
  const [temperatura, setTemperatura] = useState<number>(0);

  const [resposta, setResposta] = useState<string>("");

  function verificarTemperatura(){
    let resultado = "";

    if (temperatura >= 41) 
      resultado = "Hipertemia";
    else if (temperatura >= 39.6 && temperatura < 41)
      resultado = "Febre alta";
    else if (temperatura >= 37.6 && temperatura < 39.6)
      resultado = "Febre";
    else if (temperatura >= 36 && temperatura < 37.6)
      resultado = "Normal";
    else if (temperatura < 36)
      resultado = "Hiportemia";
    
    setResposta(resultado);
  }

  return (
    <section className="content-main">
      <ExerciseHeader
        title="Exercício 08 - Temperatura"
        lineColor="#151515"
      />

      <QuestionCard question="Implementar um programa em javascript que a partir da temperatura, avalie a situação da pessoa conforme a tabela. Ao final, apresente a classificação." />

      <div className="container-form">
        <form>
          <div className="input-group">
            <label htmlFor="temp">Temperatura</label>
            <input
              type="text"
              id="temp"
              placeholder="38.9"
              onChange={(e) => setTemperatura(Number(e.target.value))}
            />
          </div>

          <button type="button" onClick={verificarTemperatura}>
            Executar
          </button>
        </form>
        {!!resposta && <span className="resultado">A situação para sua temperatura é {resposta}</span>}
      </div>
    </section>
  );
}
