import { Component } from "react";
import { Link } from "react-router-dom";

export default class MyPurchases extends Component {
  state = {
    cartId: "",
    lineItems: [],
  };

  componentDidMount() {
    this.setState({
      cartId: generateId(),
      lineItems: getPurchasedProducts(),
    });
  }

  removeProduct = (id) => {
    this.setState({
      lineItems: this.state.lineItems.filter((item) => item.product.id !== id),
    });
  };

  addProductQuantity = (id, num) => {
    this.setState({
      lineItems: this.state.lineItems.map((item) => {
        if (item.product.id === id && !(item.quantity === 1 && num < 0)) {
          item.quantity += num;
        }
        return item;
      }),
    });
  };

  buyProducts = () => {
    alert("Thank you for buying at Animi!");
  };

  render() {
    const { cartId, lineItems } = this.state;
    return (
      <div className="container d-lg-flex gap-lg-3">
        <div className="col-3 row">
          <div className="card">
            <div className="card-body">
              <h1 style={{ fontSize: "100px" }} className="card-title">
                Total:
              </h1>

              <ul className="list-group list-group-flush">
                <h1 style={{ fontSize: "70px", color: "orange" }}>
                  ${getTotalPrice(lineItems)}
                </h1>
              </ul>
              <p />
              <Link to={`/`}>
                <button
                  style={{ fontSize: "25px" }}
                  type="button"
                  className="btn btn-secondary"
                >
                  Continue Shopping
                </button>
              </Link>
              <p />
              <Link to={`/`}>
                <button
                  style={{ fontSize: "25px", width: "240px" }}
                  type="button"
                  className="btn btn-success"
                  onClick={this.buyProducts}
                >
                  Buy
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-9 row">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">Cart:</h1>

              <ul className="list-group list-group-flush">
                <div
                  className="d-flex"
                  style={{ flexWrap: "wrap", gap: "30px" }}
                >
                  {lineItems.map((cartItem) => (
                    <div key={cartItem.product.id}>
                      <div className="card">
                        <div className="card-body">
                          <div
                            className="d-flex"
                            style={{ flexWrap: "nowrap", paddingLeft: "25px" }}
                          >
                            <img
                              alt="..."
                              src={
                                cartItem.product.image_url
                                }
                              style={{
                                width: "100px",
                                height: "100px",
                                objectFit: "cover",
                              }}
                            />
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() =>
                                this.removeProduct(cartItem.product.id)
                              }
                              style={{
                                height: "20px",
                                width: "20px",
                                paddingRight: "30px",
                                paddingBottom: "30px",
                              }}
                            >
                              🗑️
                            </button>
                          </div>
                          <h4>
                            {cartItem.product.product_name}
                          </h4>
                          <h4 style={{ color: "grey" }}>
                            ${cartItem.product.price}
                          </h4>
                          <div
                            className="d-flex"
                            style={{ justifyContent: "center", gap: "10px" }}
                          >
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() =>
                                this.addProductQuantity(cartItem.product.id, -1)
                              }
                              style={{ height: "30px", width: "30px" }}
                            >
                              -
                            </button>
                            <h4 style={{ color: "grey" }}>
                              x{cartItem.quantity}
                            </h4>
                            <button
                              type="button"
                              className="btn btn-success"
                              onClick={() =>
                                this.addProductQuantity(cartItem.product.id, 1)
                              }
                              style={{ height: "30px", width: "30px" }}
                            >
                              +
                            </button>
                          </div>
                          <h4 style={{ color: "orange" }}>
                            $
                            {cartItem.product.price *
                              cartItem.quantity}
                          </h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ul>
            </div>
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

const getTotalPrice = (items) => {
  let prices = [];
  items.forEach((item) => {
    const price = item.product.price;
    const quantity = item.quantity;
    prices.push(price * quantity);
  });
  return prices.reduce((prevPrice, currPrice) => prevPrice + currPrice, 0);
};

const getPurchasedProducts = () => {
    //
}