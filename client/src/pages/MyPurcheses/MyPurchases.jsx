import { Component } from "react";
import { Link } from "react-router-dom";
import "./MyPurchases.css";
import { FaRegWindowClose, FaPlus, FaMinus } from "react-icons/fa";

export default class MyPurchases extends Component {
  state = {
    cartId: "",
    lineItems: [],
  };

  //getPurchaseIds() -> //Will get the list of IDs that we have added to cart. (CLIENT)
  //getById() -> //Will get the product from its id. (DATABASE)

  componentDidMount() {
    const cartItems = getCartItems();
    this.setState({
      cartId: generateId(),
      lineItems: cartItems,
    });
  }

  removeProduct = (id) => {
    this.setState({
      lineItems: this.state.lineItems.filter((item) => item.productId !== id),
    });
  };

  addProductQuantity = (id, num) => {
    this.setState({
      lineItems: this.state.lineItems.map((item) => {
        if (item.productId === id && !(item.quantity === 1 && num < 0)) {
          item.quantity += num;
        }
        return item;
      }),
    });
  };

  render() {
    const { cartId, lineItems } = this.state;
    return (
      <div>
        <div className="text-center fixed" id="cart_header">
          <div>
            <div className="col col-lg-12 col-xl-12 col-sm-12 col-xs-12">
              <h1>עגלת הקניות שלכם</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="card">
            <div className="card-header">
              <h6 className="title-products">
                you have {} items in your shopping cart
              </h6>
              <div className="float-right extra-padding">
                <button className="btn btn-danger btn-clear">clear</button>
              </div>
            </div>
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
                      src="//ksp.co.il/shop/items/93667.jpg"
                      alt="photo"
                    />
                  </a>
                  <a className="clean-link" href="">
                    <strong>itemName here</strong>
                  </a>
                  <a className="action delete remove_cart_item">
                    <FaRegWindowClose
                      style={{ width: "25px", height: "25px" }}
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
                              <span className="amount">1</span>
                              <a className="qntCartChange">
                                <FaPlus />
                              </a>
                            </div>
                          </div>
                          <div className="price-wrapper col-xs-12 col-lg-4 col-md-4 col-sm-4 col-sma-12  text-align-left ">
                            <span>Price of a single unit: </span>
                            <span className="price">45.00 ₪</span>
                          </div>
                          <div className="price-wrapper col-xs-12 col-lg-4 col-md-4 col-sm-4 col-sma-12  text-align-left ">
                            <span>Overall price: </span>
                            <span className="price">45.00 ₪</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ol>
              </div>
            </div>
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
                      src="//ksp.co.il/shop/items/93667.jpg"
                      alt="photo"
                    />
                  </a>
                  <a className="clean-link" href="">
                    <strong>itemName here</strong>
                  </a>
                  <a className="action delete remove_cart_item">
                    <FaRegWindowClose
                      style={{ width: "25px", height: "25px" }}
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
                            <div class="cartItemAmount_wrapper col-xs-12 col-lg-6 col-md-6 col-sm-6 col-sma-6">
                              <span class="quantity_text">Quantity: </span>
                              <a class="qntCartChange">
                                <FaMinus />
                              </a>
                              <span className="amount">1</span>
                              <a class="qntCartChange">
                                <FaPlus />
                              </a>
                            </div>
                          </div>
                          <div className="price-wrapper col-xs-12 col-lg-4 col-md-4 col-sm-4 col-sma-12  text-align-left ">
                            <span>Price of a single unit: </span>
                            <span className="price">45.00 ₪</span>
                          </div>
                          <div className="price-wrapper col-xs-12 col-lg-4 col-md-4 col-sm-4 col-sma-12  text-align-left ">
                            <span>Overall price: </span>
                            <span className="price">45.00 ₪</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4 className="col-xs-12 col-lg-9 col-md-1 col-sm-1 col-sma-12 text-align-right">
                    Total Price:{" "}
                  </h4>
                </ol>
              </div>
            </div>
          </div>
          <div className="bottom-btn move-to-center">
            <button className="btn btn-danger grid">
              Continue to checkout
            </button>
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

const getCartItems = () => {
  const ids = getPurchaseIds();
  let cartItems = [];
  ids.forEach((id) => {
    if (cartItems.includes(id)) {
      cartItems.map((cartItem) => {
        if (cartItem.productId === id) {
          cartItem.quantity++;
        }
        return cartItem;
      });
    } else {
      const newCartProduct = {
        productId: id,
        quantity: 1,
      };
      cartItems.push(newCartProduct);
    }
  });
  return cartItems;
};

const getTotalPrice = (items) => {
  let prices = [];
  items.forEach((item) => {
    prices.push(getById(item.productId).price * item.quantity);
  });
  return prices.reduce((prevPrice, currPrice) => prevPrice + currPrice, 0);
};

//ONLY FOR EXAMPLE:
//---------------

const getPurchaseIds = () => {
  return idsList;
};

const getById = (id) => {
  return exampleList.find((product) => product.id === id);
};

const idsList = ["35-2384jktr-243", "g5340987jg345890g"];

//---------------

const exampleList = [
  {
    id: "35-2384jktr-243",
    product_name: "Something1",
    description: "First description.",
    price: 59,
    is_in_stock: true,
    character: "ACharacter",
    origin: "An origin",
    category: "Toy",
    image_url:
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Walter_White_S5B.png/220px-Walter_White_S5B.png",
  },
  {
    id: "g5340987jg345890g",
    product_name: "Something2",
    description: "Second description.",
    price: 28,
    is_in_stock: false,
    character: "ACharacter",
    origin: "An origin",
    category: "Toy",
    image_url: "https://i.insider.com/5dade9bc045a3139e8686c33?width=700",
  },
];
