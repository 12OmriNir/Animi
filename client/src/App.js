import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import About from "./pages/About";
import MyPurchases from "./pages/MyPurcheses/MyPurchases";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/purchases" element={<MyPurchases />} />
      </Routes>

      <Footer />
    </div>
  );
}
