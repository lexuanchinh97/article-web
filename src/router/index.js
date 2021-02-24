import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Category from '@/components/Category'
import Home from '@/components/Home/Home.vue'

Vue.use(Router)
Vue.use(VueAxios, axios)




export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/*/',
      name: 'Category',
      component: Category
    }
  ]
})

// export default axios.create({
//   baseURL: "http://localhost:8080"
// })
