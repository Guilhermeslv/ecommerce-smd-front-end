import { Homepage } from "./pages/Homepage"
import { Cart } from "./pages/Cart";
import { Product } from "./pages/Product"

import { Header } from "./components/Header";

import "./styles/global.css"

import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
        <Header 
            title="Ecommerce SMD"
          />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/carrinho" element={<Cart />} />
          <Route path="/produto" element={<Product />} />
        </Routes>
    </BrowserRouter>
       
  );
}

export default App;
