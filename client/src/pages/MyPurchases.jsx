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
            <div
            className="card"
          >
            <div className="card-body">
              <h1 className="card-title">Cart:</h1>
            </div>
            <ul className="list-group list-group-flush">
                {lineItems.map((cartItem) => 
                <div className="list-group-item">
                    <img alt="..." src={getById(cartItem.productId).imageUrl} style={{ width: "100px", height: "100px", objectFit: "cover" }}/>
                    <h3>{getById(cartItem.productId).product_name}</h3>
                    <h4 style={{color: "orange"}}>${getById(cartItem.productId).price}</h4>
                    <h5 style={{color: "blue"}}>x{cartItem.quantity}</h5>
                </div>
                )}
            </ul>
            <Link to={`/checkout`}>
            <button
                type="button"
                className="btn btn-success"
              >
                Checkout
              </button>
              </Link>
              <Link to={`/`}>
            <button
                type="button"
                className="btn btn-secondary"
              >
                Continue Shopping
              </button>
              </Link>
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