import { useState } from "react";
import { ExerciseHeader } from "../../../components/ExerciseHeader";
import { QuestionCard } from "../../../components/QuestionCard";

export function ExerciseEleven() {
  const [numero, setNumero] = useState<number>(0);

  const [resultados, setResultados] = useState<string[]>([]);

  function calcularTabuada() {
    const arrayTabuada = [];

    for (let i = 1; i <= 10; i++) {
      const calculoMontado = `${numero} x ${i} = ${numero * i}`;

      arrayTabuada.push(calculoMontado);
    }

    setResultados(arrayTabuada);
  }

  return (
    <section className="content-main">
      <ExerciseHeader
        title="Exercício 11 - Tabuada"
        lineColor="#6533B7"
      />

      <QuestionCard question="Implemente um programa em Javascript que escreva a tabuada de um número informado pelo usuário. A mensagem deve estar no formato ”A x B = X”." />

      <div className="container-form">
        <form>
          <div className="input-group">
            <label htmlFor="tabuada">Tabuada do:</label>
            <input
              onChange={(e) => setNumero(Number(e.target.value))}
              type="number"
              id="tabuada"
              placeholder="0"
            />
          </div>

          <button type="button" onClick={calcularTabuada}>
            Executar
          </button>
        </form>
        {resultados.map((result) => {
          return (
            <p className="resultado">{result}</p>
          );
        })}
      </div>
    </section>
  );
}
