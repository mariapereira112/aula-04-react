import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1>Meu Projeto React</h1>

      <nav>
        <Link to="/">Início</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/lista">Lista</Link>
      </nav>
    </header>
  );
}

export default Header;