import { BASE_URL } from "@/config"

const API = {
  all: async(): Promise<any> => {
    const response = await fetch(`${BASE_URL}/api/all`)
    const data = await response.json()
    return data
  },
  getDepartments: async(): Promise<any> => {
    const response = await fetch(`${BASE_URL}/api/departamentos`)
    const data = await response.json()
    return data
  },
  getProvincias: async(departamentoInei: string): Promise<any> => {
    const response = await fetch(`${BASE_URL}/api/provincias/${departamentoInei}`)
    const data = await response.json()
    return data
  },
  getDistritos: async(provinciaInei: string): Promise<any> => {
    const response = await fetch(`${BASE_URL}/api/distritos/${provinciaInei}`)
    const data = await response.json()
    return data
  }
}

export default API