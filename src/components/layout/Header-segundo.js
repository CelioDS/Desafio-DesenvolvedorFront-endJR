import style from "./Header-segundo.module.css";
import Container from "./Container";
import Logo from "../img/Iconlogo";
import ProfileSVG from "../img/IconProfile";
import CartSVG from "../img/IconCart";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={style.header}>
      <Container>
        <section className={style.sectionfirst}>
          <div>
            <Logo />
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
            <Link to="/Carrinho">
              <CartSVG />
              <div>
                <span> Meu</span> Carrinho
              </div>
            </Link>
          </div>
        </section>
      </Container>
    </header>
  );
}
