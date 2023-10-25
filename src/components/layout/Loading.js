import loading from "../img/loading.svg";
import style from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={style.father}>
      <img className={style.loader} src={loading} alt="loading" />
    </div>
  );
}

Loading.defaultProps = {
  className: "loader", // A propriedade correta é "className"
};
