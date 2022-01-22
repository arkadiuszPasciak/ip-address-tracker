import { createStore } from 'vuex'
import IPApiService from '@/services/IPApiService/IPApiService'

export default createStore({
  state: {
    IPApiService: new IPApiService(),
  },
  mutations: {},
  actions: {},
  modules: {},
})
