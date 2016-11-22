import { server } from '../config'
import { create } from 'apisauce'

const api = create({
  baseURL: server,
})

async function getTest (name) {
  return await api.get(`/foo/${name}`)
}

export default getTest
