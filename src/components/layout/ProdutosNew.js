import style from "./ProdutosHight.module.css";
import Produto from "../img/produto.jpg";
import Container from "./Container";

export default function ProdutosHight() {
  const produtos = [
    {
      nome: "Produto Exemplo 5",
      preço: 579.99,
      img: Produto,
    },
    {
      nome: "Produto Exemplo 6",
      preço: 391.99,
      img: Produto,
    },
    {
      nome: "Produto Exemplo 7",
      preço: 549.99,
      img: Produto,
    },
    {
      nome: "Produto Exemplo 8",
      preço: 1259.99,
      img: Produto,
    },
  ];

  return (
    <main className={style.main}>
      <Container>
        <h1>Você não pode perder!</h1>
        <section>
          {produtos.map((item, index) => (
            <div key={index}>
              <img src={item.img} alt={item.nome} className={style.produto} />
              <h2>{item.nome}</h2>
              <p>
                <strong>R$ {item.preço.toFixed(2)}</strong>
              </p>
              <span>5x de R$ {(item.preço / 5).toFixed(2)}</span>
            </div>
          ))}
        </section>
      </Container>
    </main>
  );
}
