import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer, saga } from '.';

function configureStore() {
  const sagaMiddleWare = createSagaMiddleWare();
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleWare)),
  );
  sagaMiddleWare.run(saga);
  //
  return store;
}

export default configureStore();
