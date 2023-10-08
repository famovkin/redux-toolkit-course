import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';
import { rootReducer } from './vanillaRedux/reducers';
import { Provider } from 'react-redux';

// const store = createStore(rootReducer);
import {store} from './toolkitRedux/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
