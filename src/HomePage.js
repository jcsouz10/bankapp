import React, { Component } from 'react';
import BoxItems from './BoxItems.js';
import NavBar from './NavBar.js';

class HomePage extends Component {
  render() {
    return (
      <div>
        <NavBar title="CUBIK BANK" />
        <BoxItems />
      </div>
    );
  }
}

export default HomePage;
