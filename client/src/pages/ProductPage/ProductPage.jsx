// =============== //
// ProductPage.jsx //
// =============== //

import React, { Component } from 'react'

export default class ProductPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render() {

        const { products } = this.props
        const { id, name, title, description, price, category, inStock, imageUrl } = products[0];

        console.log(this.props)

        return (
            <div className='productPage-container'>
                <div className='row'>
                    <div className='col col-md-4 product-image'>
                        
                    </div>
                    <div className='col col-md-12 product-content'>
                        <div className='row'>
                            <div className='col product-details'>
                                <h2>{title}</h2>
                                <h4><bold>{price}</bold></h4>
                                <p>{description}</p>
                            </div>
                            <div className='col product-buttons'>
                                <button type="button" class="btn btn-success" onClick={ () => { alert('Clicked') } }>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}