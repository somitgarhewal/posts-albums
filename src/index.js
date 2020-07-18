import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import Reducer from '../src/redux/reducers/reducer'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { getAllUser, getAllPost, getAllAlbums } from './redux/actions/action';

export const store = createStore(Reducer,applyMiddleware(thunkMiddleware));
store.dispatch(getAllUser())
store.dispatch(getAllPost())
store.dispatch(getAllAlbums())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
