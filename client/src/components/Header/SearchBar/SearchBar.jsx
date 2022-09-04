// ============= //
// SearchBar.jsx //
// ============= //

import React, { Component } from 'react'

/**
 * The purpose of the 'SearchBar' component is to filter products from the displayed list by product name. * 
 * This component is located in the header at the top of the page.
 */
export default class SearchBar extends Component {
  render() {
    return (
      <>
        <div className='header-logo'><h1>Header Logo</h1></div>
        <div className='header-search-bar'><h2>Header Search Bar</h2></div>
      </>
    )
  }
}