import { createStore, applyMiddleware, compose, Store } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { TypeAppState, TypeAppDispatch } from '../types/reducerTypes';


function configureStore(middleware: any[]) {
  const store: Store<TypeAppState, TypeAppDispatch> = createStore(rootReducer, compose(...middleware));
  return store;
}

const middleware = [
  applyMiddleware(thunk),
  ...(process.env.NODE_ENV === 'development' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? [(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()]
    : []),
];

const store: Store<TypeAppState, TypeAppDispatch> = configureStore(middleware);

export default store;
