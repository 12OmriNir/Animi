import React, { Component } from "react";
import ProductPreview from "./ProductPreview";

export default class ProductsList extends Component {
  render() {
    const { products } = this.props;

    return( 
      <div className="row">
    {products.map((product) => (
    <ProductPreview product={product} key={product.id}/>
    
    ))}
    </div>
    )

  }
}
