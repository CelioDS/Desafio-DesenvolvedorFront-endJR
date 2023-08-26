import style from "./CardCredit.module.css";
import CartCredit from "../img/cardCredit.jpg";
import Container from "./Container";
import { useState } from "react";

export default function CreditCard() {
  const [nome, setNome] = useState();
  const [numero, setNumero] = useState("");
  const [validadeMM, setValidadeMM] = useState("");
  const [validadeAA, setValidadeAA] = useState("");
  const [cvc, setCvc] = useState("");

  function formatarNumero(numero) {
    const numeroSemEspacos = numero.replace(/\s+/g, ""); // Remove espaços existentes
    const digitosNumericos = numeroSemEspacos.replace(/\D/g, ""); // Remove caracteres não numéricos
    const gruposDe4 = digitosNumericos.match(/.{1,4}/g); // Divide em grupos de 4 dígitos

    if (gruposDe4) {
      const numeroFormatado = gruposDe4.join(" "); // Adiciona espaços entre grupos
      return numeroFormatado.substring(0, 19); // Limita a 19 caracteres
    }

    return digitosNumericos.substring(0, 19); // Caso não tenha grupos de 4 dígitos
  }

  function handleNumero(e) {
    const novoNumeroFormatado = formatarNumero(e.target.value);

    setNumero(novoNumeroFormatado);
  }

  return (
    <main className={style.main}>
      <Container>
        <section>
          <img src={CartCredit} alt="" />
          <div>
            <p> {numero}</p>
            <span> {nome} </span>
            <span>{validadeMM}</span>

            <span>{validadeAA && validadeMM && "/"}</span>

            <span>{validadeAA}</span>
          </div>
        </section>

        <section>
          <h1>Pagamento</h1>

          <label htmlFor="name">Nome do portador do cartão</label>
          <input
            type="text"
            id="name"
            name="name"
            maxLength="30"
            placeholder="Insira o nome do portador do cartão"
            onChange={(e) => {
              setNome(e.target.value);
            }}
          />
          <label htmlFor="numero">Numero do Cartão</label>
          <input
            type="text"
            id="numero"
            name="numero"
            placeholder="Insira o numero do cartão"
            value={numero}
            maxLength="19" // Limita a 16 caracteres
            onChange={(e) => {
              handleNumero(e);
            }}
          />

          <div className={style.boxValidade}>
            <div>
              <label htmlFor="validade">Validade</label>
              <div>
                <input
                  type="text"
                  id="validade"
                  name="validade"
                  placeholder="MM"
                  maxLength="2"
                  value={validadeMM}
                  onChange={(e) => {
                    setValidadeMM(e.target.value.replace(/\D/g, ""));
                  }}
                />

                <input
                  type="text"
                  id="validade"
                  name="validade"
                  maxLength="2"
                  value={validadeAA}
                  placeholder="AA"
                  onChange={(e) => {
                    setValidadeAA(e.target.value.replace(/\D/g, ""));
                  }}
                />
              </div>
            </div>

            <div>
              <label htmlFor="cvc">CVC</label>
              <input
                type="text"
                id="cvc"
                value={cvc}
                maxLength="3"
                name="cvc"
                placeholder="Insira o CVC do cartão"
                onChange={(e) => {
                  setCvc(e.target.value.replace(/\D/g, ""));
                }}
              />
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
