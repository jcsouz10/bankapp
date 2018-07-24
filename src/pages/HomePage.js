import React, { Component } from 'react';
import Box from '../components/Box.js';
import NavBar from '../components/NavBar.js';

class HomePage extends Component {
  render() {
    return (
      <div>
        <NavBar title="CUBIK BANK" />
        <Box />
      </div>
    );
  }
}

export default HomePage;
