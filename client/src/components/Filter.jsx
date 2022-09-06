import $ from "jquery";
import { Component } from "react";
import "jquery-ui/dist/themes/base/jquery-ui.css";
import "jquery/dist/jquery.js";
import "jquery-ui/dist/jquery-ui.js";
import * as test from "../services/productList";

export default class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      charFilter: "",
      originFilter: "",
      categoryFilter: "",
      priceMinFilter: 0,
      priceMaxFilter: 1000,
      characters: [],
      origins: [],
      categories: [],
    };
  }

  async componentDidMount() {
    let products = await test.getProducts({
      category : '',
      origin : '',
      character : '',
      minPrice : 0,
      maxPrice : 1000
    });
    const charList = getList(products, "character");
    const originList = getList(products, "origin");
    const categoryList = getList(products, "category");
    this.setSlider();
    this.setState({
      characters: charList,
      origins: originList,
      categories: categoryList,
    });
  }

  setSlider() {
    $("#slider-range").slider({
      range: true,
      min: 0,
      max: 1000,
      values: [this.state.priceMinFilter, this.state.priceMaxFilter],
      change: this.onSliderChange,
      slide: function (event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      },
    });
    $("#amount").val(
      "$" +
        $("#slider-range").slider("values", 0) +
        " - $" +
        $("#slider-range").slider("values", 1)
    );
    $("#amount").add();
  }

  newSilder = () => {
    return (
      <div className="list-group-item">
        <p>
          <label htmlFor="amount">(Price):</label>
          <p></p>
          <p></p>
          <input
            type="text"
            id="amount"
            className="line"
            readOnly
            style={{ border: 0, color: "#000000" }}
          />
        </p>
        <div id="slider-range"></div>
      </div>
    );
  };

  newSelectFilter = (id, label, name, initial, value, options) => {
    return (
      <div className="list-group-item">
        <label htmlFor={id}>{label}</label>
        <p></p>
        <p></p>
        <select
          id={id}
          name={name}
          className="form-select"
          onChange={this.onValueUpdate}
          value={value}
        >
          <option value="" selected>
            {initial}
          </option>
          {this.spreadOptions(options)}
        </select>
      </div>
    );
  };

  spreadOptions = (options) => {
    let newOptions = [];
    options.forEach((option) => {
      newOptions.push(<option value={option}>{option}</option>);
    });
    return [...newOptions];
  };

  onValueUpdate = (e) => {
    this.setState((state) => {
      state[e.target.name] = e.target.value;
      return state;
    });
  };

  onSliderChange = () => {
    this.setState({
      priceMinFilter: $("#slider-range").slider("values", 0),
      priceMaxFilter: $("#slider-range").slider("values", 1),
    });
  };

  onFilterChange = () => {
    const {
      charFilter,
      originFilter,
      categoryFilter,
      priceMinFilter,
      priceMaxFilter
    } = this.state;
    this.props.filterProducts(
      charFilter,
      originFilter,
      categoryFilter,
      priceMinFilter,
      priceMaxFilter
    );
  };

  render() {
    const {
      charFilter,
      originFilter,
      categoryFilter,
      characters,
      origins,
      categories,
    } = this.state;
    return (
      <section className="filter-container">
        <div>
          <div
            className="card"
          >
            <div className="card-body">
              <h1 className="card-title">Filters</h1>
            </div>
            <ul className="list-group list-group-flush">
              {this.newSelectFilter(
                "charSearch",
                "(Characters):",
                "charFilter",
                "All",
                charFilter,
                characters
              )}
              {this.newSelectFilter(
                "originSearch",
                "(Origins):",
                "originFilter",
                "All",
                originFilter,
                origins
              )}
              {this.newSelectFilter(
                "categorySearch",
                "(Categories):",
                "categoryFilter",
                "All",
                categoryFilter,
                categories
              )}
              {this.newSilder()}
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => this.onFilterChange()}
              >
                Set Filter
              </button>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

const getList = (products, element) => {
  let newList = [];
  products.forEach((product) => {
      if (!newList.includes(product[element])) {
        newList.push(product[element])
      }
  });
  return newList;
}