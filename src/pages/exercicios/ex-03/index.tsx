import { useState } from "react";
import { ExerciseHeader } from "../../../components/ExerciseHeader";
import { QuestionCard } from "../../../components/QuestionCard";

import "./styles.scss";

export function ExerciseThree() {
  const [quantidadeP, setQuantidadeP] = useState(0);
  const [quantidadeM, setQuantidadeM] = useState(0);
  const [quantidadeG, setQuantidadeG] = useState(0);

  const [resultado, setResultado] = useState<number>();

  function calcularTotal() {
    let total = quantidadeP * 13.5 + quantidadeM * 15 + quantidadeG * 17.5;

    setResultado(total);
  }

  return (
    <section className="content-main">
      <ExerciseHeader
        title="Exercício 03 - Valor total por quantidade"
        lineColor="#37FFF3"
      />

      <QuestionCard question="Implementar um programa em Javascript para calcular o total de uma venda de açaí a partir das quantidades compradas para cada tamanho: pequeno, médio e grande, sabendo que o valor do açaí é R$ 13,50; R$ 15,00 e R$ 17,50 respectivamente" />

      <div className="container-form">
        <form className="form-exercice-three">
          <div className="container-row">
            <div className="input-group">
              <label htmlFor="pequeno">Quantidade pequeno</label>
              <input
                type="number"
                id="pequeno"
                placeholder="0"
                onChange={(e) => setQuantidadeP(Number(e.target.value))}
              />
            </div>
            <div className="input-group">
              <label htmlFor="medio">Quantidade médio</label>
              <input
                type="number"
                id="medio"
                placeholder="0"
                onChange={(e) => setQuantidadeM(Number(e.target.value))}
              />
            </div>
            <div className="input-group">
              <label htmlFor="grande">Quantidade grande</label>
              <input
                type="number"
                id="grande"
                placeholder="0"
                onChange={(e) => setQuantidadeG(Number(e.target.value))}
              />
            </div>
          </div>
          <button type="button" onClick={calcularTotal}>
            Executar
          </button>
        </form>

        {resultado! > 0 && (
          <span className="resultado">
            Resultado: O total é R$ {resultado?.toFixed(2).replace(".", ",")}
          </span>
        )}
      </div>
    </section>
  );
}
