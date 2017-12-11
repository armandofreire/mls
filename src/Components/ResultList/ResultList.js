import React, { Component } from 'react';

import ResultItem from './ResultItem/ResultItem';

import './ResultList.css';

class ResultList extends Component {
  render() {
    return (
			<div className="row ml-items">
        <ResultItem />
        <ResultItem />
        <ResultItem />
      </div>
    );
  }
}

export default ResultList;
