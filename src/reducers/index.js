import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import dataReducer from './dataReducer'
import settingsReducer from './settingsReducer'
import environmentReducer from './environmentReducer'

const rootReducer = combineReducers({ 
  dataReducer, 
  settingsReducer, 
  environmentReducer,
  routing: routerReducer })

export default rootReducer