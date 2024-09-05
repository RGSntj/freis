import { useState } from "react";
import { ExerciseHeader } from "../../../components/ExerciseHeader";
import { QuestionCard } from "../../../components/QuestionCard";

import "./styles.scss";

interface IResultado {
  media: number;
  situacao: boolean;
}

export function ExerciseFive() {
  const [primeiraNota, setPrimeiraNota] = useState<number>(0);
  const [segundaNota, setSegundaNota] = useState<number>(0);
  const [terceiraNota, setTerceiraNota] = useState<number>(0);

  const [resultado, setResultado] = useState<IResultado | null>(null);

  function calcularMedia() {
    const somaTotal = primeiraNota + segundaNota + terceiraNota;
    const media = somaTotal / 3;

    const objeto = {
      media: media,
      situacao: media >= 5,
    };

    console.log(`Objeto: ${objeto.situacao}`);

    setResultado({
      media: media,
      situacao: media >= 5,
    });
  }

  return (
    <section className="content-main">
      <ExerciseHeader
        title="Exercício 05 - Média de notas"
        lineColor="#CB37FF"
      />

      <QuestionCard question="Implemente um programa em Javascript para verificar se um aluno passou ou não, baseado em 3 notas, considerando que a média mínima para passar é 6." />

      <div className="container-form">
        <form>
          <div className="input-group">
            <label htmlFor="primeira-nota">Primeira nota</label>
            <input
              type="number"
              id="primeira-nota"
              placeholder="0"
              onChange={(e) => setPrimeiraNota(Number(e.target.value))}
            />
          </div>
          <div className="input-group">
            <label htmlFor="segunda-nota">Segunda nota</label>
            <input
              type="number"
              id="segunda-nota"
              placeholder="0"
              onChange={(e) => setSegundaNota(Number(e.target.value))}
            />
          </div>
          <div className="input-group">
            <label htmlFor="terceira-nota">Terceira nota</label>
            <input
              type="number"
              id="terceira-nota"
              placeholder="0"
              onChange={(e) => setTerceiraNota(Number(e.target.value))}
            />
          </div>

          <button type="button" onClick={calcularMedia}>
            Executar
          </button>
        </form>

        {resultado && (
          <div className="container-resultado">
            <span className="resultado">
              A média do aluno é {Math.round(resultado.media).toFixed(1)}
            </span>
            <span className="resultado">
              O aluno passou? {resultado.situacao ? "sim" : "não"}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
