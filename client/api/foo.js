import api from './common'

async function getTest (name) {
  return await api.get(`/foo/${name}`)
}

export default getTest
