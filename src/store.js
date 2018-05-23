import { createStore } from 'redux'
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk'
import { applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
// import { browserHistory } from 'react-router'
// import { BrowserRouter } from 'react-router-dom'

import rootReducer from './reducers/index'

export const history = createHistory()

const env = {
  environmentURL: 'http://devplatform.rightnow.org'
}

const enhancers = []
const middleware = [
  thunk.withExtraArgument(env),
  routerMiddleware(history)
]

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const defaultState = {
  
}

const store = createStore(rootReducer, defaultState, composedEnhancers)

// export const history = syncHistoryWithStore(BrowserRouter, store)

export default store