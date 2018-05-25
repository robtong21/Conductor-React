import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, { history } from './store'
import registerServiceWorker from './registerServiceWorker';

import { Provider, connect } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>, 
  document.getElementById('root')
);


// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

