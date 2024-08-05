import { ReactNode } from "react";

import "./styles.scss";

interface CardboxProps {
  children: ReactNode;
  exercise: string;
  bg_box_color: string;
}

export function Cardbox({ children, bg_box_color, exercise }: CardboxProps) {
  const boxStyle = {
    width: "45px",
    height: "45px",
    borderRadius: "8px",
    backgroundColor: bg_box_color,
  };

  return (
    <div className="card">
      <div style={boxStyle} />
      <h2 className="title-card">{children}</h2>
      <span>{exercise}</span>
    </div>
  );
}
