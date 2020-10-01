import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios

axios.defaults.baseURL = process.env.API
axios.defaults.headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}
