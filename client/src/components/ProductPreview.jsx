import React from "react";
import { Link } from "react-router-dom";

const ProductPreview = ({ product }) => {
  return (
    <div className="col-6 col-sm-3">
      <div className="card-inline card">
        <div className="card-body">
          <Link to={`/product/${product.id}`}>
            <img
              src={product.image_url}
              class="img-fluid"
              alt={`${product.product_name} `}
            />
          </Link>
          <Link className="text-decoration-none link-dark" to="/product">
            <h6 className="text-wrap">{product.product_name}</h6>
          </Link>
          <p className="text-secondary">Price: ${product.price}</p>
          {!product.is_in_stock && (
            <p className="text-danger">
              {"Out of stock"}
            </p>
          )}
            {product.is_in_stock && (
            <p className="text-success">
              {"in stock"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
