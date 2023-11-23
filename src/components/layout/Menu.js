import FacebookSVG from "../img/Iconfacebook";
import InstagramSVG from "../img/Iconinstagram";
import YoutubeSVG from "../img/Iconyoutube";
import style from "./Menu.module.css";
import Container from "./Container";
import ProfileSVG from "../img/IconProfile";
import CartSVG from "../img/IconCart";
import { Link } from "react-router-dom";
import Mobile from "../service/CheckMobile";
import { useCallback, useEffect, useState } from "react";

import CarrinhoQTD from "../service/CarrinhoQTD";

export default function Header() {
  const checkMobile = useCallback(Mobile, []);
  const isMobile = checkMobile();
  const [textAnuncio, setTextAnuncio] = useState(
    "Parcelamento em ate 12x Sem juros"
  );

  const pages = [
    "Todas as Categorias",
    "Tecnologia",
    "Marketing",
    " Full-Service",
    "Mídias Pagas",
    "SEO",
    "Inbound",
  ];
  const anuncios = [
    "Parcelamento em ate 12x Sem juros",
    "Desconto de 10% á vista",
    "Compra garantida",
  ];

  useEffect(() => {
   const loop =  setInterval(() => {
      const randomNum = Math.floor(Math.random() * anuncios.length) - 0;
      setTextAnuncio(anuncios[randomNum]);
    }, 10000);
    return clearInterval(loop)
  });

  return (
    <header className={style.header}>
      <section className={style.sectionfirst}>
        <Container className={style.Containerfirst}>
          {!isMobile ? (
            <div>
              {anuncios.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          ) : (
            <div>
              <p>{textAnuncio}</p>
            </div>
          )}

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
          {!isMobile ? (
            pages.map((page) => (
              <Link key={page} to="/">
                <span> {page} </span>
              </Link>
            ))
          ) : (
            <select>
              {pages.map((page) => (
                <option key={page} value={page}>
                  {page}
                </option>
              ))}
            </select>
          )}
        </Container>
      </section>
    </header>
  );
}
