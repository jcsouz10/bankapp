import React from 'react';
import '../styles/components/NavBar.css';

class NavBar extends React.Component {
  render() {
    return (
      <div  className="title">
        {this.props.title}
      </div>
    )
  }
}

export default NavBar;