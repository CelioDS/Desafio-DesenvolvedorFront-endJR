import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//paginas
import Error from "./components/layout/Error";
import Home from "./components/routes/Home";
import Carrinho from "./components/routes/Carrinho";

//1- configurando router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/Carrinho",
        element: <Carrinho />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
