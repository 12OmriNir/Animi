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
    products: []
  };

  componentDidMount() {
    const id = generateId();
    this.setState({
      cartId: id
    });
    this.updateCart();
  }

  updateCart = () => {
    const cartItems = cart.loadFromLocalStorage();
    let products = [];
    cartItems.forEach((cartItem) => {
      getProductById(cartItem.productId).then((product) => {
        products.push(product);
        this.setState({
          lineItems: cartItems,
          products: products
        });
      })
    });
  }

  removeProduct = (id) => {
    cart.removeItemFromProductsArray(id);
    this.updateCart();
  };

  addProductQuantity = (id, num) => {
    cart.addQuantityToExistProduct(id, num);
    this.updateCart();
  };

  render() {
    const { cartId, lineItems, products } = this.state;
    return (
      <div>
        <div className="text-center fixed" id="cart_header">
          <div>
            <div className="col col-lg-12 col-xl-12 col-sm-12 col-xs-12">
              <h1>Your Shopping Cart</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="card">
            <div className="card-header">
              <h6 className="title-products">
                You have {cart.productsAmountInCart()} {cart.productsAmountInCart() === 1 ? "item" : "items"} in your shopping cart.
              </h6>
              <div className="float-right extra-padding">
                <button className="btn btn-danger btn-clear">Clear</button>
              </div>
            </div>
            {lineItems.map((cartItem) => (
              <div key={cartItem.productId}>
                <div className="product-body">
                  <div className="info">
                    <ol>
                      <a
                        className="product-item-photo"
                        href="//ksp.co.il/?uin=93667"
                        title="dweffef"
                      >
                        <img
                          className="product-image-photo"
                          src={getProductItem("image_url", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Question_mark.svg/1170px-Question_mark.svg.png", cartItem.productId, products)}
                          alt="photo"
                        />
                      </a>
                      <a className="clean-link" href="">
                        <strong>{getProductItem("product_name", "Loading...", cartItem.productId, products)}</strong>
                      </a>
                      <a className="action delete remove_cart_item">
                        <FaRegWindowClose
                          style={{ width: "25px", height: "25px" }}
                          onClick={() => this.removeProduct(cartItem.productId)}
                        />
                      </a>
                      <div className="product-item-details">
                        <div className="product-item-actions"></div>
                        <strong className="product-item-name"></strong>
                        <br />
                        <br />
                        <div className="product-amount-and-price">
                          <div className="row">
                            <div className="row amount-wrapper col-xs-12 col-lg-12 col-md-12 col-sm-12">
                              <div className="cartItemAmount_wrapper col-xs-12 col-lg-4 col-md-4 col-sm-4 col-sma-6">
                                <div className="cartItemAmount_wrapper col-xs-12 col-lg-6 col-md-6 col-sm-6 col-sma-6">
                                  <span className="quantity_text">Quantity: </span>
                                  <a className="qntCartChange">
                                    <FaMinus />
                                  </a>
                                  <span className="amount">{cartItem.quantity}</span>
                                  <a className="qntCartChange">
                                    <FaPlus />
                                  </a>
                                </div>
                              </div>
                              <div className="price-wrapper col-xs-12 col-lg-4 col-md-4 col-sm-4 col-sma-12  text-align-left ">
                                <span>Price of a single unit: </span>
                                <span className="price">${getProductItem("price", 0, cartItem.productId, products)}</span>
                              </div>
                              <div className="price-wrapper col-xs-12 col-lg-4 col-md-4 col-sm-4 col-sma-12  text-align-left ">
                                <span>Overall price: </span>
                                <span className="price">${getProductItem("price", 0, cartItem.productId, products)*cartItem.quantity}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ol>
                  </div>
                </div>
              </div>
            ))};
            
            <h4 className="col-xs-12 col-lg-9 col-md-1 col-sm-1 col-sma-12 text-align-right">
              Total Price: ${getTotalPrice(lineItems, products)}
            </h4>
          </div>
          <div className="bottom-btn move-to-center">
            <Link to={"/checkout"}>
              <button className="btn btn-danger grid">
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

const generateId = (limit = 20) => {
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
  return (products.length > 0 ? products.find((product) => product.id === id) === undefined ? "..." : products.find((product) => product.id === id)[item] : replacement)
}

const getTotalPrice = (lineItems, products) => {
  let prices = [];
  lineItems.forEach((item) => {
    prices.push(getProductItem("price", 0, item.productId, products) * item.quantity);
  });
  return (products.length > 0 ? prices.reduce((prevPrice, currPrice) => prevPrice + currPrice, 0) : 0);
};
