import React from "react";
import { Link } from "react-router-dom";

const ProductPreview = ({ product }) => {
  return (
    <div className="col-12 col-sm-3">
      <div className="card">
        <div className="card-body">
          <Link to={`/product/${product.id}`}>
            <img
              src={product.image_url}
              class="img-fluid"
            />
          </Link>
          <Link className="text-decoration-none link-dark" to="/product">
            <h5>{product.product_name}</h5>
          </Link>
          <p className="text-secondary">Price: ${product.price}</p>
          <p className="text-danger">{product.is_in_stock ? '' : 'Out of stock'}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
