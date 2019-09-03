<template>
  <div>
    <div class="container cont">
      <h1>Tic-Tac-Toe</h1>

      <slide-up-down class="text-center" :active="visibleRestart">
        <h4>{{winner}}</h4>
        <button class="reload" @click="restarting">Restart</button>
      </slide-up-down>
    </div>

    <div class="container cont">
      <div class="gameField">
        <div class="block" @click="check()" v-for="(item,index) in 9" :key="index"></div>
      </div>
      <br />
      <div class="container cont_btn">
        <div style="margin-right: 10px;">Two Player</div>
        <div class="switch-btn" @click="addClass"></div>
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
      mode: "one",
      winner: null,
      visibleRestart: false,
      visibleParams: false
    };
  },
  computed: {},
  methods: {
    addClass() {
      if (this.mode == "one") {
        event.target.classList.add("switch-on");
        this.mode = "two";
      } else {
        event.target.classList.remove("switch-on");
        this.mode = "one";
      }
    },
    restarting() {
      console.log(this.visibleRestart);
      setTimeout(() => {
        this.visibleRestart = false;
      }, 0);
      let blocks = document.getElementsByClassName("block");
      setTimeout(() => {
        for (let i = 0; i < 9; i++) {
          blocks[i].innerHTML = null;
        }
      }, 0);
    },
    check() {
      console.log(this.mode);

      //Если в клетке уже стоит значение.
      if (event.target.innerHTML == "X" || event.target.innerHTML == "O") {
        return 0;
      }
      //Логика игры вдвоем
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
      //Логика одиночной игры
      if (this.mode == "one") {
        event.target.innerHTML = "X";
        this.hod++;
        setTimeout(() => {
          this.checkWin();
        }, 0);
        this.nextStep();
      }
    },
    //Функция,которая отвечает за ход компьютера в одиночной игре.
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
    //Проверка выйгрыша. Вызывается после каждого хода.
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
        this.visibleRestart = true;
        this.winner = "Победили X";
      } else if (this.hod > 8) {
        this.hod = 0;
        this.winner = "Ничья";
        this.visibleRestart = true;
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
        this.visibleRestart = true;
        this.winner = "Победили 0";
      } else if (this.hod > 8) {
        this.hod = 0;
        this.winner = "Ничья";
        this.visibleRestart = true;
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
  border: 1px solid rgb(232, 232, 232, 1);
  border-radius: 5px;
}

.reload {
  display: inline-block;
  border: none;
  color: #fff;
  border-radius: 25px;
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  font-family: Verdana;
  width: auto;
  height: auto;
  font-size: 16px;
  padding: 10px 40px;
  background-color: #dc3545;
  outline: none;
}
.reload:hover,
.reload:active {
  color: #fff;
  background-color: #eb263a;
}

.switch-btn {
  display: inline-block;
  width: 72px; /* ширина */
  height: 38px; /* высота */
  border-radius: 19px; /* радиус скругления */
  background: #bfbfbf; /* цвет фона */
  z-index: 0;
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;
  position: relative;
  transition-duration: 300ms; /* анимация */
}
.switch-btn::after {
  content: "";
  height: 32px; /* высота кнопки */
  width: 32px; /* ширина кнопки */
  border-radius: 17px;
  background: #fff; /* цвет кнопки */
  top: 3px; /* положение кнопки по вертикали относительно основы */
  left: 3px; /* положение кнопки по горизонтали относительно основы */
  transition-duration: 300ms; /* анимация */
  position: absolute;
  z-index: 1;
}
.switch-on {
  background: #118c4e;
}
.switch-on::after {
  left: 37px;
}
</style>



