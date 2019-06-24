<template>
  <div>
    <div class="container cont">
      <h1>Palindrome</h1>
      <br>
      <input class="form-control col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5" v-model="texts" placeholder="Введите строку.">
    </div>
    <div class="container cont_btn">
      <button type="button" class="btn btn-danger">Reset</button>
      <button type="button" @click="check" class="btn btn-success">Check</button>
    </div>
    <br>
    <slide-up-down :active="visible">
      <div
        class="col-10 col-sm-5 col-md-5 col-lg-5 col-xl-5 container alert"
        :class="mess.class"
        role="alert"
      >
        <h4 class="alert-heading">{{mess.strong}}</h4>
        {{mess.text}}
      </div>
    </slide-up-down>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      texts: "",
      mess: {
        strong: "",
        text: "",
        class: ""
      }
    };
  },
  computed: {
    test(){
      return this.$store.state.name
    }
  },
  methods: {
    check() {
      var str = this.texts;
      if (str == "" || str.length < 2) {
        this.mess.strong = "Sorry";
        this.mess.text = "Палиндром не может быть меньше 2-ух символов";
        this.mess.class = "alert-warning";
        this.visible = true;
      } else if (
        str
          .toLowerCase()
          .split("")
          .reverse()
          .join("") == str
      ) {
        this.mess.strong = "Yes";
        this.mess.text = "Это Палиндром";
        this.mess.class = "alert-success";
        this.visible = true;
      } else {
        this.mess.strong = "No";
        this.mess.text = "Это Не Палиндром";
        this.mess.class = "alert-danger";
        this.visible = true;
      }
    }
  }
};
</script>

<style>
.cont {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}

.cont_btn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.btn {
  margin-left: 20px;
}
</style>


