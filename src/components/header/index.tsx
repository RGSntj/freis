import "./styles.scss";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <div className="content-left">
        <img src="/images/logo-frei.png" alt="Logo do FREI" />
        <span>React FreiS</span>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
