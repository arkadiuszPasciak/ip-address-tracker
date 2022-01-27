import { createStore } from 'vuex'
import GoogleMapsService from '@/services/GoogleMapsService/GoogleMapsService'
import IPApiService from '@/services/IPApiService/IPApiService'

export default createStore({
  state: {
    GoogleMapsService: new GoogleMapsService(),
    IPApiService: new IPApiService(),
  },
  mutations: {},
  actions: {},
  modules: {},
})
