import React, { Component } from "react";
import ProductsList from "../components/ProductsList";

import * as test from "../services/productList"


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
  this.loadTodosFromServer();
};




  render() {
    const { products } = this.state;
    return (
      <div className="container">
        <aside className="set-to-side">
          <ProductsList products={products} />
          </aside>
      </div>
    );
  }
}

