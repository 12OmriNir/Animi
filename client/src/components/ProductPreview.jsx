import React from "react";
import { Link } from "react-router-dom";

const ProductPreview = ({ product }) => {
  return (
    <div className="col-6 col-sm-3">
      <Link to={`/product/${product.id}`} className="default">
      <div className="card-inline card">
        <div className="card-body">
          
            <img
              src={product.image_url}
              style={{maxHeight: 200, maxWidth: 200}}
              className="mw-auto rounded mb-3"
              alt={`${product.product_name} `}
            />        
            <h6 className="product-name">{product.product_name}</h6>
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
      </Link>
    </div>
  );
};

export default ProductPreview;
