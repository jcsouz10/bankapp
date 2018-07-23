import React from 'react';
import './Box.css';
import Item from './Item.js';

class Box extends React.Component {
  render() {
    return (
      <div className="box">
        {this.props.items.map(i => <Item key={i.img} function={i.function} itemImg={i.img} itemName={i.item} />)}
      </div>
    )
  }
}

export default Box;