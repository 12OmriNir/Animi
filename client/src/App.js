import { Component } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import About from "./pages/About";
import AddProduct from "./pages/AddProduct";
import MyPurchases from "./pages/MyPurcheses/MyPurchases";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import { getProducts, addProduct } from "./services/productList";
import Home from "./pages/Home";
const ADMIN_PASSWORD = "sC+8XQI=S4Ma-He{-VPtPtn-QEf+.&i0";

const initialFilters = {
  category: "",
  origin: "",
  character: "",
  minPrice: 0,
  maxPrice: 1000,
};

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      productsToRender: [],
      page: 1,
      isManagerOnline: false,
    };
  }

  onAdminLogin = () => {
    let login = prompt("please enter admin passwords to login");
    if (login === ADMIN_PASSWORD) {
      alert("you are now connected");
      this.setState({ isManagerOnline: true });
    }
  };

  onAdminDisconnect = () => {
    this.setState({ isManagerOnline: false });
  };

  addProduct = async (product) => {
    await addProduct(product);
    const newProducts = [...this.state.products];
    newProducts.push(product);
    this.setState({ products: newProducts });
  };

  managerLogin = async (event) => {
    const input = event.target.value;
    if (input === ADMIN_PASSWORD) {
      this.setState({ isManagerOnline: true });
    }
  };

  componentDidMount = async () => {
    this.loadProducts(initialFilters);
  };

  loadProducts = async (filters) => {
    let products = await getProducts(filters);
    let newState = { ...this.state };
    newState.products = products;
    this.setState(newState);
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                products={this.state.products}
                isManagerOnline={this.state.isManagerOnline}
                password={ADMIN_PASSWORD}
                loadProducts={this.loadProducts}
                filterProductsByPageNum={this.filterProductsByPageNum}
              />
            }
          />
          <Route
            path="/product/:id"
            element={
              <ProductPage isManagerOnline={this.state.isManagerOnline} />
            }
          />
          <Route
            path="/about"
            element={
              <About
                adminLogin={this.onAdminLogin}
                AdminDisconnect={this.onAdminDisconnect}
                isManagerOnline={this.state.isManagerOnline}
              />
            }
          />
          <Route path="/purchases" element={<MyPurchases />} />
          <Route
            path="/manager/:password/addProduct"
            element={<AddProduct productAdded={this.addProduct} />}
          />
        </Routes>

        <Footer />
      </div>
    );
  }
}
