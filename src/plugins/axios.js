import Vue from 'vue'
import axios from 'axios'

Vue.use({
  install(Vue) {
    Vue.prototype.axios = axios.create({
      baseURL: 'https://houseproto-back.herokuapp.com/',
      headers: {
        'Access-Control-Allow-Origin': 'null',
        'Content-Type': 'application/json',
      }
    })

    Vue.prototype.axios.interceptors.request.use(config => {
      return config
    }, error => Promise.reject(error))

    Vue.prototype.axios.interceptors.response.use(res => {
      return res
    }, error => Promise.reject(error))
  }
})
