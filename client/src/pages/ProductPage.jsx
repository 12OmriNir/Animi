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
  }

  render() {
    const product = {
      id: 1,
      name: "asdfadsf",
      title: "Title",
      description: "Description",
      price: "49.99", // $
      category: "Doll",
      inStock: false,
      imageUrl: "",
    };

    console.log(this.props.params.id);

    // =============== //
    // Product InStock //
    // =============== //
    let productInStock;
    if (product.inStock == null || !product.inStock) {
      productInStock = <span style={{ color: "red" }}>Not In Stock</span>;
    }
    // =============== //

    // ===================== //
    // Product Title Display //
    // ===================== //
    let productTitle = "";
    if (product.title == null || product.title === "") {
      productTitle = "Product Not Found";
    } else {
      productTitle = product.title;
    }
    // ===================== //

    // ===================== //
    // Product Image Display //
    // ===================== //
    let productImage;
    if (product.imageUrl == null || product.imageUrl === "") {
      productImage = (
        <ProductNotFoundImage className="card-img-top mb-5 mb-md-0" />
      );
    } else {
      productImage = (
        <Image
          src={""}
          alt={"Product Image"}
          className="card-img-top mb-5 mb-md-0"
        />
      );
    }

    return (
      <div className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6 border rounded">{productImage}</div>
            <div className="col-md-6">
              <h1 className="display-5 fw-bolder" style={{ textAlign: "left" }}>
                {productTitle}
              </h1>
              <div style={{ textAlign: "left" }}>{productInStock}</div>
              <div className="fs-5 mb-5" style={{ textAlign: "left" }}>
                <span className="text-decoration-line-through">
                  ${Math.round(product.price * 1.15 * 100) / 100}
                </span>
                <span> </span>
                <span>${product.price}</span>
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
                  <div className="buttonsContainer">
                    <Link to={"/purchases"}>
                      <button
                        className="btn btn-danger flex-shrink-0"
                        type="button"
                        onClick={() => {}}
                      >
                        <i className="bi-cart-fill me-1"></i>
                        Buy Now
                      </button>
                    </Link>
                    <span> </span>
                    <Link to={"/pageNotFound"}>
                      <button
                        className="btn btn-danger flex-shrink-0"
                        style={{ display: "inline-block" }}
                        type="button"
                        onClick={() => {}}
                      >
                        <i className="bi-cart-fill me-1"></i>
                        Add to cart
                      </button>
                    </Link>
                  </div>
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
