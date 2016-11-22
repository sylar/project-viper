import { isFunction, toNumber } from 'lodash'

export const Types = {
  SetMessage: 'message.set'
}

export const Actions = {
    setMessage: (message) => ({
      type: Types.SetMessage,
      payload: message
    })
}

export const INITIAL_STATE = {
  value: 'Click a button 😊'
}

const setMessage = (state, message) => ({ ...INITIAL_STATE, value: message })

const reducerMap = {
  [Types.SetMessage]: setMessage
}

export const reducer = (state = INITIAL_STATE, action) => {
  const handler = reducerMap[action.type]
  return isFunction(handler) ? handler(state, action.payload) : state
}
