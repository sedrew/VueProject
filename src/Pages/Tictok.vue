<template>
  <div>
    <div class="container cont">
      <h1>Tic-Tac-Toe</h1>
    </div>
    <div class="container cont_btn">
      <button @click="mode='one'" class="btn btn-primary">One Player</button>
      <button @click="mode='two'" class="btn btn-info">Two Player</button>
    </div>
    <div class="container cont">
      <div class="gameField">
        <div class="block" @click="check()" v-for="(item,index) in 9" :key="index"></div>
      </div>
    </div>
  </div>
</template>


<script>
import { setTimeout } from "timers";
export default {
  data() {
    return {
      hod: 0,
      mode: "one"
    };
  },
  computed: {},
  methods: {
    check() {
      console.log(this.mode);

      if (event.target.innerHTML == "X" || event.target.innerHTML == "O") {
        return 0;
      }

      if (this.mode == "two") {
        if (this.hod % 2) {
          event.target.innerHTML = "X";
        } else {
          event.target.innerHTML = "O";
        }
        this.hod++;
        setTimeout(() => {
          this.checkWin();
        }, 0);
      }
      if (this.mode == "one") {
        event.target.innerHTML = "X";
        this.hod++;
        setTimeout(() => {
          this.checkWin();
        }, 0);
        this.nextStep();
      }
    },
    nextStep() {
      let blocks = document.getElementsByClassName("block");
      console.log(blocks[0].innerHTML);
      top: for (let i = 0; i < 9; i++) {
        let a = 0 + Math.round(Math.random() * (8 - 0));
        if (blocks[a].innerHTML == "") {
          blocks[a].innerHTML = "O";
          this.hod++;
          break;
        } else {
          continue top;
        }
      }
      setTimeout(() => {
        this.checkWin();
      }, 0);
    },
    checkWin() {
      let blocks = document.getElementsByClassName("block");
      console.log(blocks);
      //Логика для крестиков
      if (
        (blocks[0].innerHTML == "X" &&
          blocks[1].innerHTML == "X" &&
          blocks[2].innerHTML == "X") ||
        (blocks[3].innerHTML == "X" &&
          blocks[4].innerHTML == "X" &&
          blocks[5].innerHTML == "X") ||
        (blocks[6].innerHTML == "X" &&
          blocks[7].innerHTML == "X" &&
          blocks[8].innerHTML == "X") ||
        (blocks[0].innerHTML == "X" &&
          blocks[3].innerHTML == "X" &&
          blocks[6].innerHTML == "X") ||
        (blocks[1].innerHTML == "X" &&
          blocks[4].innerHTML == "X" &&
          blocks[7].innerHTML == "X") ||
        (blocks[2].innerHTML == "X" &&
          blocks[5].innerHTML == "X" &&
          blocks[8].innerHTML == "X") ||
        (blocks[0].innerHTML == "X" &&
          blocks[4].innerHTML == "X" &&
          blocks[8].innerHTML == "X") ||
        (blocks[2].innerHTML == "X" &&
          blocks[4].innerHTML == "X" &&
          blocks[6].innerHTML == "X")
      ) {
        this.hod = 0;
        for (let i = 0; i < 9; i++) {
          blocks[i].innerHTML = null;
        }
        alert("Руддщ");
      } else if (this.hod > 8) {
        this.hod = 0;
        alert("Ничья");
        for (let i = 0; i < 9; i++) {
          blocks[i].innerHTML = null;
        }
      }
      //Логика для ноликов
      if (
        (blocks[0].innerHTML == "O" &&
          blocks[1].innerHTML == "O" &&
          blocks[2].innerHTML == "O") ||
        (blocks[3].innerHTML == "O" &&
          blocks[4].innerHTML == "O" &&
          blocks[5].innerHTML == "O") ||
        (blocks[6].innerHTML == "O" &&
          blocks[7].innerHTML == "O" &&
          blocks[8].innerHTML == "O") ||
        (blocks[0].innerHTML == "O" &&
          blocks[3].innerHTML == "O" &&
          blocks[6].innerHTML == "O") ||
        (blocks[1].innerHTML == "O" &&
          blocks[4].innerHTML == "O" &&
          blocks[7].innerHTML == "O") ||
        (blocks[2].innerHTML == "O" &&
          blocks[5].innerHTML == "O" &&
          blocks[8].innerHTML == "O") ||
        (blocks[0].innerHTML == "O" &&
          blocks[4].innerHTML == "O" &&
          blocks[8].innerHTML == "O") ||
        (blocks[2].innerHTML == "O" &&
          blocks[4].innerHTML == "O" &&
          blocks[6].innerHTML == "O")
      ) {
        this.hod = 0;
        for (let i = 0; i < 9; i++) {
          blocks[i].innerHTML = null;
        }
        alert("Победили 0");
      } else if (this.hod > 8) {
        this.hod = 0;
        alert("Ничья");
        for (let i = 0; i < 9; i++) {
          blocks[i].innerHTML = null;
        }
      }
    }
  },
  beforeUpdate() {
    console.log("Обновлено");
  }
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css?family=Quicksand&display=swap");
.gameField {
  width: 330px;
  height: 300px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.block {
  margin: 2px;
  font-family: "Quicksand", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  text-transform: uppercase;
  font-size: 50px;
  border:1px solid rgb(232,232,232,1);
  border-radius: 5px;
}
</style>



