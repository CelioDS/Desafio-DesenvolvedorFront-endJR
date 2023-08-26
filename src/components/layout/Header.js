import FacebookSVG from "../img/Iconfacebook";
import InstagramSVG from "../img/Iconinstagram";
import YoutubeSVG from "../img/Iconyoutube";
import style from "./Header.module.css";
import Container from "./Container";

export default function Header() {
  return (
    <header className={style.header}>
      <Container>
        <section className={style.sectionfirst}>
          <div>
            <p>Parcelamento em ate 12x Sem juros</p>
            <p>Desconto de 10% á vista</p>
            <p>Comptra garantida</p>
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
        </section>
      </Container>
    </header>
  );
}
