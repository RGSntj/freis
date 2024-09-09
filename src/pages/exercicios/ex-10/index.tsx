import { useState } from "react";
import { ExerciseHeader } from "../../../components/ExerciseHeader";
import { QuestionCard } from "../../../components/QuestionCard";

import "./styles.scss";
import { Trash } from "lucide-react";

export function ExerciseTen() {
  const [altura, setAltura] = useState<number>(0);
  const [peso, setPeso] = useState<number>(0);

  const [resultados, setResultados] = useState<string[]>([]);

  function verificarImc() {
    const calculo = peso / (altura * altura);

    let resultado = "";

    if (calculo < 16.9) {
      resultado = "Muito abaixo do peso";
    } else if (calculo >= 17 && calculo < 18.4) {
      resultado = "Abaixo do peso";
    } else if (calculo >= 18.5 && calculo < 24.9) {
      resultado = "Peso normal";
    } else if (calculo >= 25 && calculo < 29.9) {
      resultado = "Acima do peso";
    } else if (calculo >= 30 && calculo < 34.9) {
      resultado = "Obesidade Grau I";
    } else if (calculo >= 35 && calculo <= 40) {
      resultado = "Obesidade Grau II";
    } else if (calculo > 40) {
      resultado = "Obesidade Grau III";
    }

    const respostaMontada = `Altura: ${altura} | Peso: ${peso} | Situação: ${resultado}`;

    setResultados([...resultados, respostaMontada]);
  }

  function excluirImc(idx: number) {
    const novoArray = resultados.filter((_, index) => index != idx);

    setResultados(novoArray);
  }

  return (
    <section className="content-main">
      <ExerciseHeader
        title="Exercício 10 - Calculo de IMC com histórico"
        lineColor="#B75333"
      />

      <QuestionCard question="Implemente um programa em Javascript que a partir da altura e do peso de uma pessoa, calcule o IMC e avalie a faixa correspondente a tabela ao lado. Ao final, apresente o IMC e a situação." />

      <div className="container-main">
        <div className="container-form">
          <form>
            <div className="row-input">
              <div className="input-group">
                <label htmlFor="altura">Altura</label>
                <input
                  type="text"
                  id="altura"
                  placeholder="1.8"
                  onChange={(e) => setAltura(Number(e.target.value))}
                />
              </div>
              <div className="input-group">
                <label htmlFor="peso">Peso</label>
                <input
                  type="text"
                  id="peso"
                  placeholder="80.5"
                  onChange={(e) => setPeso(Number(e.target.value))}
                />
              </div>
            </div>

            <button type="button" onClick={verificarImc}>
              Executar
            </button>
          </form>
        </div>

        <div className="container-results">
          {resultados.map((result, idx) => {
            return (
              <div className="card-result">
                <p>{result}</p>

                <button onClick={() => excluirImc(idx)} >
                  <Trash style={{ color: "red" }} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
