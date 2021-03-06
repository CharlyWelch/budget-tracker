import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store';
import './styles/reset.css';
import './styles/reset.css';


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);