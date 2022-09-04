import React, { Component } from "react";
import ProductPreview from "./ProductPreview";
import s from "./ProductsList.module.css";

export default class ProductsList extends Component {
  render() {
    const { products } = this.props;

    return (
      <div className="row set-to-side">
        {products.map((product) => (
          <ProductPreview product={product} key={product.id} />
        ))}
      </div>
    );
  }
}
