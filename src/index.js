import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './css/skeleton.css';
import './css/common.css';


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

registerServiceWorker();
