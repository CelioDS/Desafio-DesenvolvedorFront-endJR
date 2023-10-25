import style from "./home.module.css";
import slide from "../img/slide3.jpg";
import Produtos from "../layout/Produtos";
import CartCredit from "../layout/CardCredit";

export default function Home() {
  return (
    <main className={style.main}>
      <section>
        <img src={slide} alt="" />
      </section>

      <section>
        <Produtos />
      </section>

      <section>
        <CartCredit />
      </section>
    </main>
  );
}
