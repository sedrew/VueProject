<template>
  <div>
    <b-navbar toggleable="lg" :type="themeNav.type" :variant="themeNav.color">
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
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item right>
            <button :style="{color: activeColor}" class="btn" >{{nameLogin}}</button>
            <button
              class="btn"
              :class="themeNav.btn"
              @click="themeChange"
            >{{this.$store.state.theme}}</button>
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
        showModal: false,
        text: "Login"
      },
      themeNav: {
        type: "light",
        color: "light",
        btn: "btn-dark"
      }
    };
  },
  methods: {
    //Логика смены темного и светлого режима
    themeChange() {
      if (this.$store.state.theme == "White" || this.$store.state.theme == "") {
        //Изменение Vuex темы,для дальнейшей работы background
        this.$store.state.theme = "Dark";
        //Изменение Vuex типа,для дальнейшей работы со цветом текста в навбаре
        this.themeNav.type = "dark";
        //Изменение Vuex типа,для дальнейшей работы со цветом текста на всей странице
        this.themeNav.color = "dark";
        //Изменение Vuex типа,для дальнейшей работы с кнопкой смены темы
        this.themeNav.btn = "btn-light";
        //Добавление body класса с темной темой, класс прописан в App.vue
        document.body.className = "body_dark";
      } else if (this.$store.state.theme == "Dark") {
        this.$store.state.theme = "White";
        this.themeNav.type = "light";
        this.themeNav.color = "light";
        this.themeNav.btn = "btn-dark";
        document.body.className = "";
      }
    },
    loginIn() {
      if(this.$store.state.login==0) {
        this.login.showModal=true;
      } else {
        console.log("Вы уже зашли");
        this.$store.state.login=0;
        this.$store.state.name='Guest_'+Math.round(Math.random()*(100-0)+0);
      }
    }
  },
  computed: {
    nameLogin() {
      //Возвращенеи из стора Никнейма
      return this.$store.state.name;
    },
    activeColor() {
      //Вычисление какой цвет использовать для Никнейма в навбаре
      if (this.$store.state.theme == "White" || this.$store.state.theme == "") {
        return "black";
      } else return "white";
    },
    loginBtn(){ //Отслеживание надписи Login или Logout
      if(this.$store.state.login==1) {
        return this.login.text="Logout"
      } else {
        return this.login.text="Login"
      }
    },
    loginBtnColor() {
       if(this.$store.state.login==1) {
        return "btn-danger"
      } else {
        return "btn-success"
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




      