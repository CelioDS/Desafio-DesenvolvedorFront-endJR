import style from "./Produtos.module.css";
import { useState, useEffect } from "react";
import Container from "./Container";
import Loadings from "./Loading";
import { BsCartPlusFill, BsCartCheckFill } from "react-icons/bs";
import { getItem, setItem } from "../service/LocalStorage";

export default function ProdutosNew() {
  const [data, setData] = useState([]);
  const [carrinho, setCarrinho] = useState(getItem("item-carrinho") || []);
  const [loading, setLoading] = useState(true);
  const [nomeProduto, setNomeProduto] = useState();

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const API =
          "https://api.mercadolibre.com/sites/MLB/search?q=celular&limit=2";
        const response = await fetch(API);
        const OBJJson = await response.json();

        const mappedData = OBJJson.results.map((item) => ({
          id: item.id,
          title: item.title,
          thumbnail: item.thumbnail,
          price: item.price,
        }));

        setNomeProduto(OBJJson.query);
        setData(mappedData);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchAPI();
  }, []);

  function handleClick(obj) {
    const item = carrinho.find((e) => e.id === obj.id);

    if (item) {
      const arrayFilter = carrinho.filter((e) => e.id !== obj.id);
      setCarrinho(arrayFilter);
      setItem("item-carrinho", arrayFilter);
    } else {
      setItem("item-carrinho", [...carrinho, obj]);
      setCarrinho([...carrinho, obj]);
    }
  }

  return (
    <main className={style.main}>
      <Container>
        <h1> Promoção de {nomeProduto} </h1>

        <section>
          {loading ? (
            <span style={{ textAlign: "center" }}>
              <Loadings></Loadings>
            </span>
          ) : (
            data.map((item) => (
              <div key={item.id} className={style.areaProdutos}>
                <h2>{item.title}</h2>
                <div className={style.areaItem}>
                  <aside>
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className={style.produto}
                    />
                  </aside>

                  <aside>
                    <p>
                      <s style={{ color: "#CCC", fontSize: "13px" }}>
                        {(item.price + (item.price * 21) / 100).toFixed(2)}
                      </s>
                      <br />
                      <strong> R$ {item.price.toFixed(2)}</strong>
                    </p>

                    <p>
                      pix <span>10%</span> de desconto R$
                      <span>
                        {(item.price - (item.price * 10) / 100).toFixed(2)}
                      </span>
                    </p>

                    <button onClick={() => handleClick(item)}>
                      {carrinho.some(
                        (itemCarrinho) => itemCarrinho.id === item.id
                      ) ? (
                        <BsCartCheckFill style={{ color: " #006eff" }} />
                      ) : (
                        <BsCartPlusFill />
                      )}
                    </button>
                  </aside>
                </div>
              </div>
            ))
          )}
        </section>
      </Container>
    </main>
  );
}
