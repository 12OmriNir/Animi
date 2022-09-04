// ========== //
// Header.jsx //
// ========== //

import React, { Component } from "react";

//import Logo from "../Logo/Logo";
//import SearchBar from "./SearchBar/SearchBar";
import NavigationBar from "./NavigationBar";

//import { getId } from '../../utils/idGenerator'

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="container headerContainer">
          <NavigationBar />
        </div>
      </header>
      /*
            <header key={ 'header' /*getId()/ } id="header" className="header">
                <div className='header-container'>
                    <div className='header-top'>
                        <div className='row'>
                            <div className='col col-md-4'><Logo/></div>
                            <div className='col col-md-4'><SearchBar /></div>
                            <div className='col col-md-4'></div>
                        </div>
                    </div>
                    <div className='header-buttom'>
                        <NavigationBar />
                    </div>
                </div>
            </header>
            */
    );
  }
}
