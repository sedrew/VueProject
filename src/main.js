
import Vue from 'vue'
import App from './App.vue'

import Nav from './components/Navbar.vue'
Vue.component('navbar', Nav)
import Login from './components/Login.vue'
Vue.component('login', Login)
import Card from './components/Card.vue'
Vue.component('card', Card);
import Test from './components/Test.vue'
Vue.component('test',Test)
import Registration from './components/Registration.vue'
Vue.component('registration',Registration)
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
import About from './Pages/About.vue'
Vue.component('about', About)
import Todo from './Pages/Todo.vue'
Vue.component('todo', Todo)
import Tictok from './Pages/Tictok.vue'
Vue.component('tictok', Tictok)

/////////////////////////////////////////////////////
//Подключение разных видов бутстрапа

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
import VueSocketIO from 'vue-socket.io'
Vue.use(new VueSocketIO({
  debug: false,
  connection: 'http://kdanet.ddns.net',
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  }
}))



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
    { path: '/test', component: Test },
    { path: '/tictok', component: Tictok },
    { path: '/todo', component: Todo },
    { path: '/about', component: About },
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