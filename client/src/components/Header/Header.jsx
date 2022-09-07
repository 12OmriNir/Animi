// ========== //
// Header.jsx //
// ========== //

import React, { Component } from "react";

import NavigationBar from "./NavigationBar";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="headerContainer">
          <NavigationBar loadProducts = {this.props.loadProducts}/>
        </div>
      </header>
    );
  }
}
