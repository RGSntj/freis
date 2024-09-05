import { useState } from "react";
import { ExerciseHeader } from "../../../components/ExerciseHeader";
import { QuestionCard } from "../../../components/QuestionCard";

export function ExerciseFour() {
  const [nomeLivro, setNomeLivro] = useState<string>("");
  const [qtdPaginas, setQtdPaginas] = useState<number>(0);
  const [qtdSegundos, setQtdSegundos] = useState<number>(0);

  const [resultado, setResultado] = useState<number>(0);

  function calcularTempoLeitura() {
    let tempoPorPagina = (qtdPaginas * qtdSegundos) / 3600;

    setResultado(tempoPorPagina);
  }

  return (
    <section className="content-main">
      <ExerciseHeader
        title="Exercício 04 - Leitura de livro"
        lineColor="#37B7FF"
      />

      <QuestionCard question="Implementar um programa em Javascript que calcule o tempo que um livro será lido por uma pessoa a partir do nome do livro, do total de páginas e do tempo em segundos de leitura por página." />

      <div className="container-form">
        <form>
          <div className="input-group">
            <label htmlFor="livro">Nome do livro</label>
            <input
              type="text"
              id="livro"
              placeholder="Java para iniciantes"
              onChange={(e) => setNomeLivro(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="paginas">Total de páginas</label>
            <input
              type="number"
              id="paginas"
              placeholder="0"
              onChange={(e) => setQtdPaginas(Number(e.target.value))}
            />
          </div>
          <div className="input-group">
            <label htmlFor="leitura">Tempo em segundos de leitura</label>
            <input
              type="number"
              id="leitura"
              placeholder="0"
              onChange={(e) => setQtdSegundos(Number(e.target.value))}
            />
          </div>

          <button type="button" onClick={calcularTempoLeitura}>
            Executar
          </button>
        </form>

        {resultado > 0 && (
          <span className="resultado">
            Você lera {nomeLivro} em {resultado.toFixed(2)} horas
          </span>
        )}
      </div>
    </section>
  );
}
