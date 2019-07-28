import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  mutations: {
    changeTheme(state) {
      if (state.theme.mode == 'White') {
        state.theme.mode = 'Dark';
        state.theme.themeNav.type = 'dark';
        state.theme.themeNav.color = 'dark';
        state.theme.themeNav.btn = 'btn-dark';
        document.body.className = "body_dark";

      } else {
        state.theme.mode = 'White';
        state.theme.themeNav.type = 'light';
        state.theme.themeNav.color = 'light';
        state.theme.themeNav.btn = 'btn-light';
        document.body.className = "";
      }
    },

    loginIn(state, payload) {
      if (state.login == 0) {
        state.name = payload
        state.login = 1;
      } else {
        state.name = 'Guest_' + Math.round(Math.random() * (100 - 0) + 0);
        state.login = 0;
      }
    }
  },
  state: {
    theme: {
      mode: 'White',
      themeNav: {
        type: "light",
        color: "light",
        btn: "btn-dark"
      },
    },
    name: 'Guest_' + Math.round(Math.random() * (100 - 0) + 0),
    login: 0,
  },
  getters: {
    login(state) {
      return state.login;
    },
    name(state) {
      return state.name;
    },
    theme(state) {
      return state.theme;
    }
  },
})
