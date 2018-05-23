import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import regionsReducer from './regionsReducer'
import platformReducer from './platformReducer'
import environmentReducer from './environmentReducer'

const rootReducer = combineReducers({ 
  regionsReducer, 
  platformReducer, 
  environmentReducer,
  routing: routerReducer })

export default rootReducer