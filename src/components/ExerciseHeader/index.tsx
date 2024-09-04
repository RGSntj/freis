import { Link, useNavigation } from "react-router-dom";
import "./styles.scss";

import { ArrowLeft } from "lucide-react";

interface Props {
  title: string;
  lineColor: string;
}

export function ExerciseHeader({ title, lineColor }: Props) {
  return (
    <div className="header-exercise">
      <div className="header-content">
        <Link className="icon" to="/">
          <ArrowLeft size={20} color="white" />
        </Link>
        <h1>{title}</h1>
      </div>

      <div className="line" style={{ backgroundColor: lineColor }} />
    </div>
  );
}
