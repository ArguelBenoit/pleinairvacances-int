import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import App from './App';
import './css/common.css';

const middleware = [ thunk ];
const store = createStore(
  reducers,
  applyMiddleware(...middleware)
);

ReactDOM.render(
  <Provider store={store}>
    <App value={store.getState()}/>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
