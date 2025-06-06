import React from 'react'
import ReactDOM from 'react-dom'
import {applyMiddleware, createStore} from 'redux'
import {createBrowserHistory} from 'history/cjs/history'
import thunk from 'redux-thunk'
import {ConnectedRouter, routerMiddleware} from 'connected-react-router'
import './main.css'
import Layout from 'containers/layout'
import createRootReducer from 'reducers'
import {composeWithDevTools} from 'redux-devtools-extension'
import {Provider} from 'react-redux'
import routes from 'routes'

const history = createBrowserHistory()
const middlewares = [thunk, routerMiddleware(history)]
const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(...middlewares))
)
document.write('Hello React/Redux!')

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>{routes}</ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
