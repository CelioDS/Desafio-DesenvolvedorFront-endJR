import "./App.css";
import Header from "./components/layout/Menu";
import Footer from "./components/layout/Footer";

import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
