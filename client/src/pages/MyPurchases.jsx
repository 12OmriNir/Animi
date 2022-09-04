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

    render() {
        const { cartId, lineItems } = this.state;
        return (
            <div className="container-fluid row">
            <div className="col-3 row">
            <div
            className="card"
          >
            <div className="card-body">
              <h1 style={{fontSize: "100px"}} className="card-title">Total:</h1>
            
            <ul className="list-group list-group-flush">
                <h1 style={{fontSize: "70px", color: "orange"}}>${getTotalPrice(lineItems)}</h1>
            </ul>
            <p/>
            <Link to={`/`}>
            <button
                style={{fontSize: "25px"}}
                type="button"
                className="btn btn-secondary"
              >
                Continue Shopping
              </button>
              </Link>
              <p/>
              <Link to={`/checkout`}>
            <button
                style={{fontSize: "25px"}}
                type="button"
                className="btn btn-success"
              >
                Checkout
              </button>
              </Link>
              </div>
            </div>
            </div>
            <div className="col-9 row">
            <div
            className="card"
          >
            <div className="card-body">
              <h1 className="card-title">Cart:</h1>
            
            <ul className="list-group list-group-flush">
                <div className="d-flex" style={{justifyContent: "space-evenly"}}>
                {lineItems.map((cartItem) => 
                    <div>
                        <img alt="..." src={getById(cartItem.productId).imageUrl} style={{ width: "100px", height: "100px", objectFit: "cover" }}/>
                        <h4>{getById(cartItem.productId).product_name}</h4>
                        <h4 style={{color: "orange"}}>${getById(cartItem.productId).price}</h4>
                        <div className="d-flex" style={{justifyContent: "center"}}>
                            <button type="button" className="btn btn-danger" style={{height: "30px", width: "30px"}}>-</button>
                            <h4 style={{color: "grey"}}>x{cartItem.quantity}</h4>
                            <button type="button" className="btn btn-success" style={{height: "30px", width: "30px"}}>+</button>
                        </div>
                    </div>
                )}
                </div>
            </ul>
            </div>
          </div>
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
        isInStock: true,
        character: "ACharacter",
        origin: "An origin",
        category: "Toy",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Walter_White_S5B.png/220px-Walter_White_S5B.png"
    },
    {
        id: "g5340987jg345890g",
        product_name: "Something2",
        description: "Second description.",
        price: 28,
        isInStock: false,
        character: "ACharacter",
        origin: "An origin",
        category: "Toy",
        imageUrl: "https://i.insider.com/5dade9bc045a3139e8686c33?width=700"
    }
]