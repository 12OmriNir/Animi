import React, { Component } from "react";
import ProductsList from "../components/ProductsList";
import Filter from "../components/Filter";

import * as test from "../services/productList"


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
    console.log(products)
    let newState = { ...this.state };
    newState.products = products;
    this.setState(newState);
};

componentDidMount = () => {
  this.loadTodosFromServer();
};




  filterProducts = (titleFilter, descFilter, priceMinFilter, priceMaxFilter, inStockFilter, categoryFilter) => {
      /*

      (leaving this commented because it will be filtered differently)

      let filteredProducts = this.state.products.filter((product) => {
      let titleCheck = titleFilter ? titleFilter : product.product_name;
      let descCheck = descFilter ? descFilter : product.description;
      let priceMinCheck = priceMinFilter ? priceMinFilter : product.price;
      let priceMaxCheck = priceMaxFilter ? priceMaxFilter : product.price;
      let inStockCheck = inStockFilter ? inStockFilter : product.inStock;
      let categoryCheck = categoryFilter ? categoryFilter : product.category;
      console.log(titleCheck);
      console.log(descCheck);
      console.log(priceMinCheck);
      console.log(priceMaxCheck);
      console.log(inStockCheck);
      console.log(categoryCheck);
      return ((product.product_name.toUpperCase().includes(String(titleCheck).toUpperCase()))
      && (product.description.toUpperCase().includes(String(descCheck).toUpperCase()))
      && (product.price >= priceMinCheck)
      && (product.price <= priceMaxCheck)
      && (product.inStock === inStockCheck)
      && (product.category.toUpperCase().includes(String(categoryCheck).toUpperCase()))
      )
    });
    this.setState({
      products: filteredProducts
    });
    */
  }

  render() {
    const { products } = this.state;
    return (
      <div className="container">
          <ProductsList products={products} />
          <Filter filterProducts={this.filterProducts}/>
        </div>
    );
  }
}