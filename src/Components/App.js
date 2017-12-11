import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar/SearchBar';
import ResultList from './ResultList/ResultList';
import ProductDetails from './ProductDetails/ProductDetails';

import './App.css';

class App extends Component {
  renderView() {
    switch (this.props.currentView) {
      case 'productList':
        if (this.props.productList.length > 0) {
          return <ResultList history={ this.props.history } productList={ this.props.productList} setItemDetails={ this.props.setItemDetails } />
        } 
        return <h4 className="text-center"><h2>🤷</h2>Não encontramos nenhum produto com essa descrição</h4>

      case 'productDetails':
        return <ProductDetails product={ this.props.productDetails } />
      
      default:
        return <h3 className="text-center">Que tal começar buscando?</h3>;
    }
  }

  render() {
    return (
      <div>
        <SearchBar
          history={ this.props.history }
          setItems={ this.props.setItems }
        />

        <div className="container ml-container">
          { this.renderView() }
        </div>
      </div>
    );
  }
}

const { func } = PropTypes;
App.propTypes = {
  setItems: func.isRequired,
  setItemDetails: func.isRequired
}

export default App;
