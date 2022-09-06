// ================= //
// NavigationBar.jsx //
// ================= //

import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavigationBarImageLogo from "./NavigationBarImageLogo";
import { getProducts } from "../../../services/productList";
import { useNavigate } from "react-router-dom";
/**
 * The purpose of the 'NavigationBar' component is to navigate between different pages of the website.
 * This component is placed at the top of the main page, inside the header.
 */

export default class NavigationBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      productName: '',
    }
  }

  render() {
    return (
      <div className="navigationBarContainer">
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <div className="container-fluid">
            <Link to={"/"} className="navbar-brand">
              <NavigationBarImageLogo />
            </Link>

            <Link to={"/"} className="navbar-brand">
              Anime Shop
            </Link>
            <div className="collapse navbar-collapse" id="mynavbar">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link to={"/"} className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/purchases"} className="nav-link">
                    MyPurchases
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/about"} className="nav-link">
                    About
                  </Link>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="text"
                  placeholder="Search Product..."
                  onChange={(event) => {this.state.productName = event.target.value}}
                />
                <button className="btn btn-danger" type="button" 
                onClick={() => this.props.
                loadProducts({name: this.state.productName, category: '', origin: '', character: '', minPrice: 0, maxPrice: 0})}>
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}