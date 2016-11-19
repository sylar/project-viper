import { isFunction, toNumber } from 'lodash'

export const Types = {
  Generate: 'randomNumber.generate'
}

export const Actions = {
  generate: () => ({ type: Types.Generate })
}

export const INITIAL_STATE = {
  value: 0
}

const generate = (state) => ({...INITIAL_STATE, value: toNumber(Math.random().toFixed(3)) })

const reducerMap = {
  [Types.Generate]: generate
}

export const reducer = (state = INITIAL_STATE, action) => {
  const handler = reducerMap[action.type]
  return isFunction(handler) ? handler(state) : state
}
