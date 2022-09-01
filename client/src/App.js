// ====== //
// App.js //
// ====== //

import "./App.css";
import Header from "./components/Header/Header";
import ProductPage from "./pages/ProductPage/ProductPage";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import MyPurcheses from "./pages/MyPurcheses/MyPurcheses";

import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/purcheses" element={<MyPurcheses />} />
      </Routes>
    </div>
  );
}
