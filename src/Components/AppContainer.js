import React, { Component } from 'react';
import * as ReactRedux from 'react-redux';

import { setItems } from '../Redux/modules/reducer';
import { setItemDetails } from '../Redux/modules/reducer';


import App from './App';

class AppContainer extends Component {
  render() {
    return (
			<App { ...this.props } />
    );
  }
}

const mapStateToProps = (state) => { return (state); };

const mapDispatchToProps = {
  setItems,
  setItemDetails
};

export default ReactRedux.connect(mapStateToProps,	mapDispatchToProps)(AppContainer);