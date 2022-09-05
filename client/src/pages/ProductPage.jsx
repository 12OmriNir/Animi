import React, { Component } from "react";
import withRouter from "../utils/withRouter";
import { Link } from "react-router-dom";
import Image from "../components/Image";
import ProductNotFoundImage from "../components/ProductNotFoundImage";
import { getProductById } from "../services/productList";

class ProductPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    // 1. Get the id from the URL.
    // 2. Check if the product with that id exist.
    // 3. Get the product from the database.
    // 4. Render the page with the appropritate parameters.

    getProductById(this.props.params.id).then((product) => {
      console.log(product);
    }); //'0XEkxBv6P'

    /*
    const product = {
      id: 1,
      name: "asdfadsf",
      title: "Title",
      description: "Description",
      price: "₪49.99",
      category: "Doll",
      inStock: true,
      imageUrl: "",
    };
    */

    /*
    let newState = [...this.state];
    newState.product = product;
    this.setState(newState);
    */
  }

  render() {
    /*
    const { products, params } = this.props;
    const { id, name, title, description, price, category, inStock, imageUrl } =
      products[0];

    console.log(
      id + name + title + description + price + category + inStock + imageUrl
    );

    console.log(this.props);
    */

    //const product = this.state.product;

    const product = {
      id: 1,
      name: "asdfadsf",
      title: "Title",
      description: "Description",
      price: "49.99", // ₪
      category: "Doll",
      inStock: true,
      imageUrl: "",
    };

    console.log(this.props.params.id);
    //console.log(this.state.product);

    return (
      <div className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6 border rounded">
              <Image src={""} alt={""} className="card-img-top mb-5 mb-md-0" />
              <ProductNotFoundImage className="card-img-top mb-5 mb-md-0" />
            </div>
            <div className="col-md-6">
              <h1 className="display-5 fw-bolder">{product.title}</h1>
              <div className="fs-5 mb-5">
                <span className="text-decoration-line-through">
                  ₪{product.price * 1.15}
                </span>
                <span>₪{product.price}</span>
              </div>
              <p className="lead">
                Description description description description description
                description description description description description
                description description description description description
                description description description description description
                description description description description description
                description description description description description
              </p>
              <div className="d-flex">
                <form>
                  <button
                    className="btn btn-outline-dark flex-shrink-0"
                    type="button"
                    onClick={() => {
                      alert("Add to cart was Clicked");
                    }}
                  >
                    <i className="bi-cart-fill me-1"></i>
                    Add to cart
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProductPage);
