import $ from "jquery";
import { Component } from "react";
import "jquery-ui/dist/themes/base/jquery-ui.css";
import "jquery/dist/jquery.js";
import "jquery-ui/dist/jquery-ui.js";

export default class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titleFilter: "",
      charFilter: "",
      franchiseFilter: "",
      priceMinFilter: 0,
      priceMaxFilter: 0,
      inStockFilter: "Any",
      categoryFilter: "",
      characters: [],
      origins: [],
      categories: [],
    };
  }

  componentDidMount() {
    this.setSlider();
    this.setState({
      characters: ["one", "two", "three"],
      origins: ["one", "two", "three"],
      categories: ["one", "two", "three"],
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
            className="App"
            readOnly
            style={{ border: 0, color: "#000000" }}
          />
        </p>
        <div id="slider-range"></div>
      </div>
    );
  };

  newTextFilter = (id, label, name, value) => {
    return (
      <div className="list-group-item">
        <label htmlFor={id}>{label}</label>
        <p></p>
        <p></p>
        <input
          id={id}
          type="text"
          className="form-control"
          name={name}
          onChange={this.onValueUpdate}
          value={value}
          maxLength="20"
        />
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

  newRadioFilter = (label1, label2, label3, label4, name) => {
    return (
      <div className="list-group-item">
        <label htmlFor="StockRadio">{label1}</label>
        <p></p>
        <p></p>
        <div id="StockRadio">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name={name}
              id="inStock1"
              value="option1"
              onChange={this.onToggleUpdate}
              defaultChecked
            />
            <label className="form-check-label" htmlFor="inStock1">
              {label2}
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name={name}
              id="inStock2"
              value="option2"
              onChange={this.onToggleUpdate}
            />
            <label className="form-check-label" htmlFor="inStock2">
              {label3}
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name={name}
              id="inStock3"
              value="option3"
              onChange={this.onToggleUpdate}
            />
            <label className="form-check-label" htmlFor="inStock3">
              {label4}
            </label>
          </div>
        </div>
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

  onToggleUpdate = () => {
    let inStock;
    if (document.querySelector("#inStock2").checked) {
      inStock = "No";
    } else if (document.querySelector("#inStock3").checked) {
      inStock = "Yes";
    } else {
      inStock = "Any";
    }
    this.setState({
      inStockFilter: inStock,
    });
  };

  onFilterChange = () => {
    const {
      titleFilter,
      charFilter,
      originFilter,
      priceMinFilter,
      priceMaxFilter,
      inStockFilter,
      categoryFilter,
    } = this.state;
    this.props.filterProducts(
      titleFilter,
      charFilter,
      originFilter,
      priceMinFilter,
      priceMaxFilter,
      inStockFilter,
      categoryFilter
    );
  };

  render() {
    const {
      titleFilter,
      charFilter,
      originFilter,
      categoryFilter,
      characters,
      origins,
      categories,
    } = this.state;
    return (
      <section>
        <div>
          <div
            className="card"
            style={{ position: "fixed", bottom: 180, width: 400 }}
          >
            <div className="card-body">
              <h1 className="card-title">Filters</h1>
            </div>
            <ul className="list-group list-group-flush">
              {this.newTextFilter(
                "titleSearch",
                "(Product Name):",
                "titleFilter",
                titleFilter
              )}
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
              {this.newRadioFilter(
                "(In Stock):",
                "<-Any",
                "<-No",
                "<-Yes",
                "inStockFilter"
              )}
              <button
                type="button"
                className="btn btn-warning"
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
