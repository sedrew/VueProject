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

    <hr>
    <div class="container d-flex justify-content-center">
      <div class="mb-5 col-12 col-sm-7 col-md-7 col-lg-7 col-xl-7">
        <div class="card" :class="darkCard">
          <h3 class="card-header">RLE-Сrypt</h3>
          <div class="card-body">
            <h4 class="card-title">Run-Length-Encoding :</h4>
            <p
              class="card-text"
            >Алгоритм сжатия данных, заменяющий повторяющиеся символы (серии) на один символ и число его повторов.</p>
            <a
              href="https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%B4%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5_%D0%B4%D0%BB%D0%B8%D0%BD_%D1%81%D0%B5%D1%80%D0%B8%D0%B9"
              class="btn btn-primary"
            >Read More</a>
          </div>
        </div>
      </div>
    </div>
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
  computed: {
    darkCard(){
      if(this.$store.state.theme=='Dark'){
        return 'bg-dark'
      }
    }
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
        this.visible=true;
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
