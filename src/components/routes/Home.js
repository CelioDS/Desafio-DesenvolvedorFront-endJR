import style from "./home.module.css";
import slide from "../img/slide3.jpg";
import ProdutosHight from "../layout/ProdutosHight";
import ProdutosNew from "../layout/ProdutosNew";
import CartCredit from "../layout/CardCredit";

export default function Home() {
  return (
    <main className={style.main}>
      <section>
        <img src={slide} alt="" />
      </section>

      <section>
        <ProdutosHight />
      </section>
      <section>
        <ProdutosNew />
      </section>
      <section>
        <CartCredit />
      </section>
    </main>
  );
}
