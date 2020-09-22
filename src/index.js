import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import store from './store/index'
import AppContainer from './containers/AppContainer'
import { getTodos } from './actions/index';



  store.dispatch(getTodos())
ReactDOM.render(  
  <React.StrictMode>
  <Provider store={store}>
      <AppContainer />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

