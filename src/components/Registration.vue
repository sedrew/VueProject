<template>
  <div>
    <b-modal no-close-on-backdrop hide-header-close hide-footer v-model="visible">
      <h2>Sign In</h2>
      <label for="name">Введите ваше Имя</label>
      <input id="name" v-model="name" @input="err.status=false" class="form-control" />
      <label for="password">Придумайте пароль</label>
      <input id="password" v-model="password" class="form-control" />
      <br />
      <slide-up-down :active="err.status">
        <div class="alert alert-danger">
          <strong>{{err.mess}}</strong>
        </div>
      </slide-up-down>
      <br />
      <div class="btn_gr">
        <button @click="close" style="margin:0" class="btn btn-danger">Close</button>
        <button @click="ok" class="btn btn-success">
          Sign In
          <span v-if="connection">
            <b-spinner small label="Small Spinner"></b-spinner>
          </span>
        </button>
      </div>
    </b-modal>
  </div>
</template>



<script>
import axios from "axios";
import { setTimeout } from "timers";
export default {
  data() {
    return {
      name: '',
      password: null,
      visible: true,
      err: {
        status: false,
        mess: null
      },
      connection: false
    };
  },
  methods: {
    ok() {
      if (this.name != "" && this.name.length > 3) {
        this.connection = true;
        axios({
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          url: "http://kdanet.ddns.net/registration",
          data: { name: this.name, password: this.password }
        }).then(response => {
          //Ответ 200-все ок, ответ 201-никнейм занят.
          console.log(response);
          if (response.data == 200) {
            console.log("Вы успешно зарегистрировались.");
            setTimeout(() => {
              this.$emit("closeModal", false);
              this.$store.commit("loginIn", this.name);
            }, 2000);
          } else {
            this.err.status = true;
            this.err.mess='This name is already taken!'
          }
        });
      } else {
        this.err.status=true;
        this.err.mess='Your name must be longer than 2 characters!'
      }
    },
    close() {
      this.$emit("closeModal", false);
    }
  }
};
</script>


<style scoped>
label {
  color: black !important;
}
.btn_gr {
  display: flex;
  justify-content: space-between;
}
</style>
