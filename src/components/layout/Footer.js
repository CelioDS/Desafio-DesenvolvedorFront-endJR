import style from "./Footer.module.css";
import Container from "./Container";

export default function Header() {
  return (
    <footer className={style.footer}>
      <Container>
        <p>
          Nairuz Marketing e Tecnologia® 2023 / todos os direitos reservados
        </p>
      </Container>
    </footer>
  );
}
