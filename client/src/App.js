import { Component, useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import About from "./pages/About";
import MyPurchases from "./pages/MyPurcheses/MyPurchases";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import { getProducts } from "./services/productList";


const initialFilters = {
  name: '',
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
      products : []
    }
  }

  componentDidMount = () => {
    this.loadProducts(initialFilters)
  }

  loadProducts = async(filters) => {
    console.log(filters)
    let products = await getProducts(filters);
    console.log(products)
    let newState = { ...this.state };
    newState.products = products;
    this.setState(newState);
  }
  render () {
    return (
      <div className="App">
        <Header loadProducts = {this.loadProducts}/>
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
