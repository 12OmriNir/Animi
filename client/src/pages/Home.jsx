import React, { Component } from "react";
import ProductsList from "../components/ProductsList";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.setState({
      products: products //Get from the server
    });
  }

  render() {
    const { products } = this.state;
    return (
      <div className="container-fluid row">
        <div className="col-9 row">
          <ProductsList products={products} />
        </div>
        <div className="col-3 row"/>
      </div>
    );
  }
}

const products = [
  {
    id: "1",
    productName: "doll12",
    title: "Chibi Eren Yegar",
    description: "height: 14cm",
    inStock: true,
    imgUrl:
      "https://animeshop.co.il/wp-content/uploads/2022/07/5ede66f3-6c55-4e4b-a9c9-73c38fc27586.jpg",
    price: 30,
    category: "Figure",
  },

  {
    id: "2",
    productName: "doll22",
    title: "Chibi Eren Yegar",
    description: "height: 14cm",
    inStock: true,
    imgUrl:
      "https://animeshop.co.il/wp-content/uploads/2022/07/5ede66f3-6c55-4e4b-a9c9-73c38fc27586.jpg",
    price: 30,
    category: "Figure",
  },

  {
    id: "3",
    productName: "doll32",
    title: "Chibi Eren Yegar",
    description: "height: 14cm",
    inStock: true,
    imgUrl:
      "https://animeshop.co.il/wp-content/uploads/2022/07/5ede66f3-6c55-4e4b-a9c9-73c38fc27586.jpg",
    price: 30,
    category: "Figure",
  },

  {
    id: "4",
    productName: "doll42",
    title: "Chibi Eren Yegar",
    description: "height: 14cm",
    inStock: true,
    imgUrl:
      "https://animeshop.co.il/wp-content/uploads/2022/07/5ede66f3-6c55-4e4b-a9c9-73c38fc27586.jpg",
    price: 30,
    category: "Figure",
  },

  {
    id: "5",
    productName: "doll42",
    title: "Chibi Eren Yegar",
    description: "height: 14cm",
    inStock: true,
    imgUrl:
      "https://animeshop.co.il/wp-content/uploads/2022/07/5ede66f3-6c55-4e4b-a9c9-73c38fc27586.jpg",
    price: 30,
    category: "Figure",
  },

  {
    id: "6",
    productName: "doll42",
    title: "Chibi Eren Yegar",
    description: "height: 14cm",
    inStock: true,
    imgUrl:
      "https://animeshop.co.il/wp-content/uploads/2022/07/5ede66f3-6c55-4e4b-a9c9-73c38fc27586.jpg",
    price: 30,
    category: "Figure",
  },

  {
    id: "7",
    productName: "doll42",
    title: "Chibi Eren Yegar",
    description: "height: 14cm",
    inStock: true,
    imgUrl:
      "https://animeshop.co.il/wp-content/uploads/2022/07/5ede66f3-6c55-4e4b-a9c9-73c38fc27586.jpg",
    price: 30,
    category: "Figure",
  },

  {
    id: "8",
    productName: "doll42",
    title: "Chibi Eren Yegar",
    description: "height: 14cm",
    inStock: true,
    imgUrl:
      "https://animeshop.co.il/wp-content/uploads/2022/07/5ede66f3-6c55-4e4b-a9c9-73c38fc27586.jpg",
    price: 30,
    category: "Figure",
  },
  {
    id: "5",
    productName: "doll42",
    title: "Chibi Eren Yegar",
    description: "height: 14cm",
    inStock: true,
    imgUrl:
      "https://animeshop.co.il/wp-content/uploads/2022/07/5ede66f3-6c55-4e4b-a9c9-73c38fc27586.jpg",
    price: 30,
    category: "Figure",
  },
  {
    id: "5",
    productName: "doll42",
    title: "Chibi Eren Yegar",
    description: "height: 14cm",
    inStock: true,
    imgUrl:
      "https://animeshop.co.il/wp-content/uploads/2022/07/5ede66f3-6c55-4e4b-a9c9-73c38fc27586.jpg",
    price: 30,
    category: "Figure",
  },
  {
    id: "5",
    productName: "doll42",
    title: "Chibi Eren Yegar",
    description: "height: 14cm",
    inStock: true,
    imgUrl:
      "https://animeshop.co.il/wp-content/uploads/2022/07/5ede66f3-6c55-4e4b-a9c9-73c38fc27586.jpg",
    price: 30,
    category: "Figure",
  },
  {
    id: "5",
    productName: "doll42",
    title: "Chibi Eren Yegar",
    description: "height: 14cm",
    inStock: true,
    imgUrl:
      "https://animeshop.co.il/wp-content/uploads/2022/07/5ede66f3-6c55-4e4b-a9c9-73c38fc27586.jpg",
    price: 30,
    category: "Figure",
  },
  {
    id: "5",
    productName: "doll42",
    title: "Chibi Eren Yegar",
    description: "height: 14cm",
    inStock: true,
    imgUrl:
      "https://animeshop.co.il/wp-content/uploads/2022/07/5ede66f3-6c55-4e4b-a9c9-73c38fc27586.jpg",
    price: 30,
    category: "Figure",
  },
  {
    id: "5",
    productName: "doll42",
    title: "Chibi Eren Yegar",
    description: "height: 14cm",
    inStock: true,
    imgUrl:
      "https://animeshop.co.il/wp-content/uploads/2022/07/5ede66f3-6c55-4e4b-a9c9-73c38fc27586.jpg",
    price: 30,
    category: "Figure",
  },
  {
    id: "5",
    productName: "doll42",
    title: "Chibi Eren Yegar",
    description: "height: 14cm",
    inStock: true,
    imgUrl:
      "https://animeshop.co.il/wp-content/uploads/2022/07/5ede66f3-6c55-4e4b-a9c9-73c38fc27586.jpg",
    price: 30,
    category: "Figure",
  },
  {
    id: "5",
    productName: "doll42",
    title: "Chibi Eren Yegar",
    description: "height: 14cm",
    inStock: true,
    imgUrl:
      "https://animeshop.co.il/wp-content/uploads/2022/07/5ede66f3-6c55-4e4b-a9c9-73c38fc27586.jpg",
    price: 30,
    category: "Figure",
  },
  {
    id: "5",
    productName: "doll42",
    title: "Chibi Eren Yegar",
    description: "height: 14cm",
    inStock: true,
    imgUrl:
      "https://animeshop.co.il/wp-content/uploads/2022/07/5ede66f3-6c55-4e4b-a9c9-73c38fc27586.jpg",
    price: 30,
    category: "Figure",
  },
  {
    id: "5",
    productName: "doll42",
    title: "Chibi Eren Yegar",
    description: "height: 14cm",
    inStock: true,
    imgUrl:
      "https://animeshop.co.il/wp-content/uploads/2022/07/5ede66f3-6c55-4e4b-a9c9-73c38fc27586.jpg",
    price: 30,
    category: "Figure",
  },
  {
    id: "5",
    productName: "doll42",
    title: "Chibi Eren Yegar",
    description: "height: 14cm",
    inStock: true,
    imgUrl:
      "https://animeshop.co.il/wp-content/uploads/2022/07/5ede66f3-6c55-4e4b-a9c9-73c38fc27586.jpg",
    price: 30,
    category: "Figure",
  },
  {
    id: "5",
    productName: "doll42",
    title: "Chibi Eren Yegar",
    description: "height: 14cm",
    inStock: true,
    imgUrl:
      "https://animeshop.co.il/wp-content/uploads/2022/07/5ede66f3-6c55-4e4b-a9c9-73c38fc27586.jpg",
    price: 30,
    category: "Figure",
  },
];