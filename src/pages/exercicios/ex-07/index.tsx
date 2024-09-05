import { useState } from "react";
import { ExerciseHeader } from "../../../components/ExerciseHeader";
import { QuestionCard } from "../../../components/QuestionCard";

import "./styles.scss";

export function ExerciseSeven() {
  const [corUm, setCorUm] = useState<string>("");
  const [corDois, setCorDois] = useState<string>("");

  const [resultado, setResultado] = useState<boolean>(false);

  function verificarCoresPrimarias() {
    const coresPrimarias: Record<string, string> = {
      "amarelo-vermelho": "laranja",
      "vermelho-amarelo": "laranja",
      "vermelho-azul": "roxo",
      "azul-vermelho": "roxo",
      "amarelo-azul": "verde",
      "azul-amarelo": "verde",
    };

    const coresJuntas = `${corUm}-${corDois}`;
    const corCombinada = coresPrimarias[coresJuntas];

    if (corCombinada) {
      setResultado(true);
    } else {
      setResultado(false);
    }
  }

  return (
    <section className="content-main">
      <ExerciseHeader
        title="Exercício 07 - Cores primárias"
        lineColor="#37FFAB"
      />

      <QuestionCard question="Implementar um programa em javascript para verificar se duas cores são primárias" />

      <div className="container-form">
        <form>
          <div className="input-group">
            <label htmlFor="c1">Cor um</label>
            <input
              type="text"
              id="c1"
              placeholder="Primeira cor"
              onChange={(e) => setCorUm(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="c2">Cor dois</label>
            <input
              type="text"
              id="c2"
              placeholder="Segunda cor"
              onChange={(e) => setCorDois(e.target.value)}
            />
          </div>

          <button type="button" onClick={verificarCoresPrimarias}>
            Executar
          </button>
        </form>
      </div>
    </section>
  );
}
