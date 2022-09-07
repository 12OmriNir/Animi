import React, { Component } from "react";
import { getProductById } from "../services/productList";
class OrderPreview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      price: "",
    };
  }

  componentDidMount() {
    this.getProductDetails(this.props.id);
  }

  getProductDetails = async (id) => {
    let product = await getProductById(id);

    let newState = { ...this.state };
    newState.name = product.product_name;
    newState.price = product.price;
    this.setState(newState);
  };

  render() {
    return (
      <div className="col-12 border mb-1">
        <div className="row">
          <div className="col-8">
            <h6 className="font-weight-bold">{this.state.name}</h6>
          </div>
          <div className="col-4">
            <sapn className="text-muted">${this.state.price * this.props.quantity}</sapn>
          </div>
        </div>

        <div className="col-8">
          <small className="text-muted">Quantity:{this.props.quantity}</small>
        </div>
      </div>
    );
  }
}

export default OrderPreview;
