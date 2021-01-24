import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Category from '@/components/Category'
import Home from '@/components/Home/Home.vue'
import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(VueAxios, axios)

Vue.use(Meta, {

    keyName: 'metaInfo', // tên tùy chọn component để vue-meta tìm thông tin meta.
  
    attribute: 'data-vue-meta', // tên thuộc tính để vue-meta thêm vào các tag mà nó giám sát
  
    ssrAttribute: 'data-vue-meta-server-rendered', // tên thuộc tính để vue-meta biết rằng thông tin meta cũng được server-render
  
    tagIDKeyName: 'vmid' // tên thuộc tính để vue-meta sử dụng nhằm xác định là ghi đè hay nạp cho tag
  
  })
  

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
