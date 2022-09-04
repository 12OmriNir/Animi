import React, { Component } from 'react';
import withRouter from '../utils/withRouter';
//import { Link } from 'react-router-dom'
import Image from '../components/Image';
import ProductNotFoundImage from '../components/ProductNotFoundImage'

class ProductPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    // 1. Get the id from the URL.
    // 2. Check if the product with that id exist.
    // 3. Get the product from the database.
    // 4. Render the page with the appropritate parameters.

    console.log('Product Page componentDidMount');

    const product = {
      id: 1,
      name: 'asdfadsf',
      title: 'Title',
      description: 'Description',
      price: '₪49.99',
      category: 'Doll',
      inStock: true,
      imageUrl: '',
    };

    let newState = [...this.state]
    newState.product = product
    this.setState(newState)
  }

  render() {
    /*
    const { products, params } = this.props;
    const { id, name, title, description, price, category, inStock, imageUrl } =
      products[0];

    console.log(
      id + name + title + description + price + category + inStock + imageUrl
    );

    console.log(this.props);
    */

    const product = this.state.product;

    console.log(this.state.product);

    return (
      // !!! DO NOT DELETE !!!
      /*
      <div className='productPage-container'>
        <div className='row'>
          <div className='col col-md-4 product-image'></div>
          <div className='col col-md-12 product-content'>
            <div className='row'>
              <div className='col product-details'>
                <h2>{product.title}</h2>
                <h4>
                  <bold>{product.price}</bold>
                </h4>
                <p>{product.description}</p>
              </div>
              <div className='col product-buttons'>
                <button
                  type='button'
                  class='btn btn-success'
                  onClick={() => {
                    alert('Clicked');
                  }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      */


      <section className='py-5'>
        <div className='container px-4 px-lg-5 my-5'>
          <div className='row gx-4 gx-lg-5 align-items-center'>
            <div className='col-md-6'>
              <Image src={''} alt={''} className='card-img-top mb-5 mb-md-0' />
              <ProductNotFoundImage />
            </div>
            <div className='col-md-6'>
              <h1 className='display-5 fw-bolder'>{product.title}</h1>
              <div className='fs-5 mb-5'>
                <span className='text-decoration-line-through'>
                  ₪{product.price * 1.15}
                </span>
                <span>₪{product.price}</span>
              </div>
              <p className='lead'>
                Description description description description description
                description description description description description
                description description description description description
                description description description description description
                description description description description description
                description description description description description
              </p>
              <div className='d-flex'>
                <form>
                <input
                  className='form-control text-center me-3'
                  id='inputQuantity'
                  type='num'
                  style='max-width: 3rem'
                  onClick={ () => { alert('Clicked') } }
                />
                <button
                  className='btn btn-outline-dark flex-shrink-0'
                  type='button'
                  onClick={ () => { alert('Add to cart was Clicked') } }
                >
                  <i className='bi-cart-fill me-1'></i>
                  Add to cart
                </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      /*
            <div className='card' style='width:400px'>
                <div className='card-body'>
                    <h4 className='card-title'>{title}</h4>
                    <p className='card-text'>{description}</p>
                    <Link to={'/purcheses'}>
                        <button type='button' className='btn btn-success'>Buy Now !</button>
                    </Link>
                </div>
            </div>
            */
    );
  }
}

export default withRouter(ProductPage);