import React from 'react';
import '../styles/components/Box.css';
import Item from './Item.js';

class BoxItems extends React.Component {
  render() {
    return (
      <div className="box">
        {this.props.items.map(i => <Item key={i.img} function={i.function} itemImg={i.img} itemName={i.item} />)}
      </div>
    )
  }
}

export default BoxItems