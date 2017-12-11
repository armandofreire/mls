import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { searchItem } from '../../Utils/RequestManager';

import './SearchBar.css';

// Se as imagens forem menores que 10k, retorna o base64
import logo from '../../assets/logo.png';
import search from '../../assets/search.png';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { query: null };
		
		this.search = this._search.bind(this);
	}

	_search() {
    this.props.history.push(`/items?search=${this.state.query}`);
		searchItem(this.state.query).then((result) => {
			this.props.setItems(result);
		});
	}

  render() {
    return (
			<nav className="navbar navbar-fixed-top">
				<div className="container ml-navbar">
					<div className="col-md-1">
						<img src={ logo } className="ml-logo" />
					</div>
					<div className="row ml-search">
						<div className="input-group">		
							<input
								type="text"
								className="col-md-12 col-sm-12 col-xs-12 search-box"
								onChange={ e => this.setState({ query: e.target.value}) }
								autoFocus={ true }
								onKeyPress={ event => { if (event.key === 'Enter') { this.search() }} }
							/>
							<span className="input-group-btn">
								<button
									className="btn btn-default search-button"
									type="button"
									onClick={ this.search }
								>
									 <img src={ search } />
								</button>
							</span>
						</div>
					</div>
				</div>
			</nav>
    );
  }
}

export default SearchBar;
