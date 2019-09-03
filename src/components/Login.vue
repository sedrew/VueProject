<template>
  <div>
    <b-modal no-close-on-backdrop hide-header-close hide-footer v-model="visible">
      <h2>Sign Up</h2>
      <label for="name">Введите ваше Имя</label>
      <input id="name" v-model="name" class="form-control" />
      <label for="password">Введите ваш пароль.</label>
      <input id="password" v-model="password" class="form-control" />
      <br />
      <slide-up-down :active="err">
        <div class="alert alert-danger">
          <strong>Wrong password</strong>
        </div>
      </slide-up-down>
      <br>
      <div class="btn_gr">
        <button @click="close" style="margin:0" class="btn btn-danger">Close</button>
        <button @click="ok" class="btn btn-success">Save</button>
      </div>
    </b-modal>
  </div>
</template>



<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      password: null,
      visible: true,
      err:false
    };
  },
  methods: {
    ok() {
      axios({
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        url: "http://kdanet.ddns.net/login",
        data: { name: this.name, password: this.password }
      }).then(response => {
        //Если ответ 200-все ок, если нет, то неправильно введен пароль.
        console.log(response.data);
        if (response.data == 200) {
          this.$store.commit("loginIn", this.name);
          this.$emit("closeModal", false);
        } else {
          this.err=true;
        }
      });
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
