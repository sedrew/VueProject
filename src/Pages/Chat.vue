<template>
  <div id="chat">
    <card style="margin-top:40px;"></card>
    <hr />
    <div class="container" style="margin-top:0px;">
      <div class="mb-4 text-center">
        <h1>Chat</h1>
      </div>
      <div class="row">
        <div class="col-lg-6 col-md-4">
          <!-- Форма для получения сообщений и имени -->
          <h3>Форма сообщений</h3>

          <label for="name">Имя</label>
          <input
            type="text"
            name="name"
            v-model="test"
            id="name"
            placeholder="Введите имя"
            class="form-control"
            @click="visible_err=false"
          />
          <br />
          <label for="message">Сообщение</label>
          <textarea
            name="message"
            id="text"
            v-model="message.text_mess"
            class="form-control"
            placeholder="Введите сообщение"
          ></textarea>
          <br />
          <button id="submit" @click="sendMess" class="btn btn-success">Отправить</button>
          <br />
          <br />
          <slide-up-down :active="visible_err">
            <div id="err" class="alert alert-warning" role="alert">
              <strong @click="visible_err=false">Error!</strong> Обязательно введите Имя и текст Сообщения.
            </div>
          </slide-up-down>
        </div>

        <div style="height: 400px;" class="col-lg-6 col-md-8">
          <h3>Сообщения</h3>
          <div
            style="padding:30px 30px 30px 30px; margin-bottom:30px; border: 1px solid grey; border-radius: 15px;"
          >
            <div
              id="all_mess"
              style="overflow-y:auto; overflow-x:hidden; height: 350px;border-radius:15px; padding:10px 10px 10px 10px; scrollbar-face-color: black;"
            >
              <div class="mess" v-for="item in mess" :key="item.id">
                <span class="badge badge-danger">{{item.name}}</span>
                <p class="text">{{item.text_mess}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import { setInterval, setTimeout } from "timers";
export default {
  data() {
    return {
      mess: [],
      message: {
        name: "",
        text_mess: ""
      },
      visible_err: false
    };
  },
  methods: {
    checkMess() {
      this.mess = [];
      axios({
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        url: "http://kdanet.ddns.net/allMess",
        data: {}
      }).then(response => {
        response.data.forEach(item => {
          let x = {
            name: item.name,
            text_mess: item.text_mess
          };
          this.mess.push(x);
        });
      });
    },
    sendMess() {
      if (this.message.name != "" && this.message.text_mess != "") {
        this.$socket.emit("sendMess", this.message);
        this.message.text_mess = "";
      } else {
        this.visible_err = true;
        setTimeout(() => {
          this.visible_err = false;
        }, 4000);
      }
    }
  },
  mounted() {
    this.checkMess();
  },
  updated() {
    var block = document.getElementById("all_mess");
    block.scrollTop = 9999;
  },
  computed: {
    test() {
      return (this.message.name = this.$store.getters.name);
    }
  },
  sockets: {
    connect: () => {
      console.log("Подключение прошло успешно");
    }
  },
  created() {
    this.sockets.subscribe("addMess", data => {
      this.mess.push(data);
    });
  }
};
</script>


<style scoped>
::-webkit-scrollbar {
  width: 8px;
}
.chat {
  overflow-y: hidden;
}
</style>
