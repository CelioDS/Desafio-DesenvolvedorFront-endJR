import style from "./Footer.module.css";
import Container from "./Container";
import { useEffect, useState } from "react";

export default function Header() {
  const [year, setyear] = useState();

  useEffect(() => {
    const anoAtual = new Date().getFullYear();
    setyear(anoAtual.toString());
  }, []);
  return (
    <footer className={style.footer}>
      <Container>
        <p>
          C&lio ® {year} <br /> Todos os direitos reservados
        </p>
      </Container>
    </footer>
  );
}
