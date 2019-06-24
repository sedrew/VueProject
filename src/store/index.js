import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        theme: "White",
        name: 'Guest_'+Math.round(Math.random()*(100-0)+0),
        login:0,
    }
})
