import React, { Component } from "react";
import ProductsList from "../components/ProductsList";
import Filter from '../components/Filter';

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
      <div className="container-fluid row">
        <div className="col-9 row">
          <ProductsList products={products} />
        </div>
        <div className="col-3 row">
          <Filter filterProducts={this.filterProducts}/>
        </div>
      </div>
    );
  }
}

const products = [
  {
    id: "1",
    product_name: "Chibi Eren Yegar",
    description: "height: 14cm",
    inStock: true,
    imgUrl:
      "https://animeshop.co.il/wp-content/uploads/2022/07/5ede66f3-6c55-4e4b-a9c9-73c38fc27586.jpg",
    price: 30,
    category: "Figure",
  },

  {
    id: "2",
    product_name: "Chibi Eren Yegar",
    description: "height: 14cm",
    inStock: true,
    imgUrl:
      "https://animeshop.co.il/wp-content/uploads/2022/07/5ede66f3-6c55-4e4b-a9c9-73c38fc27586.jpg",
    price: 30,
    category: "Figure",
  },

  {
    id: "3",
    product_name: "Chibi Eren Yegar",
    description: "height: 14cm",
    inStock: false,
    imgUrl:
      "https://animeshop.co.il/wp-content/uploads/2022/07/5ede66f3-6c55-4e4b-a9c9-73c38fc27586.jpg",
    price: 30,
    category: "Figure",
  },

  {
    id: "4",
    product_name: "Chibi Eren Yegar",
    description: "height: 14cm",
    inStock: true,
    imgUrl:
      "https://animeshop.co.il/wp-content/uploads/2022/07/5ede66f3-6c55-4e4b-a9c9-73c38fc27586.jpg",
    price: 30,
    category: "Figure",
  },

  {
    id: "5",
    product_name: "Chibi Eren Yegar",
    description: "height: 14cm",
    inStock: true,
    imgUrl:
      "https://animeshop.co.il/wp-content/uploads/2022/07/5ede66f3-6c55-4e4b-a9c9-73c38fc27586.jpg",
    price: 30,
    category: "Figure",
  },

  {
    id: "6",
    product_name: "Chibi Eren Yegar",
    description: "height: 14cm",
    inStock: true,
    imgUrl:
      "https://animeshop.co.il/wp-content/uploads/2022/07/5ede66f3-6c55-4e4b-a9c9-73c38fc27586.jpg",
    price: 30,
    category: "Figure",
  },

  {
    id: "7",
    product_name: "Chibi Eren Yegar",
    description: "height: 14cm",
    inStock: true,
    imgUrl:
      "https://animeshop.co.il/wp-content/uploads/2022/07/5ede66f3-6c55-4e4b-a9c9-73c38fc27586.jpg",
    price: 30,
    category: "Figure",
  },

  {
    id: "8",
    product_name: "Chibi Eren Yegar",
    description: "height: 14cm",
    inStock: true,
    imgUrl:
      "https://animeshop.co.il/wp-content/uploads/2022/07/5ede66f3-6c55-4e4b-a9c9-73c38fc27586.jpg",
    price: 30,
    category: "Figure",
  },
  {
    id: "9",
    product_name: "Chibi Eren Yegar",
    description: "height: 14cm",
    inStock: false,
    imgUrl:
      "https://animeshop.co.il/wp-content/uploads/2022/07/5ede66f3-6c55-4e4b-a9c9-73c38fc27586.jpg",
    price: 30,
    category: "Figure",
  },
  {
    id: "10",
    product_name: "Chibi Eren Yegar",
    description: "height: 14cm",
    inStock: true,
    imgUrl:
      "https://animeshop.co.il/wp-content/uploads/2022/07/5ede66f3-6c55-4e4b-a9c9-73c38fc27586.jpg",
    price: 30,
    category: "Figure",
  },
  {
    id: "11",
    product_name: "Chibi Eren Yegar",
    description: "height: 14cm",
    inStock: true,
    imgUrl:
      "https://animeshop.co.il/wp-content/uploads/2022/07/5ede66f3-6c55-4e4b-a9c9-73c38fc27586.jpg",
    price: 30,
    category: "Figure",
  },
  {
    id: "12",
    product_name: "Chibi Eren Yegar",
    description: "height: 14cm",
    inStock: true,
    imgUrl:
      "https://animeshop.co.il/wp-content/uploads/2022/07/5ede66f3-6c55-4e4b-a9c9-73c38fc27586.jpg",
    price: 30,
    category: "Figure",
  },
  {
    id: "13",
    product_name: "Chibi Eren Yegar",
    description: "height: 14cm",
    inStock: true,
    imgUrl:
      "https://animeshop.co.il/wp-content/uploads/2022/07/5ede66f3-6c55-4e4b-a9c9-73c38fc27586.jpg",
    price: 30,
    category: "Figure",
  },
  {
    id: "14",
    product_name: "Chibi Eren Yegar",
    description: "height: 14cm",
    inStock: true,
    imgUrl:
      "https://animeshop.co.il/wp-content/uploads/2022/07/5ede66f3-6c55-4e4b-a9c9-73c38fc27586.jpg",
    price: 30,
    category: "Figure",
  },
  {
    id: "15",
    product_name: "Chibi Eren Yegar",
    description: "height: 14cm",
    inStock: true,
    imgUrl:
      "https://animeshop.co.il/wp-content/uploads/2022/07/5ede66f3-6c55-4e4b-a9c9-73c38fc27586.jpg",
    price: 30,
    category: "Figure",
  },
  {
    id: "16",
    product_name: "Chibi Eren Yegar",
    description: "height: 14cm",
    inStock: true,
    imgUrl:
      "https://animeshop.co.il/wp-content/uploads/2022/07/5ede66f3-6c55-4e4b-a9c9-73c38fc27586.jpg",
    price: 30,
    category: "Figure",
  },
  {
    id: "17",
    product_name: "Chibi Eren Yegar",
    description: "height: 14cm",
    inStock: true,
    imgUrl:
      "https://animeshop.co.il/wp-content/uploads/2022/07/5ede66f3-6c55-4e4b-a9c9-73c38fc27586.jpg",
    price: 30,
    category: "Figure",
  },
  {
    id: "18",
    product_name: "Chibi Eren Yegar",
    description: "height: 14cm",
    inStock: true,
    imgUrl:
      "https://animeshop.co.il/wp-content/uploads/2022/07/5ede66f3-6c55-4e4b-a9c9-73c38fc27586.jpg",
    price: 30,
    category: "Figure",
  },
  {
    id: "19",
    product_name: "Chibi Eren Yegar",
    description: "height: 14cm",
    inStock: true,
    imgUrl:
      "https://animeshop.co.il/wp-content/uploads/2022/07/5ede66f3-6c55-4e4b-a9c9-73c38fc27586.jpg",
    price: 30,
    category: "Figure",
  },
  {
    id: "20",
    product_name: "Chibi Eren Yegar",
    description: "height: 14cm",
    inStock: true,
    imgUrl:
      "https://animeshop.co.il/wp-content/uploads/2022/07/5ede66f3-6c55-4e4b-a9c9-73c38fc27586.jpg",
    price: 30,
    category: "Figure",
  },
];
