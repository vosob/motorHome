import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './redux/store.js';
import App from './App.jsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <BrowserRouter basename="/motorHome/">
      <App />
    </BrowserRouter>
    {/* </React.StrictMode> */}
  </Provider>
);
