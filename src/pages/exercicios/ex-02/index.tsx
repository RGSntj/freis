import { useState } from "react";
import { ExerciseHeader } from "../../../components/ExerciseHeader";
import { QuestionCard } from "../../../components/QuestionCard";

export function ExerciseTwo() {
  const [kilos, setKilos] = useState<string>("");

  const [resultado, setResultado] = useState<number>();

  function converterParaGramas() {
    const gramas = Number(kilos) * 1000;

    setResultado(gramas);
  }

  return (
    <section className="content-main">
      <ExerciseHeader
        title="Exercício 02 - Converter Kg/gramas"
        lineColor="#b3ff37"
      />

      <QuestionCard question="Implementar um programa em Javascript para converter kilos em gramas." />

      <div className="container-form">
        <form>
          <div className="input-group">
            <label htmlFor="pedido">Valor em Kilos</label>
            <input
              onChange={(e) => setKilos(e.target.value)}
              type="number"
              id="pedido"
              placeholder="0"
            />
          </div>

          <button type="button" onClick={converterParaGramas}>
            Executar
          </button>
        </form>
        {resultado && <span>Resultado: O total é {resultado} gramas.</span>}
      </div>
    </section>
  );
}
