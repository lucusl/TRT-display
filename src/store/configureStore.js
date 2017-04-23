import { createStore, compose, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'
import rootReducer from '../reducers';

export default function storeConfig(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose (
    	applyMiddleware(ReduxPromise),
    	window.devToolsExtension ? window.devToolsExtension() : undefined
    	)
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}