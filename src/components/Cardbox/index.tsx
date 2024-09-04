import { ReactNode } from "react";

import "./styles.scss";
import { Link } from "react-router-dom";

interface CardboxProps {
  title: ReactNode;
  exercise: string;
  bg_box_color: string;
  link: string;
}

export function Cardbox({ title, bg_box_color, exercise, link }: CardboxProps) {
  const boxStyle = {
    width: "45px",
    height: "45px",
    borderRadius: "8px",
    backgroundColor: bg_box_color,
  };

  return (
    <Link className="card" to={link}>
      <div style={boxStyle} />
      <h2 className="title-card">{title}</h2>
      <span>{exercise}</span>
    </Link>
  );
}
