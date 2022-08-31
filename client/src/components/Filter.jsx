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
            <label for={id}>{label}</label>
            <input id={id} type="text" className="form-control" name={name} onChange={this.onValueUpdate} value={value}/>
        </div>
    )
  }

  newNumberFilter = (id, label, name, value) => {
    return (
        <div className="list-group-item">
            <label for={id}>{label}</label>
            <input id={id} type="number" className="form-control" name={name} onChange={this.onValueUpdate} value={value}/>
        </div>
    )
  }

  newRadioFilter = (label1, label2, label3, name) => {
    return (
        <div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name={name} id="inStock1" value="option1" onChange={this.on}/>
                <label className="form-check-label" for="inStock1">{label1}</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name={name} id="inStock2" value="option2"/>
                <label className="form-check-label" for="inStock2">{label2}</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name={name} id="inStock3" value="option3"/>
                <label className="form-check-label" for="inStock3">{label3}</label>
            </div>
        </div>
    )
  }

  onFilterChange = () => {
    let newList = this.props.list;
    newList.filter((item) => {
        const nameCheck = this.state.nameFilter ? this.state.nameFilter : item.name;
        const titleCheck = this.state.titleFilter ? this.state.titleFilter : item.title;
        const descCheck = this.state.descFilter ? this.state.descFilter : item.description;
        const priceMinCheck = this.state.priceMinFilter ? this.state.priceMinFilter : item.price;
        const priceMaxCheck = this.state.priceMaxFilter ? this.state.priceMaxFilter : item.price;
        const inStockCheck = this.state.inStockFilter ? this.state.inStockFilter : item.inStock;
        const categoryCheck = this.state.categoryFilter ? this.state.categoryFilter : item.category;
        if ((item.name.toUpperCase().includes(String(nameCheck).toUpperCase()))
         && (item.title.toUpperCase().includes(String(titleCheck).toUpperCase()))
         && (item.description.toUpperCase().includes(String(descCheck).toUpperCase()))
         && (item.price >= priceMinCheck)
         && (item.price <= priceMaxCheck)
         && (item.inStock === inStockCheck)
         && (item.category.toUpperCase().includes(String(categoryCheck).toUpperCase()))
        ) {
            return item;
        }
    })
    this.props.getFilter(newList);
  }

  onValueUpdate = (e) => {
    this.setState((state) => {
      state[e.target.name] = e.target.value;
    });
    this.onFilterChange();
  };

  onToggleUpdate = () => {
    let inStock = "Undecided";
    if (document.querySelector("#inStock1").checked) {
        inStock = "Undecided";
    } else if (document.querySelector("#inStock2").checked) {
        inStock = "No";
    } else if (document.querySelector("#inStock3").checked) {
        inStock = "Yes";
    }
    this.setState((state) => {
      state["inStockFilter"] = inStock;
    });
    this.onFilterChange();
  };

  render() {
    const { nameFilter, titleFilter, descFilter, priceMinFilter, priceMaxFilter, categoryFilter } = this.state;
    return (
      <section>
        <div>
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Filters</h5>
            </div>
            <ul class="list-group list-group-flush">
              {this.newTextFilter("nameSearch", "Name:", "nameFilter", nameFilter)}
              {this.newTextFilter("titleSearch", "Title:", "titleFilter", titleFilter)}
              {this.newTextFilter("descSearch", "Description:", "descFilter", descFilter)}
              <div class="row">
                <div class="col">
                    {this.newNumberFilter("priceMinSearch", "Price Min:", "priceMinFilter", priceMinFilter)}
                </div>
                <div class="col">
                    {this.newNumberFilter("priceMaxSearch", "Price Max:", "priceMaxFilter", priceMaxFilter)}
                </div>
              </div>
              {this.newRadioFilter("inStockToggle", "In Stock:", "inStockFilter")}
              {this.newTextFilter("categorySearch", "Category:", "categoryFilter", categoryFilter)}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}