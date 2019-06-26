<template>
  <div>
    <div class="container cont">
      <h1>RLE-crypt</h1>
      <br>
      <input
        class="form-control col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5"
        v-model="str1"
        id="str"
        @click="visible=false"
        placeholder="Введите строку,которую хотите сжать."
      >
      <br>
      <input
        v-model="str2"
        class="form-control col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5"
        id="strResult"
        placeholder="Тут появится сжатая строка."
      >
    </div>
    <div class="container cont_btn">
      <button type="button" v-on:click="reset" class="btn btn-danger">Reset</button>
      <button type="button" @click="crypt" class="btn btn-success">Start crypting</button>
      <button type="button" @click="decrypt" class="btn btn-primary">Decrypt</button>
    </div>
    <br>
    <slide-up-down :active="visible">
      <div
        class="col-10 col-sm-5 col-md-5 col-lg-5 col-xl-5 container alert alert-danger"
        id="true"
        role="alert"
      >
        <h4 class="alert-heading">Sorry</h4>Обязательно введите строку.
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
      visible: false
    };
  },
  methods: {
    reset() {
      this.str1 = "";
      this.str2 = "";
    },
    crypt() {
      if (this.str1 != "") {
        let str = this.str1;
        let arr = str.match(/(.)\1*/g);
        let arrRes = [];
        arr.forEach(function(item) {
          let arrMid = item.split("");
          if (item.length > 1) {
            arrRes.push(arrMid[0], item.length);
          } else arrRes.push(arrMid[0], "");
        });
        this.str2 = arrRes.join("");
        return 1;
      } else {
        this.visible = true;
      }
    },
    decrypt() {
      if (this.str1 != "") {
        let str = this.str1;
        let arr = str.split("");
        let arrRes = [];
        let x;
        for (let i = 0; i < arr.length; i++) {
          if (isNaN(arr[i])) {
            x = arr[i];
            if (typeof arr[i + 1] === "string" || arr[i + 1] == undefined) {
              arrRes.push(x);
            }
            let sum = arr[i + 1];
            if (!isNaN(arr[i + 2])) {
              let one = arr[i + 1];
              let two = arr[i + 2];
              sum = one + two;
            }
            for (let j = 1; j < sum; j++) {
              arrRes.push(x);
            }
          } else if (typeof arr[i] === typeof 1) {
            console.log("Это число");
          }
        }
        this.str2 = arrRes.join("");
        return 1;
      } else {
        this.visible = true;
      }
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

.form-control {
  height: 24px;
  border-radius: 10px;
}
</style>
