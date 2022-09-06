import { Component } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import About from "./pages/About";
import MyPurchases from "./pages/MyPurcheses/MyPurchases";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import { getProducts } from "./services/productList";
import Home from "./pages/Home";
import { clearCart } from "./utils/cartManagement" // To clear the localStorage at the first load.

const initialFilters = {
  category : '',
  origin : '',
  character : '',
  minPrice : 0,
  maxPrice : 1000
}

export default class App extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      products : [],
      productsToRender:[]
    }
  }


filterProductsByPageNum =()=>{}

  componentDidMount = () => {
    clearCart(); // To clear the localStorage at the first load.
    this.loadProducts(initialFilters);
  }

  loadProducts = async(filters) => {
    let products = await getProducts(filters);
    let newState = { ...this.state };
    newState.products = products;
    this.setState(newState);
  }
  render () {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home products={this.state.products} loadProducts = {this.loadProducts}/>} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/purchases" element={<MyPurchases />} />
        </Routes>
  
        <Footer />
      </div>
    );
  }
  
}
