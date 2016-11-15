import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as randomNumberReducer } from './RandomNumber.redux'

export default combineReducers({
  randomNumber: randomNumberReducer,
  routing: routerReducer
})
