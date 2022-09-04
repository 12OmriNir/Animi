import React, { Component } from "react";
import ProductsList from "../components/ProductsList";
import Filter from "../components/Filter";

import * as test from "../services/productList";

let filters = {
  category : '',
  origin : '',
  character : '',
  minPrice : 0,
  maxPrice : 1000
}

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  loadTodosFromServer = async () => {
    let products = await test.getProducts(filters);
    let newState = { ...this.state };
    newState.products = products;
    this.setState(newState);
  };

  componentDidMount = () => {
    this.loadTodosFromServer();
  };

  filterProducts = (charFilter, originFilter, categoryFilter, priceMinFilter, priceMaxFilter) => {
    filters.character = charFilter;
    filters.origin = originFilter;
    filters.category = categoryFilter;
    filters.minPrice = priceMinFilter;
    filters.maxPrice = priceMaxFilter;
    this.loadTodosFromServer();
  }

  render() {
    const { products } = this.state;
    return (
      <div className="container d-lg-flex gap-lg-3">
        <Filter products={products} filterProducts={this.filterProducts} />
        <ProductsList products={products} />
      </div>
    );
  }
}
