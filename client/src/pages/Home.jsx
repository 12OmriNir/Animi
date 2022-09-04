import React, { Component } from "react";
import ProductsList from "../components/ProductsList";
import Filter from "../components/Filter";

import * as test from "../services/productList";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  loadTodosFromServer = async () => {
    let products = await test.getProducts();
    let newState = { ...this.state };
    newState.products = products;
    this.setState(newState);
  };

  componentDidMount = () => {
    console.log("check");
    this.loadTodosFromServer();
  };

  render() {
    const { products } = this.state;
    return (
      <div className="container d-lg-flex gap-lg-3">
        <Filter filterProducts={this.filterProducts} />
        <ProductsList products={products} />
      </div>
    );
  }
}
