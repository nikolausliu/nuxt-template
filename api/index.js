export const test = (axios, mobile) => {
  return axios.get(`/index/${mobile}`)
}

export const login = (axios, params) => {
  return axios.post('/login', params)
}
