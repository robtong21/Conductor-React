import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import regionsReducer from './regionsReducer'

const rootReducer = combineReducers({ regionsReducer, routing: routerReducer })

export default rootReducer