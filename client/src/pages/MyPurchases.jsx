import { Component } from 'react';

export default class MyPurchases extends Component {
    state = {
        purchased: exampleList
    }

    

}

const exampleList = [
    {
        id: "35-2384jktr-243",
        product_name: "Something1",
        description: "First description.",
        price: 59,
        inStock: true,
        category: "Toy",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Walter_White_S5B.png/220px-Walter_White_S5B.png"
    },
    {
        id: "g5340987jg345890g",
        product_name: "Something2",
        description: "Second description.",
        price: 28,
        inStock: false,
        category: "Toy",
        imgUrl: "https://i.insider.com/5dade9bc045a3139e8686c33?width=700"
    }
]