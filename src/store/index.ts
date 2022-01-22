import { createStore } from 'vuex'
import IPApiService from '@/services/IPApiService/IPApiService'

export default createStore({
  state: {
    IPAdressService: new IPApiService(),
  },
  mutations: {},
  actions: {},
  modules: {},
})
