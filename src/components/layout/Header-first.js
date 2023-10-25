import FacebookSVG from "../img/Iconfacebook";
import InstagramSVG from "../img/Iconinstagram";
import YoutubeSVG from "../img/Iconyoutube";
import style from "./Header-first.module.css";
import Container from "./Container";
import ProfileSVG from "../img/IconProfile";
import CartSVG from "../img/IconCart";
import { Link } from "react-router-dom";

import CarrinhoQTD from "../service/CarrinhoQTD";

export default function Header() {
  const pages = [
    "Todas as Categorias",
    "Tecnologia",
    "Marketing",
    " Full-Service",
    "Mídias Pagas",
    "SEO",
    "Inbound",
  ];

  return (
    <header className={style.header}>
      <section className={style.sectionfirst}>
        <Container className={style.Containerfirst}>
          <div>
            <p>Parcelamento em ate 12x Sem juros</p>
            <p>Desconto de 10% á vista</p>
            <p>Compra garantida</p>
          </div>
          <div>
            <a href="/">
              <InstagramSVG />
            </a>
            <a href="/">
              <FacebookSVG />
            </a>
            <a href="/">
              <YoutubeSVG />
            </a>
          </div>
        </Container>
      </section>

      <section className={style.sectionsecond}>
        <Container>
          <div>
            <h1>C&lio</h1>
          </div>
          <div>
            <input
              type="text"
              placeholder="Insira aqui o que você procura..."
            />
          </div>
          <div>
            <Link to="/">
              <ProfileSVG />
              <div>
                <span> Meu</span> Perfil
              </div>
            </Link>
            <Link to="/Carrinho" className={style.btn}>
              <CartSVG />
              <span className={style.btnQ}>{<CarrinhoQTD />}</span>
              <div>
                <span> Meu</span> Carrinho
              </div>
            </Link>
          </div>
        </Container>
      </section>

      <section className={style.sectionthird}>
        <Container>
          {pages.map((page) => (
            <Link key={page} to="/">
              <span> {page} </span>
            </Link>
          ))}
        </Container>
      </section>
    </header>
  );
}
