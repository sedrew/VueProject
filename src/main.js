
import Vue from 'vue'
import App from './App.vue'



import Nav from './components/Navbar.vue'
Vue.component('navbar', Nav)
import Login from './components/Login.vue'
Vue.component('login', Login)
//Подключение стандартных модулей,которые я сам сделал 
import Index from './Pages/Index.vue'
Vue.component('Index', Index)
import RLE from './Pages/RLE.vue'
Vue.component('RLE', RLE)
import Anagrams from './Pages/Anagrams.vue'
Vue.component('Anagrams', Anagrams)
import Film from './Pages/Film.vue'
Vue.component('Film', Film)
import Chat from './Pages/Chat.vue'
Vue.component('Chat', Chat)
import Palindrome from './Pages/Palindrome.vue'
Vue.component('Palindrome', Palindrome)
/////////////////////////////////////////////////////
//Подключение разных видов бутстрапа
import BootstrapVue from 'bootstrap-vue'



Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)



// import 'bootstrap-vue/dist/bootstrap-vue.css'
// Vue.use(BootstrapVue)
/////////////////////////////////////////////////
//Подключение графической библиотеки Uimini
// import Uimini from 'uimini/dist/css/uimini.css'
// Vue.use(Uimini)
///////////////////////////////////////
//Подключение VueRouter
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//////////////////////////////////////////////
//Подключение модуля слайда блоков
import SlideUpDown from 'vue-slide-up-down'
Vue.use(SlideUpDown)
Vue.component('slide-up-down', SlideUpDown)
/////////////////////////////////////////////

//Создание путей роутера.
var router = new VueRouter({
  routes: [
    { path: '/palindrome', component: Palindrome },
    { path: '/chat', component: Chat },
    { path: '/film', component: Film },
    { path: '/index', component: Index }, //Путь до главной страницы
    { path: '/RLE', component: RLE, }, //Путь до RLE
    { path: '/anagrams', component: Anagrams },
    { path: '*', redirect: '/index' } //Переброс на главную по умолчанию
  ]
})
//////////////////////////////////

import store from './store/index'

Vue.config.productionTip = true


new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})