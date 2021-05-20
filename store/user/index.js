import { login } from '@/api'

export const state = () => ({
  token: '',
  openId: '',
  user: {},
})

export const getters = {
  hasLogged(state) {
    return !!state.token
  },
  getToken(state) {
    return state.token
  },
  getOpenId(state) {
    return state.openId
  },
  getUser(state) {
    return state.user
  },
}

export const mutations = {
  LOGIN(state, payload) {
    state.token = payload.token
    state.openId = payload.openId
    state.user = payload.user
  },
  LOGOUT(state) {
    state.token = ''
    state.openId = ''
    state.user = {}
  },
}

export const actions = {
  LOGIN({ commit }, params) {
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     const payload = {
    //       token: 'faketoken',
    //       user: {
    //         username: 'Alan Walker',
    //       },
    //     }
    //     commit('LOGIN', payload)
    //     resolve(payload)
    //   }, 500)
    // })
    console.log('user/LOGIN', params)
    return login(this.$axios, params)
      .then((res) => {
        if (res.data.code === '0') {
          const payload = res.data.data
          commit('LOGIN', payload)
          return payload
        } else {
          return Promise.reject(res)
        }
      })
      .catch((err) => Promise.reject(err))
  },
  LOGOUT({ commit }) {
    commit('LOGOUT')
    return Promise.resolve(true)
  },
}
