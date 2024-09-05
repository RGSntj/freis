import { useState } from "react";
import { ExerciseHeader } from "../../../components/ExerciseHeader";
import { QuestionCard } from "../../../components/QuestionCard";

import "./styles.scss";

export function ExerciseSix() {
  const [salario, setSalario] = useState<number>(0);
  const [bonus, setBonus] = useState<number>(0);
  const [desconto, setDesconto] = useState<number>(0);

  const [resultado, setResultado] = useState<number>(0);

  function calcularSalario() {
    const calculoBonus = (salario * bonus) / 100;

    const salarioTotal = salario + calculoBonus;

    setResultado(salarioTotal - desconto);
  }

  return (
    <section className="content-main">
      <ExerciseHeader
        title="Exercício 06 - Salário Líquido"
        lineColor="#FF5B37"
      />

      <QuestionCard question="Implemente um programa em javascript para calcular o salário líquido de um funcionário, a partir de seu salário base, do bônus mensal em porcentagem e do total de descontos em reais" />

      <div className="container-form">
        <form>
          <div className="input-group">
            <label htmlFor="salário">Salário base</label>
            <input
              type="number"
              id="salário"
              placeholder="0"
              onChange={(e) => setSalario(Number(e.target.value))}
            />
          </div>
          <div className="input-group">
            <label htmlFor="bonus">Bônus mensal em porcentagem</label>
            <input
              type="number"
              id="bonus"
              placeholder="0"
              onChange={(e) => setBonus(Number(e.target.value))}
            />
          </div>
          <div className="input-group">
            <label htmlFor="desc">Total de descontos</label>
            <input
              type="number"
              id="desc"
              placeholder="0"
              onChange={(e) => setDesconto(Number(e.target.value))}
            />
          </div>

          <button type="button" onClick={calcularSalario}>
            Executar
          </button>
        </form>

        {resultado > 0 && (
          <span className="resultado">
            Seu salário líquido é de R$ {resultado.toFixed(2).replace(".", ",")}
          </span>
        )}
      </div>
    </section>
  );
}
