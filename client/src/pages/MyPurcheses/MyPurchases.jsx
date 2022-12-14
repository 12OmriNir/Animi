import { Component } from "react";
import { Link } from "react-router-dom";
import "./MyPurchases.css";
import { FaRegWindowClose, FaPlus, FaMinus } from "react-icons/fa";
import * as cart from "../../utils/cartManagement";
import { getProductById } from "../../services/productList";

export default class MyPurchases extends Component {
  state = {
    cartId: "",
    lineItems: [],
    products: [],
  };

  componentDidMount() {
    const id = generateId();
    this.setState({
      cartId: id,
    });
    this.updateCart();
  }

  updateCart = () => {
    const cartItems = cart.loadFromLocalStorage();
    let products = [];
    if (cartItems.length > 0) {
      cartItems.forEach((cartItem) => {
        getProductById(cartItem.productId).then((product) => {
          products.push(product);
          this.setState({
            lineItems: cartItems,
            products: products
          });
        });
      });
    } else {
      this.setState({
        lineItems: [],
        products: []
      });
    }
  };

  removeProduct = (id) => {
    cart.removeItemFromProductsArray(id);
    this.updateCart();
  };

  addProductQuantity = (id, num) => {
    cart.addQuantityToExistProduct(id, num);
    this.updateCart();
  };

  clearProductsInCart = () => {
    cart.emptyCart();
    this.updateCart();
  };

  render() {
    const { cartId, lineItems, products } = this.state;
    return (
      <div>
        <div className="text-center fixed" id="cart_header">
          <div>
            <div className="col col-lg-12 col-xl-12 col-sm-12 col-xs-12">
              <h1>My Purchases</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="card">
            <div className="card-header">
              <h6 className="title-products">
                You have {cart.productsAmountInCart()}{" "}
                {cart.productsAmountInCart() === 1 ? "item" : "items"} in your
                shopping cart.
              </h6>
              <div className="float-right extra-padding">
                <button className="btn btn-danger btn-clear" onClick={() => this.clearProductsInCart()}>Clear</button>
              </div>
            </div>
            {lineItems.map((cartItem) => (
                <div className="product-body" key={cartItem.productId}>
                  <div className="info">
                    <ol>
                      <div className="product-item-photo">
                        <img
                          className="product-image-photo"
                          src={getProductItem(
                            "image_url",
                            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Question_mark.svg/1170px-Question_mark.svg.png",
                            cartItem.productId,
                            products
                          )}
                          alt="product"
                        />
                        <a className="clean-link move-down">
                          {getProductItem(
                            "product_name",
                            "Loading...",
                            cartItem.productId,
                            products
                          )}
                        </a>
                        <a className="action delete remove_cart_item">
                          <FaRegWindowClose
                            style={{ width: "25px", height: "25px" }}
                            onClick={() =>
                              this.removeProduct(cartItem.productId)
                            }
                          />
                        </a>
                      </div>
                      <div className="product-item-details">
                        <div className="product-item-actions"></div>
                        <strong className="product-item-name"></strong>
                        <br />
                        <br />
                        <div className="product-amount-and-price">
                          <div className="row-line">
                            <div className="row amount-wrapper col-xs-12 col-lg-12 col-md-12 col-sm-12">
                              <div className="cart-item-amount-wrapper col-xs-12 col-lg-4 col-md-4 col-sm-4 col-sma-6">
                                <div className="text-align-left quantity-mover">
                                  <span className="quantity_text">
                                    Quantity:{" "}
                                  </span>
                                  <a className="qntCartChange">
                                    <FaMinus 
                                      onClick={() =>
                                        this.addProductQuantity(cartItem.productId, -1)
                                      }
                                    />
                                  </a>
                                  <span className="amount">
                                    {cartItem.quantity}
                                  </span>
                                  <a className="qntCartChange">
                                    <FaPlus
                                      onClick={() =>
                                        this.addProductQuantity(cartItem.productId, 1)
                                      }
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="price-wrapper col-xs-12 col-lg-4 col-md-4 col-sm-4 col-sma-12">
                                <span>Price of a single unit: </span>
                                <span className="price">
                                  $
                                  {getProductItem(
                                    "price",
                                    0,
                                    cartItem.productId,
                                    products
                                  )}
                                </span>
                              </div>
                              <div className="price-wrapper col-xs-12 col-lg-4 col-md-4 col-sm-4 col-sma-12">
                                <span>Overall Price: </span>
                                <span className="price">
                                  $
                                  {getProductItem(
                                    "price",
                                    0,
                                    cartItem.productId,
                                    products
                                  ) * cartItem.quantity}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ol>
                  </div>
              </div>
            ))}
            <div className="product-body payment">
              <div className="row-line col-xs-12 col-lg-12 col-md-12 col-sm-12 payment">
                <div className="price-wrapper  col-md-4 col-sm-4 col-sma-12">
                  <h5>
                    Total Price Without Tax: $
                    {(getTotalPrice(lineItems, products) * 0.9).toFixed(2)}
                  </h5>
                </div>
                <div className="price-wrapper  col-md-4 col-sm-4 col-sma-12">
                  <h5>Taxes: ${(getTotalPrice(lineItems, products) * 0.1).toFixed(2)}</h5>
                </div>
                <div className="price-wrapper  col-md-4 col-sm-4 col-sma-12">
                  <h4>Total Price: ${getTotalPrice(lineItems, products).toFixed(2)}</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-btn move-to-center">
            <Link to={"/checkout"} className="grid">
              <button className="btn btn-danger">
                Continue to checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateId = (limit = 20) => {
  let newId = "";
  const list = "abcdefghijklmnopqrstuvwxyz_-?1234567890";
  const chooseCase = Math.random();
  for (let i = 0; i < limit; i++) {
    const randIndex = getRandomInt(0, list.length - 1);
    const randomSymbol = list.charAt(randIndex);
    const finalizedSymbol =
      chooseCase === 0
        ? randomSymbol.toUpperCase()
        : randomSymbol.toLowerCase();
    newId = newId.concat(finalizedSymbol);
  }
  return newId;
};

const getProductItem = (item, replacement, id, products) => {
  return (products.length > 0
    ? products.find((product) => product.id === id) === undefined
      ? "..."
      : products.find((product) => product.id === id)[item]
    : replacement);
};

const getTotalPrice = (lineItems, products) => {
  let prices = [];
  lineItems.forEach((item) => {
    prices.push(
      getProductItem("price", 0, item.productId, products) * item.quantity
    );
  });
  return products.length > 0
    ? prices.reduce((prevPrice, currPrice) => prevPrice + currPrice, 0)
    : 0;
};
