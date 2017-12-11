import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ResultItem from './ResultItem/ResultItem';

import './ResultList.css';

class ResultList extends Component {
  render() {
    return (
			<div className="row ml-items">
        {
          this.props.productList.map(product => 
            <ResultItem
              history={ this.props.history }
              product={ product }
              key={ product.id }
              setItemDetails={ this.props.setItemDetails }
            />
          )
        }
      </div>
    );
  }
}

const { arrayOf, shape, number, string, func } = PropTypes;

ResultList.propTypes = {
  productList: arrayOf(shape({
      title: string.isRequired,
      thumbnail: string.isRequired,
      price: number.isRequired,
      id: string.isRequired
    }).isRequired,
  ).isRequired,
  setItemDetails: func.isRequired
}

export default ResultList;
