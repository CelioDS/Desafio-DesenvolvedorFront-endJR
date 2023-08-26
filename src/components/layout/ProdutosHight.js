import style from "./ProdutosNew.module.css";
import Produto from "../img/produto.jpg";
import Container from "./Container";

export default function ProdutosNew() {
  const produtos = [
    {
      nome: "Produto Exemplo 1",
      preço: 79.99,
      img: Produto,
    },
    {
      nome: "Produto Exemplo 2",
      preço: 39.99,
      img: Produto,
    },
    {
      nome: "Produto Exemplo 3",
      preço: 59.99,
      img: Produto,
    },
    {
      nome: "Produto Exemplo 4",
      preço: 159.99,
      img: Produto,
    },
  ];

  return (
    <main className={style.main}>
      <Container>
        <h1>Campeões de venda</h1>
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
