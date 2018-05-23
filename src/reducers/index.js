import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import dataReducer from './dataReducer'
import platformReducer from './platformReducer'
import environmentReducer from './environmentReducer'
import settingGroupReducer from './settingGroupReducer'

const rootReducer = combineReducers({ 
  dataReducer, 
  platformReducer, 
  environmentReducer,
  settingGroupReducer,
  routing: routerReducer })

export default rootReducer