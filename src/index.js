import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux'; // switch for ApolloProvider
import 'babel-polyfill';

import configureStore from './config/store';
import App from './view/index.js';

// Load SCSS
import './index.scss';

const store = configureStore();

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

// Render app
render(App);

if (module.hot) {
  module.hot.accept('./view/', () => {
    const NewClient = require('./view/index.js').default;

    render(NewClient);
  });
}
