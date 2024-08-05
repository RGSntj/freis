import { useState } from "react";
import { Cardbox } from "../../components/Cardbox";
import "./styles.scss";

interface Box {
  bg_box_color: string;
  title: string;
  exercise: string;
}

const boxes: Box[] = [
  {
    bg_box_color: "#FFCE37",
    title: "Cupom de desconto",
    exercise: "Exercício 1",
  },
  {
    bg_box_color: "#B3FF37",
    title: "Converter Kg/gramas",
    exercise: "Exercício 2",
  },
  {
    bg_box_color: "#37FFF3",
    title: "Valor total por quantidade",
    exercise: "Exercício 3",
  },
];

export function HomePage() {
  const [box, setBox] = useState<Box[]>(boxes);

  return (
    <section className="content-main">
      <h1>Escolha um treino...</h1>

      <div className="cards-container">
        {box.map((b) => {
          return (
            <Cardbox exercise={b.exercise} bg_box_color={b.bg_box_color}>
              {b.title}
            </Cardbox>
          );
        })}
      </div>
    </section>
  );
}
