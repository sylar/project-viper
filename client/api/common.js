import { server } from '../config'
import { create } from 'apisauce'

const api = create({
  baseURL: server,
})

if (process.env.NODE_ENV !== 'production') {
  api.addMonitor(console.tron.apisauce)
}

export default api
