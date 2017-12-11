import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar/SearchBar';
import ResultList from './ResultList/ResultList';

import './App.css';

class App extends Component {
  renderView() {
    if (this.props.productList.length > 0) {
      return <ResultList />
    }
    return (
      <h3 className="text-center">Não encontramos nenhum produto com essa descrição</h3>
    )
  }
  render() {
    return (
      <div>
        {
          console.log(this.props)
        }
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
  setItems: func.isRequired
}

export default App;
