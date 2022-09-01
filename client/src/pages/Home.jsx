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

const products = [
  {
    id: "zIaS3cpjU",
    name: "doll12",
    category: "Figure Chibi Eren Yegar",
    description: "height: 14cm",
    price: 30,
    is_in_stock: true,
    image_url:
      "https://animeshop.co.il/wp-content/uploads/2022/07/5ede66f3-6c55-4e4b-a9c9-73c38fc27586.jpg",
  },
  {
    id: "zcpjU",
    name: "doll12",
    category: "Figure Chibi Eren Yegar",
    description: "height: 14cm",
    price: 30,
    is_in_stock: true,
    image_url:
      "https://animeshop.co.il/wp-content/uploads/2022/07/5ede66f3-6c55-4e4b-a9c9-73c38fc27586.jpg",
  },
];
