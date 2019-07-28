<template>
  <div>
    <b-navbar
      toggleable="lg"
      :type="$store.getters.theme.themeNav.type"
      :variant="$store.getters.theme.themeNav.color"
    >
      <b-navbar-brand>AgreGator</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="/index" class="nav-link">Home</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/RLE" class="nav-link">RLE-Crypt</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/anagrams" class="nav-link">Anagrams</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/palindrome" class="nav-link">Palindrome</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/film" class="nav-link">Film-Search</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/chat" class="nav-link">Chat</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/todo" class="nav-link">TODO</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/tictok" class="nav-link">Tic-Tac-Toe</router-link>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item right>
            <button :style="{color:activeColor}" class="btn">{{nameLogin}}</button>
            <button
              class="btn"
              :class="$store.getters.theme.themeNav.btn"
              @click="themeChange"
            >{{$store.getters.theme.mode}}</button>
            <button class="btn" :class="loginBtnColor" @click="loginIn">{{loginBtn}}</button>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <login @closeModal="login.showModal=false" v-if="login.showModal"></login>
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  data() {
    return {
      login: {
        showModal: false
      }
    };
  },
  methods: {
    //Логика смены темного и светлого режима
    themeChange() {
      console.log(this.$store.getters.theme.mode);
      if (this.$store.getters.theme.mode == "White") {
        this.$store.commit("changeTheme");
        
      } else if (this.$store.getters.theme.mode == "Dark") {
        this.$store.commit("changeTheme");
       
      }
    },
    loginIn() {
      if (this.$store.getters.login == 0) {
        this.login.showModal = true;
      } else {
        console.log("Вы уже зашли");
        this.$store.commit("loginIn");
      }
    }
  },
  computed: {
    nameLogin() {
      //Возвращенеи из стора Никнейма
      return this.$store.getters.name;
    },
    activeColor() {
      //Вычисление какой цвет использовать для Никнейма в навбаре
      if (this.$store.getters.theme.mode == "White") {
        return "black";
      } else return "white";
    },
    loginBtn() {
      //Отслеживание надписи Login или Logout
      if (this.$store.getters.login == 1) {
        return "Logout";
      } else {
        return "Login";
      }
    },
    loginBtnColor() {
      if (this.$store.getters.login == 1) {
        return "btn-danger";
      } else {
        return "btn-success";
      }
    }
  }
};
</script>

<style>
.router-link-active {
  font-weight: 600;
}

::-webkit-scrollbar {
  width: 1px;
}

::-webkit-scrollbar-track {
  background: #757474;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: #969393;
  border-radius: 5px;
  height: 40px;
}
</style>




      