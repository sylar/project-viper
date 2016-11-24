import { isFunction } from 'lodash'

export const Types = {
  GetCharacter: 'GetCharacter'
}

export const Actions = {
  setCharacter: (character = 'none') => ({
    type: Types.GetCharacter,
    payload: character
  })
}

export const INITIAL_STATE = {
  character: {}
}

const GetCharacter = (state, characterData) => ({ ...INITIAL_STATE, character: characterData })

const reducerMap = {
  [Types.GetCharacter]: GetCharacter
}

export const reducer = (state = INITIAL_STATE, action) => {
  const handler = reducerMap[action.type]
  return isFunction(handler) ? handler(state, action.payload) : state
}
