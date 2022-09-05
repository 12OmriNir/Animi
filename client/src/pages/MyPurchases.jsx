import { Component } from 'react';
import { Link } from "react-router-dom";

export default class MyPurchases extends Component {
    state = {
        cartId: '',
        lineItems: []
    }

    //getPurchaseIds() -> //Will get the list of IDs that we have added to cart. (CLIENT)
    //getById() -> //Will get the product from its id. (DATABASE)

    componentDidMount() {
        const cartItems = getCartItems();
        this.setState({
            cartId: generateId(),
            lineItems: cartItems
        });
    }

    removeProduct = (id) => {
        this.setState({
            lineItems: this.state.lineItems.filter((item) => item.productId !== id)
        })
    }

    addProductQuantity = (id, num) => {
        this.setState({
            lineItems: this.state.lineItems.map((item) => {
                if ((item.productId === id) &&! (((item.quantity === 1)) && (num < 0))) {
                    item.quantity += num;
                }
                return item;
            })
        })
    }

    render() {
        const { cartId, lineItems } = this.state;
        return (
            <div className='row'>
            <div class="col-md-4 order-md-2 mb-4">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Your cart</span>
            <span class="badge badge-secondary badge-pill">3</span>
          </h4>
          <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-0">Product name</h6>
                <small class="text-muted">Brief description</small>
              </div>
              <span class="text-muted">$12</span>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-0">Second product</h6>
                <small class="text-muted">Brief description</small>
              </div>
              <span class="text-muted">$8</span>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-0">Third item</h6>
                <small class="text-muted">Brief description</small>
              </div>
              <span class="text-muted">$5</span>
            </li>
            <li class="list-group-item d-flex justify-content-between bg-light">
              <div class="text-success">
                <h6 class="my-0">Promo code</h6>
                <small>EXAMPLECODE</small>
              </div>
              <span class="text-success">-$5</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>$20</strong>
            </li>
          </ul>

          <form class="card p-2">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Promo code"/>
              <div class="input-group-append">
                <button type="submit" class="btn btn-secondary">Redeem</button>
              </div>
            </div>
          </form>
        </div>
<div className="col-md-8 order-md-1">
          <h4 className="mb-3">Billing address</h4>
          <form className="needs-validation" novalidate="">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstName">First name</label>
                <input type="text" className="form-control" id="firstName" placeholder=""  required=""/>
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastName">Last name</label>
                <input type="text" className="form-control" id="lastName" placeholder="" required=""/>
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="username">Username</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                </div>
                <input type="text" className="form-control" id="username" placeholder="Username" required=""/>
                <div className="invalid-feedback fixed-fidback">
                  Your username is required.
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
              <div className="invalid-feedback">
                Please enter a valid email address htmlFor shipping updates.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="address">Address</label>
              <input type="text" className="form-control" id="address" placeholder="1234 Main St" required=""/>
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
              <input type="text" className="form-control" id="address2" placeholder="Apartment or suite"/>
            </div>

            <div className="row">
              <div className="col-md-5 mb-3">
                <label htmlFor="country">Country</label>
                <select className="custom-select d-block w-100" id="country" required="">
                  <option >Choose...</option>
                  <option>United States</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="state">State</label>
                <select className="custom-select d-block w-100" id="state" required="">
                  <option >Choose...</option>
                  <option>California</option>
                </select>
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="zip">Zip</label>
                <input type="text" className="form-control" id="zip" placeholder="" required=""/>
                <div className="invalid-feedback">
                  Zip code required.
                </div>
              </div>
            </div>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="same-address"/>
              <label className="custom-control-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
            </div>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="save-info"/>
              <label className="custom-control-label" htmlFor="save-info">Save this information htmlFor next time</label>
            </div>

            <h4 className="mb-3">Payment</h4>

            <div className="d-block my-3">
              <div className="custom-control custom-radio">
                <input id="credit" name="paymentMethod" type="radio" className="custom-control-input"  required=""/>
                <label className="custom-control-label" htmlFor="credit">Credit card</label>
              </div>
              <div className="custom-control custom-radio">
                <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required=""/>
                <label className="custom-control-label" htmlFor="debit">Debit card</label>
              </div>
              <div className="custom-control custom-radio">
                <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required=""/>
                <label className="custom-control-label" htmlFor="paypal">Paypal</label>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="cc-name">Name on card</label>
                <input type="text" className="form-control" id="cc-name" placeholder="" required=""/>
                <small className="text-muted">Full name as displayed on card</small>
                <div className="invalid-feedback">
                  Name on card is required
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="cc-number">Credit card number</label>
                <input type="text" className="form-control" id="cc-number" placeholder="" required=""/>
                <div className="invalid-feedback">
                  Credit card number is required
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 mb-3">
                <label htmlFor="cc-expiration">Expiration</label>
                <input type="text" className="form-control" id="cc-expiration" placeholder="" required=""/>
                <div className="invalid-feedback">
                  Expiration date required
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="cc-expiration">CVV</label>
                <input type="text" className="form-control" id="cc-cvv" placeholder="" required=""/>
                <div className="invalid-feedback">
                  Security code required
                </div>
              </div>
            </div>
            <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
          </form>
        </div>
        </div>
        );
    }
}

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
  
const generateId = (limit = 20) => {
    let newId = "";
    const list = "abcdefghijklmnopqrstuvwxyz_-?1234567890";
    const chooseCase = Math.random();
    for (let i = 0; i < limit; i++) {
      const randIndex = getRandomInt(0, list.length - 1);
      const randomSymbol = list.charAt(randIndex);
      const finalizedSymbol =
        chooseCase === 0
          ? randomSymbol.toUpperCase()
          : randomSymbol.toLowerCase();
      newId = newId.concat(finalizedSymbol);
    }
    return newId;
};

const getCartItems = () => {
    const ids = getPurchaseIds();
    let cartItems = [];
    ids.forEach((id) => {
        if (cartItems.includes(id)) {
            cartItems.map((cartItem) => {
                if (cartItem.productId === id) {
                    cartItem.quantity++;
                }
                return cartItem;
            });
        } else {
            const newCartProduct = {
                productId: id,
                quantity: 1
            }
            cartItems.push(newCartProduct);
        }
    });
    return cartItems;
}

const getTotalPrice = (items) => {
    let prices = [];
    items.forEach((item) => {
        prices.push(getById(item.productId).price*item.quantity);
    });
    return prices.reduce((prevPrice, currPrice) => prevPrice + currPrice, 0);
}

//ONLY FOR EXAMPLE:
//---------------

const getPurchaseIds = () => {
    return idsList;
}

const getById = (id) => {
    return exampleList.find((product) => product.id === id);
}

const idsList = [
    "35-2384jktr-243",
    "g5340987jg345890g",
]

//---------------

const exampleList = [
    {
        id: "35-2384jktr-243",
        product_name: "Something1",
        description: "First description.",
        price: 59,
        is_in_stock: true,
        character: "ACharacter",
        origin: "An origin",
        category: "Toy",
        image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Walter_White_S5B.png/220px-Walter_White_S5B.png"
    },
    {
        id: "g5340987jg345890g",
        product_name: "Something2",
        description: "Second description.",
        price: 28,
        is_in_stock: false,
        character: "ACharacter",
        origin: "An origin",
        category: "Toy",
        image_url: "https://i.insider.com/5dade9bc045a3139e8686c33?width=700"
    }
]