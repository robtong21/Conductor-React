import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
// import { browserHistory } from 'react-router'
// import { BrowserRouter } from 'react-router-dom'

import rootReducer from './reducers/index'

export const history = createHistory()

// const middleware = routerMiddleware(history)

const defaultState = {
  // regions: [],
}

const store = createStore(rootReducer, defaultState)

// export const history = syncHistoryWithStore(BrowserRouter, store)

export default store