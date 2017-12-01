import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import rootReducer from '../state';

const isProduction = process.env.NODE_ENV === 'production';

// Creating store
export default () => {
  let store = null;
  let middleware = null;

  if (isProduction) {
    // In production adding only thunk middleware
    middleware = applyMiddleware(thunk);
  } else {
    // In development mode beside thunk
    // logger and DevTools are added
    middleware = applyMiddleware(thunk, logger);

    // Enable DevTools if browser extension is installed
    if (!process.env.SERVER_RENDER && window.__REDUX_DEVTOOLS_EXTENSION__) {
      middleware = compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__());
    }
  }

  store = createStore(rootReducer, middleware);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../state', () => {
      const nextRootReducer = require('../state/index.js').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
