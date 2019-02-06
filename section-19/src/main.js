import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate);

axios.defaults.baseURL ='';
// axios.defaults.headers.common['Authorization'] = 'Small-Auth';
axios.defaults.headers.get['Accepts'] = 'application/json';

const reqInter = axios.interceptors.request.use(data=>{
  console.log('Request Interceptor', data);
  return data;
});

const resInter = axios.interceptors.response.use(data=>{
  console.log('Response Interceptor', data);
  return data;
});

axios.interceptors.request.eject(reqInter);
axios.interceptors.response.eject(resInter);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
