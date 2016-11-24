import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as randomNumberReducer } from './RandomNumber.redux'
import { reducer as messageReducer } from './Message.redux'
import { reducer as starWarsReducer } from './StarWars.redux'

export default combineReducers({
  randomNumber: randomNumberReducer,
  message: messageReducer,
  starWars: starWarsReducer,
  routing: routerReducer
})
