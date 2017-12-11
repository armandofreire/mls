import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

import { Provider } from 'react-redux';
import configureStore from './Redux/configureStore';

import registerServiceWorker from './registerServiceWorker';

import AppContainer from './Components/AppContainer';

import './index.css';

const store = configureStore();
const history = createBrowserHistory();

const render = Component => (
	ReactDOM.render(
    <Router history={history}> 
      <Provider store={ store }>
        <AppContainer history={history} />
      </Provider>
    </Router>,
		document.getElementById('ml'),
	)
);

render(AppContainer);