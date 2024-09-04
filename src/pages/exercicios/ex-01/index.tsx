import { useState } from "react";
import { ExerciseHeader } from "../../../components/ExerciseHeader";
import { QuestionCard } from "../../../components/QuestionCard";
import "./styles.scss";

export function ExerciseOne() {
  const [valorPedido, setValorPedido] = useState<string>("");
  const [valorCupom, setValorCupom] = useState<string>("");

  const [total, setTotal] = useState<number | null>(null);

  function calcularDesconto() {
    const total = Number(valorPedido) - Number(valorCupom);

    setTotal(total);
  }

  return (
    <section className="content-main">
      <ExerciseHeader
        title="Exercício 01 - Cupom de desconto"
        lineColor="#FFCE37"
      />

      <QuestionCard
        question="Implementar um programa em Javascript para calcular o valor final de uma
        compra a partir do valor da compra e do cupom de desconto. O cupom diz
        quantos reais terá de desconto."
      />

      <div className="container-form">
        <form>
          <div className="input-group">
            <label htmlFor="pedido">Informe o valor do pedido</label>
            <input
              type="text"
              id="pedido"
              placeholder="0"
              onChange={(e) => setValorPedido(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="cupom">Informe o valor do cupom</label>
            <input
              type="text"
              id="cupom"
              placeholder="0"
              onChange={(e) => setValorCupom(e.target.value)}
            />
          </div>

          <button type="button" onClick={calcularDesconto}>
            Executar
          </button>
        </form>
        {total && (
          <p className="resultado">
            Resultado: O total é R$ {total.toFixed(2)}
          </p>
        )}
      </div>
    </section>
  );
}
