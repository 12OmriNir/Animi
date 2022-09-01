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

  filterProducts = (nameFilter, titleFilter, descFilter, priceMinFilter, priceMaxFilter, inStockFilter, categoryFilter) => {
    console.log(nameFilter);
    console.log(titleFilter);
    console.log(descFilter);
    console.log(priceMinFilter);
    console.log(priceMaxFilter);
    console.log(inStockFilter);
    console.log(categoryFilter);
    this.setState({
      products: this.state.products.filter((product) => {
          const nameCheck = nameFilter ? nameFilter : product.productName;
          const titleCheck = titleFilter ? titleFilter : product.title;
          const descCheck = descFilter ? descFilter : product.description;
          const priceMinCheck = priceMinFilter ? priceMinFilter : product.price;
          const priceMaxCheck = priceMaxFilter ? priceMaxFilter : product.price;
          const inStockCheck = inStockFilter ? inStockFilter : product.inStock;
          const categoryCheck = categoryFilter ? categoryFilter : product.category;
          if ((product.productName.toUpperCase().includes(String(nameCheck).toUpperCase()))
          && (product.title.toUpperCase().includes(String(titleCheck).toUpperCase()))
          && (product.description.toUpperCase().includes(String(descCheck).toUpperCase()))
          && (product.price >= priceMinCheck)
          && (product.price <= priceMaxCheck)
          && (product.inStock === inStockCheck)
          && (product.category.toUpperCase().includes(String(categoryCheck).toUpperCase()))
          ) {
              return product;
          }
      })
    });
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
    inStock: false,
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
    id: "9",
    productName: "doll42",
    title: "Chibi Eren Yegar",
    description: "height: 14cm",
    inStock: false,
    imgUrl:
      "https://animeshop.co.il/wp-content/uploads/2022/07/5ede66f3-6c55-4e4b-a9c9-73c38fc27586.jpg",
    price: 30,
    category: "Figure",
  },
  {
    id: "10",
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
    id: "11",
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
    id: "12",
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
    id: "13",
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
    id: "14",
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
    id: "15",
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
    id: "16",
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
    id: "17",
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
    id: "18",
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
    id: "19",
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
    id: "20",
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
