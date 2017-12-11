import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import { getItemDetails } from '../../../Utils/RequestManager';
import { formatPrice } from '../../../Utils/TextUtils';

import './ResultItem.css';

class ResultItem extends Component {
  constructor(props) {
		super(props);

		this.state = { query: null };
		
		this.selectProduct = this._selectProduct.bind(this);
	}

	_selectProduct(productId) {
    this.props.history.push(`/items/${productId}`);
		getItemDetails(productId).then((result) => {
			this.props.setItemDetails(result);
		});
  }
  
  render() {
    const { product } = this.props;
    return (
      <div className="col-md-12 product">
        <div className="col-md-2">
          <img src={ product.thumbnail } width={ 96 } height={ 96 } />
        </div>
        <div className="col-md-8">
          <h3 className="price">{ formatPrice(product.currency_id, product.price) }</h3>
          <Link to={ `/items/${product.id}`} className="title">
            { product.title }
          </Link>
        </div>
        <div className="col-md-2 text-right">
          <Link
            to={ `/items/${product.id}`}
            className="btn-details"
            onClick={ () => this.selectProduct(product.id) }
          >
            Detalhes
          </Link>
        </div>
      </div>
    );
  }
}

const { arrayOf, shape, number, string, func } = PropTypes;

ResultItem.propTypes = {
  product: shape({
    title: string.isRequired,
    thumbnail: string.isRequired,
    price: number.isRequired,
    id: string.isRequired
  }).isRequired,
  setItemDetails: func.isRequired
}

export default ResultItem;
