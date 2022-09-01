import React from "react";
import { Link } from "react-router-dom";

const ProductPreview = ({ product }) => {
  return (
    <div className="col-3 mb-1">
      <div className="card border-0">
        <div className="card-body">
          <Link to="/product">
            <img
              src={product.imgUrl}
              style={{ width: "75%", height: "75%", objectFit: "cover" }}
            />
          </Link>
          <Link className="text-decoration-none link-light" to="/product">
            <h5>{product.title}</h5>
          </Link>
          <p className="text-secondary">Price: ${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
