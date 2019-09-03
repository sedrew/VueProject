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
            <router-link to="/home" class="nav-link">Home</router-link>
          </b-nav-item>
          <b-nav-item>
            <b-nav-item-dropdown text="Teech">
              <b-dropdown-item>
                <router-link to="/RLE" class="nav-link">RLE-Crypt</router-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <router-link to="/palindrome" class="nav-link">Palindrome</router-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <router-link to="/anagrams" class="nav-link">Anagrams</router-link>
              </b-dropdown-item>
            </b-nav-item-dropdown>
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
            <button :style="{color:activeColor}" class="btn">Users Online: {{users}}</button>
            <button :style="{color:activeColor}" class="btn">{{nameLogin}}</button>
            <button
              class="btn"
              :class="$store.getters.theme.themeNav.btn"
              @click="themeChange"
            >{{$store.getters.theme.mode}}</button>

            <button @click="signIn" v-if="$store.getters.login==0" class="btn btn-primary">Sign In</button>

            <button class="btn" :class="loginBtnColor" @click="loginIn">{{loginBtn}}</button>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <registration @closeModal="registration.showModal=false" v-if="registration.showModal"></registration>
    <login @closeModal="login.showModal=false" v-if="login.showModal"></login>
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  data() {
    return {
      registration : {
        showModal:false
      },
      login: {
        showModal: false
      },
      users: 0
    };
  },
  sockets: {
    connect: () => {
      console.log("Socket Navbar: подключение к счетчику прошло успешно");
    }
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
    },
    signIn() {
      if(this.$store.getters.login==0) {
        this.registration.showModal = true;
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
        return "Sign Up";
      }
    },
    loginBtnColor() {
      if (this.$store.getters.login == 1) {
        return "btn-danger";
      } else {
        return "btn-success";
      }
    }
  },
  mounted() {
    if (this.$store.getters.theme.mode == "Dark") {
      let x = document.querySelector(".dropdown-menu");
      x.style.backgroundColor = "#343a40";
    }
  },
  created() {
    this.sockets.subscribe("usersCount", data => {
      this.users = data;
    });
  },
  updated() {
    //Смена темной темы
    if (this.$store.getters.theme.mode == "Dark") {
      let x = document.querySelector(".dropdown-menu");
      x.style.backgroundColor = "#343a40";
    } else {
      let x = document.querySelector(".dropdown-menu");
      let y = document.querySelector(".dropdown-menu .nav-link");
      x.style.backgroundColor = "#FFFFFF";
      y.style.color = "rgba(255, 255, 255, 0.5) !important";
    }
  }
};
</script>

<style>
.router-link-active {
  font-weight: 600;
}

.dropdown-item:hover {
  background-color: rgba(255, 255, 255, 0) !important;
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




      