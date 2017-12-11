import React, { Component } from 'react';
import './ResultItem.css';

import iponey from '../../../assets/iponey.png';

class ResultItem extends Component {
  render() {
    return (
      <div className="col-md-12 ml-item">
        <div className="col-md-2">
          <img src={ iponey } width={ 160 } height={ 160 } />
        </div>
        <div className="col-md-8">
          <h3>R$ 1.200</h3>
          <p>Apple iPoney 32GB desbloqueado para todo mundo, eita que maravilha</p>
        </div>
        <div className="col-md-2">
          <button className="btn btn-warning">
            Detalhes
          </button>
        </div>
      </div>
    );
  }
}

export default ResultItem;
