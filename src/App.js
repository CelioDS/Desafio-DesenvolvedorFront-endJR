import "./App.css";
import Header from "./components/layout/Header-first";
import Footer from "./components/layout/Footer";
import HeaderSegundo from "./components/layout/Header-segundo";
import HeaderTerceiro from "./components/layout/Header-terceiro";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <HeaderSegundo />
      <HeaderTerceiro />
      <Outlet />
      <Footer/>
    </div>
  );
}

export default App;
