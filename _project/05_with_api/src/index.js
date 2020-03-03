import React from 'react'
import ReactDOM from 'react-dom'
import './style/index.css'
import { Provider } from 'react-redux'
import App from './App'
import * as serviceWorker from './serviceWorker'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3200/api';
axios.defaults.headers.common['X-User-Email'] = 'daniel@polo.sh';
// axios.defaults.headers.common['X-User-Token'] = 'RPmixZSk3YbyNX4T2H4Y';
axios.defaults.headers.common['X-User-Token'] = 'xsLExFXmRVSDnACrrjDf';

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
