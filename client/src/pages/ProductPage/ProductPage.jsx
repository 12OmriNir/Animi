// =============== //
// ProductPage.jsx //
// =============== //

import React, { Component } from "react";
import withRouter from "../../utils/withRouter";
//import { Link } from 'react-router-dom'

class ProductPage extends Component {
  constructor(props) {
    super(props);


  }

  componentDidMount() {}

  render() {
    const { product} = this.props;


    console.log(product.id + product.name );

    console.log(this.props);

    return (
      <div className="productPage-container">
        <div className="row">
          <div className="col col-md-4 product-image"></div>
          <div className="col col-md-12 product-content">
            <div className="row">
              <div className="col product-details">
                <h2>{title}</h2>
                <h4>
                  <bold>{price}</bold>
                </h4>
                <p>{description}</p>
              </div>
              <div className="col product-buttons">
                <button
                  type="button"
                  class="btn btn-success"
                  onClick={() => {
                    alert("Clicked");
                  }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      /*
            <div className="card" style="width:400px">
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{description}</p>
                    <Link to={'/purcheses'}>
                        <button type="button" className="btn btn-success">Buy Now !</button>
                    </Link>
                </div>
            </div>
            */
    );
  }
}

export default withRouter(ProductPage);