import { getItem } from "./LocalStorage";
import { useState } from "react";

export default function CarrinhoQTD() {
  const [carrinho, setCarrinho] = useState(getItem("item-carrinho") || []);

  window.addEventListener("click", () => {
    setCarrinho(getItem("item-carrinho"));
  });
  return (
    <>
      <p>{carrinho.length}</p>
    </>
  );
}
