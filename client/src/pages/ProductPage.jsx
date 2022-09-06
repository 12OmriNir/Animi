import React, { Component } from "react";
import withRouter from "../utils/withRouter";
import { Link } from "react-router-dom";
import Image from "../components/Image";
import ProductNotFoundImage from "../components/ProductNotFoundImage";
import { getProductById } from "../services/productList";
import * as cartManagement from "../utils/cartManagement";

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
    // 4. Render the page with the appropriate parameters.

    getProductById(this.props.params.id).then((product) => {
      this.setState({ product });
    });
  }

  render() {

    const product =
    {
      id:          this.state.product.id,
      name:        this.state.product.product_name,
      title:       this.state.product.product_name,
      description: this.state.product.description,
      price:       this.state.product.price, // $
      category:    this.state.product.category,
      inStock:     this.state.product.is_in_stock,
      imageUrl:    this.state.product.image_url,
    };

    // Product InStock //
    let productInStock;
    if (product.inStock == null || !product.inStock) {
      productInStock = <span style={{ color: "red" }}>Not In Stock</span>;
    }

    // Product Title Display //
    let productTitle = "";
    if (product.title == null || product.title === "") {
      productTitle = "Product Not Found";
    } else {
      productTitle = product.title;
    }

    // productDescription //
    let productDescription;
    if (product == null || product.description === "") {
      productDescription = "Product Not Found";
    } else {
      productDescription = product.description;
    }

    // Product Image Display //
    let productImage;
    if (product.imageUrl == null || product.imageUrl === "") {
      productImage = (
        <ProductNotFoundImage className="card-img-top mb-5 mb-md-0" />
      );
    } else {
      productImage = (
        <Image
          src={product.imageUrl}
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
              <p className="lead">{productDescription}</p>

              <div className="d-flex">
                <form>
                  <div className="buttonsContainer">
                    <Link to={"/checkout"}>
                      <button
                        className="btn btn-danger flex-shrink-0"
                        type="button"
                        onClick={() => { this.buyNow(this.state.product) }}
                      >
                        <i className="bi-cart-fill me-1"></i>
                        Buy Now
                      </button>
                    </Link>
                    <span> </span>
                    <Link to={"/purchases"}>
                      <button
                        className="btn btn-danger flex-shrink-0"
                        style={{ display: "inline-block" }}
                        type="button"
                        onClick={() => { this.addToCart(this.state.product) }}
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

  buyNow(product)
  {
      cartManagement.addProductToCart(product.id);
  }

  addToCart(product)
  { 
      cartManagement.addProductToCart(product.id);
  }
}

export default withRouter(ProductPage);