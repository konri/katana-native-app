import React from 'react';
import ReactDOM from 'react-dom';
import './App.global.css';

// import 'bootstrap/dist/css/bootstrap.min.css';

import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducers from './store/rootReducer';

import App from './view/pages/MainPage/App';

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
