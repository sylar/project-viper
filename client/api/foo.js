import api from './common'

export async function getTest (name) {
  return await api.get(`/foo/${name}`)
}

export async function apiGetCharacter (number) {
  return await api.get(`/foo/character/${number}`)
}
