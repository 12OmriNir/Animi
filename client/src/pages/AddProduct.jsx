import React, { Component } from "react";

export default class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      category: "",
      origin: "",
      character: "",
      description: "",
      price: "",
      isInStock: false,
      imageUrl: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (event) => {
    if (event.target.name === "isInStock") {
      this.setState({ isInStock: !this.state.isInStock });
    } else {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.productAdded(this.state);
    alert("product was added");
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <form className="add-product" onSubmit={this.onSubmit}>
            <div className="form-flex">
              <label className="col-sm-2 col-form-label" htmlFor="">
                name:{" "}
              </label>
              <input
                onChange={this.handleInputChange}
                value={this.state.name}
                className="form-control form-input"
                name="name"
                type="text"
                placeholder="product name..."
                aria-label="default input example"
              />
            </div>
            <div className="form-flex">
              <label className="col-sm-2 col-form-label" htmlFor="">
                category:{" "}
              </label>
              <input
                onChange={this.handleInputChange}
                value={this.state.category}
                className="form-control form-input"
                name="category"
                type="text"
                placeholder="product category..."
                aria-label="default input example"
              />
            </div>
            <div className="form-flex">
              <label className="col-sm-2 col-form-label" htmlFor="">
                origin:{" "}
              </label>
              <input
                onChange={this.handleInputChange}
                value={this.state.origin}
                className="form-control form-input"
                name="origin"
                type="text"
                placeholder="product origin..."
                aria-label="default input example"
              />
            </div>
            <div className="form-flex">
              <label className="col-sm-2 col-form-label" htmlFor="">
                character:{" "}
              </label>
              <input
                onChange={this.handleInputChange}
                value={this.state.character}
                className="form-control form-input"
                name="character"
                type="text"
                placeholder="product character..."
                aria-label="default input example"
              />
            </div>
            <div className="form-flex">
              <label className="col-sm-2 col-form-label" htmlFor="">
                description:{" "}
              </label>
              <textarea
                onChange={this.handleInputChange}
                value={this.state.description}
                className="form-control form-input"
                name="description"
                type="text"
                placeholder="product description..."
                aria-label="default input example"
              />
            </div>
            <div className="form-flex">
              <label className="col-sm-2 col-form-label" htmlFor="">
                price:{" "}
              </label>
              <input
                onChange={this.handleInputChange}
                value={this.state.price}
                className="form-control form-input"
                name="price"
                type="text"
                placeholder="price..."
                aria-label="default input example"
              />
            </div>
            <div className="form-flex">
              <label className="col-sm-2 col-form-label" htmlFor="">
                image URL:{" "}
              </label>
              <input
                onChange={this.handleInputChange}
                value={this.state.imageUrl}
                className="form-control form-input"
                name="imageUrl"
                type="text"
                placeholder="imageUrl..."
                aria-label="default input example"
              />
            </div>
            <div className="form-flex">
              <label className="col-sm-2 col-form-label" htmlFor="">
                is in stock?:{" "}
              </label>
              <input
                onChange={this.handleInputChange}
                value={this.state.is0InStock}
                name="isInStock"
                type="checkbox"
                placeholder="product isInStock..."
                aria-label="default input example"
              />
            </div>
            <button className="btn btn-success" type="submit">
              add product
            </button>
          </form>
        </div>
      </div>
    );
  }
}
