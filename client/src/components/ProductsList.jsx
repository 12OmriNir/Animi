import React, { Component } from "react";
import ProductPreview from "./ProductPreview";

export default class ProductsList extends Component {
  render() {
    const { products } = this.props;

    return products.map((product) => <ProductPreview product={product} key={product.id}/>);
  }
}
