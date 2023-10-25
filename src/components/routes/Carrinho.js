import { getItem, setItem } from "../service/LocalStorage";
import { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import style from "./Carrinho.module.css";
import Loadings from "../layout/Loading";

export default function Carrinho() {
  const [data, setdata] = useState(getItem("item-carrinho") || []);

  function handleDelete(obj) {
    const newData = data.filter((e) => e.id !== obj.id);
    setdata(newData);
    setItem("item-carrinho", newData);
    window.location.reload();
  }

  return (
    <main>
      <p>colocar paginação nos produtos.</p>
      <p>colocar valores no carrinho e produtos</p>

      <section>
        {data ? (
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
                    <s style={{ color: "#e71919", fontSize: "13px" }}>
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

                  <button onClick={() => handleDelete(item)}>
                    <BsFillTrashFill />
                  </button>
                </aside>
              </div>
            </div>
          ))
        ) : (
          <span style={{ textAlign: "center" }}>
            <Loadings></Loadings>
          </span>
        )}
      </section>
    </main>
  );
}
