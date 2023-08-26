import style from "./Header-terceiro.module.css";
import Container from "./Container";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={style.header}>
      <Container>
        <section className={style.sectionfirst}>
          <Link to="/">
            <span> Todas as Categorias </span>
          </Link>
          <Link to="/">
            <span> Tecnologia</span>
          </Link>
          <Link to="/">
            <span> Marketing</span>
          </Link>
          <Link to="/">
            <span> Full-Service</span>
          </Link>
          <Link to="/">
            <span> Mídias Pagas</span>
          </Link>
          <Link to="/">
            <span> SEO</span>
          </Link>
          <Link to="/">
            <span> Inbound</span>
          </Link>
        </section>
      </Container>
    </header>
  );
}
