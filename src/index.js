import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/Components/App/App';
import * as serviceWorker from './serviceWorker';
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { RootReducer } from './reducers/index';
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(RootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
