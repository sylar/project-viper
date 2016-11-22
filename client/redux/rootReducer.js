import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as randomNumberReducer } from './RandomNumber.redux'
import { reducer as messageReducer } from './Message.redux'

export default combineReducers({
  randomNumber: randomNumberReducer,
  message: messageReducer,
  routing: routerReducer
})
