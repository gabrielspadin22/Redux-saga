import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// -------------- REDUX -----------------------------

import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import MyReducer from './reducer';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({MyReducer});
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

// --------------------------------------------------


const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
