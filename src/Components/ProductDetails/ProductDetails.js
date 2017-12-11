import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import { formatPrice } from '../../Utils/TextUtils';

import './ProductDetails.css';

class ProductDetails extends Component {
  render() {
    const { product } = this.props;
    console.log(product, '00000000000');
    return (
      <div className="col-md-12">
        <div className="col-md-9">
          <img src={ product.details.pictures[0].secure_url } />
        </div>
        <div className="col-md-3 text-left">
          <h4>{ product.details.title }</h4>
          <h2 className="price">{ formatPrice(product.details.currency_id, product.details.price) }</h2>
          <a className="btn btn-link btn-buy col-md-8" href={ product.details.permalink } target="_BLANK">Comprar</a>
        </div>
        <div className="col-md-12 description">
          <h3>Descrição do produto</h3>
          <p>
            { product.description.plain_text || 'O vendedor não informou mais detalhes sobre esse produto, mas você pode usar a seção de Perguntas para saber mais!' }
          </p>
        </div>
      </div>
    );
  }
}

const { arrayOf, shape, number, string, func } = PropTypes;

ProductDetails.propTypes = {
  product: shape({
    description: shape({
      plain_text: string.isRequired
    }).isRequired,
    details: shape({
      title: string.isRequired,
      price: number.isRequired,
      currency_id: string.isRequired,
      permalink: string.isRequired,
      pictures: arrayOf(shape({
        secure_url: string.isRequired
      }))
    })
  })
}

export default ProductDetails;
