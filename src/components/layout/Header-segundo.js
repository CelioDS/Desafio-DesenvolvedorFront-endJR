import style from "./Header-segundo.module.css";
import Container from "./Container";
import Logo from "../img/Camada 2.png";
import pesquisa from "../img/Grupo1316.png";

export default function Header() {
  return (
    <header className={style.header}>
      <Container>
        <section className={style.sectionfirst}>
          <div>
            <img src={Logo} alt="" />
          </div>
          <div>
            <input
              type="text"
              placeholder="Insira aqui o que você procura..."
            />
          </div>
          <div>
            <a href="/">Meu Perfil</a>
            <a href="/">Meu Carrinho</a>
          </div>
        </section>
      </Container>
    </header>
  );
}
