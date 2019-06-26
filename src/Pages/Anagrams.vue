<template>
  <div>
    <div class="container cont">
      <h1>Anagrams</h1>
      <br>
      <input class="form-control col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5" @click="visible=false" v-model="str1" id="str" placeholder="Введите строку.">
      <br>
      <input
        class="form-control col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5"
        id="str2"
        v-model="str2"
        placeholder="Введите вторую строку."
      >
    </div>
    <div class="container cont_btn">
      <button type="button"  @click="reset" class="btn btn-danger">Reset</button>
      <button type="button" @click="check" class="btn btn-success">Check</button>
    </div>
    <br>
    <slide-up-down :active="visible">
      <div class="col-10 col-sm-5 col-md-5 col-lg-5 col-xl-5 container alert" :class="alertClass" id="true" role="alert">
        <h4 class="alert-heading">{{span}}</h4>
        {{text}}
      </div>
    </slide-up-down>
    <card></card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      str1: "",
      str2: "",
      text: "",
      visible: false,
      span: "",
      text: "",
      alertClass: ""
    };
  },
  methods: {
    check() {
      console.log(1);
      const transform = str =>
        str
          .toLowerCase()
          .split("")
          .filter(function(item){ return item!=" ";})
          .sort()
          .join("");
      if (transform(this.str1) == transform(this.str2) && this.str1!="" && this.str2!="") {
        this.text = "Это анаграмы!";
        this.span="Отлично!";
        this.alertClass="alert-success";
        this.visible = true;
      } else if (this.str1=="" || this.str2=="" || transform(this.str1) != transform(this.str2) ) {
        this.text = "Это не Анаграмы!";
        this.span="Печально!";
        this.alertClass="alert-danger";
        this.visible = true;
      }
    },
    reset() {
      this.str1="";
      this.str2="";
    }
  }
};
</script>

<style scoped>
.cont {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
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
