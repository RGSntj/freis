import { useState } from "react";
import { Cardbox } from "../../components/Cardbox";
import "./styles.scss";

interface Box {
  link: string;
  bg_box_color: string;
  title: string;
  exercise: string;
}

const boxes: Box[] = [
  {
    link: "exercicio-1",
    bg_box_color: "#FFCE37",
    title: "Cupom de desconto",
    exercise: "Exercício 1",
  },
  {
    link: "exercicio-2",
    bg_box_color: "#B3FF37",
    title: "Converter Kg/gramas",
    exercise: "Exercício 2",
  },
  {
    link: "exercicio-3",
    bg_box_color: "#37FFF3",
    title: "Valor total por quantidade",
    exercise: "Exercício 3",
  },
  {
    link: "exercicio-4",
    bg_box_color: "#37B7FF",
    title: "Leitura de livro",
    exercise: "Exercício 4",
  },
  {
    link: "exercicio-5",
    bg_box_color: "#CB37FF",
    title: "Média de notas",
    exercise: "Exercício 5",
  },
  {
    link: "exercicio-6",
    bg_box_color: "#FF5B37",
    title: "Salário líquido",
    exercise: "Exercício 6",
  },
  {
    link: "exercicio-7",
    bg_box_color: "#37FFAB",
    title: "Cores primárias",
    exercise: "Exercício 7",
  },
  {
    link: "exercicio-8",
    bg_box_color: "#151515",
    title: "Temperatura",
    exercise: "Exercício 8",
  },
  {
    link: "exercicio-10",
    bg_box_color: "#B75333",
    title: "Calculo de IMC com histórico",
    exercise: "Exercício 10",
  },
  {
    link: "exercicio-11",
    bg_box_color: "#6533B7",
    title: "Tabuada",
    exercise: "Exercício 11",
  },
];

export function HomePage() {
  return (
    <section className="content-main">
      <h1 className="titulo">Escolha um treino...</h1>

      <div className="cards-container">
        {boxes.map((b) => {
          return (
            <Cardbox
              exercise={b.exercise}
              bg_box_color={b.bg_box_color}
              title={b.title}
              link={b.link}
            />
          );
        })}
      </div>
    </section>
  );
}
