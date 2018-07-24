import React from 'react';
import '../styles/components/Item.css';
import { Link } from 'react-router-dom'

class Item extends React.Component {
  render() {
    return (
      <Link className="link" to={`/${this.props.itemName}`}>
        <div onClick={this.props.function} className="item">
          <div>
            <img alt="static" className="itemImg" src={this.props.itemImg} />
          </div>
          <div className="itemName">
            {this.props.itemName}
          </div>
        </div>
      </Link>
    )
  }

}




export default Item;