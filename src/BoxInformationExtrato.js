import React from 'react';
import './BoxInformationExtrato.css';

class BoxInformationExtrato extends React.Component {
  render() {
    const { information } = this.props;
    return (
      <div className="boxInformationExtrato">
        <div>
          <h2 className="itemInformation"> ATIVIDADE </h2>
          <h5 className="itemInformation">
            {information.map(i => <div className="itemNameInformation">{i.name}</div>)}
          </h5>
        </div>

        <div>
          <h2 className="itemInformation"> VALOR </h2>
          <h5 className="itemInformation">
            {information.map(i => <div className="itemNameInformation">{i.value}</div>)}
          </h5>
        </div>

        <div>
          <h2 className="itemInformation"> DATA </h2>
          <h5 className="itemInformation">
            {information.map(i => <div className="itemNameInformation">{i.date}</div>)}
          </h5>
        </div>
      </div>
    )
  }
}


export default BoxInformationExtrato;