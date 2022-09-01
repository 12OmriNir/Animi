import { Component } from "react";

export default class Filter extends Component {
  state = {
    nameFilter: "",
    titleFilter: "",
    descFilter: "",
    priceMinFilter: 0,
    priceMaxFilter: 10000,
    inStockFilter: "Undecided",
    categoryFilter: "",
  };

  newTextFilter = (id, label, name, value) => {
    return (
        <div className="list-group-item">
            <label htmlFor={id}>{label}</label>
            <input id={id} type="text" className="form-control" name={name} onChange={this.onValueUpdate} value={value}/>
        </div>
    )
  }

  newNumberFilter = (id, label, name, value) => {
    return (
        <div className="list-group-item">
            <label htmlFor={id}>{label}</label>
            <input id={id} type="number" className="form-control" name={name} onChange={this.onValueUpdate} value={value}/>
        </div>
    )
  }

  newRadioFilter = (label1, label2, label3, name) => {
    return (
        <div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name={name} id="inStock1" value="option1" onChange={this.onToggleUpdate} defaultChecked/>
                <label className="form-check-label" htmlFor="inStock1">{label1}</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name={name} id="inStock2" value="option2" onChange={this.onToggleUpdate}/>
                <label className="form-check-label" htmlFor="inStock2">{label2}</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name={name} id="inStock3" value="option3" onChange={this.onToggleUpdate}/>
                <label className="form-check-label" htmlFor="inStock3">{label3}</label>
            </div>
        </div>
    )
  }

  onFilterChange = () => {
    const { nameFilter, titleFilter, descFilter, priceMinFilter, priceMaxFilter, inStockFilter, categoryFilter} = this.state;
    this.props.filterProducts(nameFilter, titleFilter, descFilter, priceMinFilter, priceMaxFilter, inStockFilter, categoryFilter);
  }

  onValueUpdate = (e) => {
    this.setState((state) => {
      state[e.target.name] = e.target.value;
    });
    this.onFilterChange();
  };

  onToggleUpdate = () => {
    let inStock;
    if (document.querySelector("#inStock2").checked) {
        inStock = "No";
    } else if (document.querySelector("#inStock3").checked) {
        inStock = "Yes";
    } else {
        inStock = "Undecided";
    }
    this.setState({
      inStockFilter: inStock
    });
    this.onFilterChange();
  };

  render() {
    const { nameFilter, titleFilter, descFilter, priceMinFilter, priceMaxFilter, categoryFilter } = this.state;
    return (
      <section>
        <div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Filters</h5>
            </div>
            <ul className="list-group list-group-flush">
              {this.newTextFilter("nameSearch", "(Name):", "nameFilter", nameFilter)}
              {this.newTextFilter("titleSearch", "(Title):", "titleFilter", titleFilter)}
              {this.newTextFilter("descSearch", "(Description):", "descFilter", descFilter)}
              <div className="row">
                <div className="col">
                    {this.newNumberFilter("priceMinSearch", "(Price:) Min:", "priceMinFilter", priceMinFilter)}
                </div>
                <div className="col">
                    {this.newNumberFilter("priceMaxSearch", "Max:", "priceMaxFilter", priceMaxFilter)}
                </div>
              </div>
              {this.newRadioFilter("(In Stock):", "No:", "Yes:", "inStockFilter")}
              {this.newTextFilter("categorySearch", "(Category):", "categoryFilter", categoryFilter)}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}