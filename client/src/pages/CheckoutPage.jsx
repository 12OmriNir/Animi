import React, { Component } from "react";
import OrderPreview from "../components/OrderPreview";
import { getProductById } from "../services/productList";
import * as cart from "../utils/cartManagement";

class CheckoutPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: [],
      totalPrice : 0
    };
  }

  componentDidMount = () => {
    this.loadOrders();
  };

  loadOrders = () => {
    let orders = cart.loadFromLocalStorage();
    let newState = { ...this.state };
    newState.orders = orders;
    this.setState(newState);
  };

  render() {
    return (
      <div className="container row">
        <div className="col-8">
          <form>
            <h4 className="mb-3">Billing address</h4>
            <div className="row mb-3">
              <div className="col-6">
                <label>First Name</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-6">
                <label>Last Name</label>
                <input type="text" className="form-control" />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-12">
                <label>Email</label>
                <input type="text" className="form-control" />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-12">
                <label>Address</label>
                <input type="text" className="form-control" />
              </div>
            </div>

            <div className="custom-control custom-checkbox mb-3">
              <input type="checkbox" className="custom-control-input" />
              <label className="custom-control-label">
                Save Info for next time
              </label>
            </div>

            <h4 className="mb-3">Payment</h4>

            <div className="row mb-3">
              <div className="col-6">
                <label>Name on card</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-6">
                <label>Credit card number</label>
                <input type="text" className="form-control" />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-3">
                <label>Expiration</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-3">
                <label>CVV</label>
                <input type="text" className="form-control" />
              </div>
            </div>

            <button className="btn btn-danger btn-lg btn-block" type="submit">
              Continue to checkout
            </button>
          </form>
        </div>

        <div className="col-4 row card">
          <div className="card-title">Your Cart</div>

          <div className="card-body">
            {this.state.orders.map((order) => (
              <OrderPreview key={order.productId} id={order.productId} quantity={order.quantity} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default CheckoutPage;
