<template>
  <div v-if="this.$store.state.admin!=null">
    <div class="cont">
      <h6>CPU:</h6>
      <b-progress height="40px" class="w-75" :max="100" show-value>
        <b-progress-bar :value="stat.CPU" :variant="cpuColor">{{stat.CPU}}%</b-progress-bar>
      </b-progress>
      <h6 class="mt-3">RAM:</h6>
      <b-progress height="40px" class="w-75" :max="stat.mem.allMem-stat.mem.sharedMem" show-value>
        <b-progress-bar :value="stat.mem.freeMem" variant="success">Free: {{stat.mem.freeMem}}</b-progress-bar>
        <b-progress-bar :value="stat.mem.buffMem" variant="warning">Buffer: {{stat.mem.buffMem}}</b-progress-bar>
        <b-progress-bar :value="stat.mem.usedMem" variant="danger">Used:{{stat.mem.usedMem}}</b-progress-bar>
      </b-progress>
      <h6 class="mt-3">TEMPERATURE:</h6>
      <b-progress height="40px" class="w-75" :max="70" show-value>
        <b-progress-bar :value="stat.temp" :variant="tempColor">{{stat.temp.toFixed(1)}}°C</b-progress-bar>
      </b-progress>
    </div>
    <div class="cont_btn">
      <button @click="test" class="btn btn-success">Get logs</button>
      <button @click="clear" class="btn btn-warning">Clear logs</button>
      <b-button v-b-toggle.collapse-1 variant="danger">Shutdown</b-button>
    </div>

    <b-collapse id="collapse-1">
      <div class="container cont">
        <h6>NAME</h6>
        <input
          v-model="name"
          placeholder="Enter the administrator name"
          class="form-control col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5"
        />
        <br />
        <h6>KEYWORD</h6>
        <input
          type="password"
          v-model="password"
          placeholder="Enter your passphrase"
          class="form-control col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5"
        />
        <br />
        <b-button @click="shutdown" variant="outline-danger">Confirm Stop Server</b-button>
        <br />
        <b-collapse id="collapse-2" v-model="shutdownStatus.state" class="mt-2">
          <div class="alert alert-danger" role="alert"><strong>{{shutdownStatus.status}}</strong></div>
        </b-collapse>
      </div>
    </b-collapse>
    <br />
    <div class="cont">
      <div style="padding:30px;" v-html="logs"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { setTimeout } from "timers";
export default {
  data() {
    return {
      stat: {
        temp: 30,
        mem: {
          allMem: 0,
          usedMem: 0,
          freeMem: 0,
          buffMem: 0,
          sharedMem: 0
        },
        CPU: 0
      },
      logs: "",
      confirm: false,
      password: null,
      name: null,
      shutdownStatus: {
        status: null,
        state: false
      }
    };
  },
  sockets: {
    connect: () => {
      console.log("temp");
    }
  },
  created() {
    this.sockets.subscribe("statisticServer", data => {
      this.stat.temp = +data.temp;
      this.stat.mem.allMem = +data.mem.allMem;
      this.stat.mem.usedMem = +data.mem.usedMem;
      this.stat.mem.freeMem = +data.mem.freeMem;
      this.stat.mem.buffMem = +data.mem.buffMem;
      this.stat.mem.sharedMem = +data.mem.sharedMem;
      this.stat.CPU = parseInt(data.CPU.slice(0, -1));
    });
    this.$socket.emit("statistic");
  },
  methods: {
    test() {
      axios({
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        url: "http://kdanet.ddns.net/logs",
        data: { name: "Danil" }
      }).then(response => {
        this.logs = response.data;
      });
    },
    shutdown() {
      axios({
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        url: "http://kdanet.ddns.net/stopserver",
        data: { name: this.name, password: this.password }
      }).then(response => {
        if (response.data == 200) {
          this.shutdownStatus.status = 'Сервер успешно остановлен.';
          this.shutdownStatus.state= true;
        } else {
          this.shutdownStatus.status = 'Не удалось выключить сервер.';
          this.shutdownStatus.state= true;
        }
      });
    },
    clear() {
      this.confirm = true;
      axios({
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        url: "http://kdanet.ddns.net/logclear",
        data: {}
      }).then(response => {
        this.logs = response.data;
      });
    }
  },
  computed: {
    tempColor() {
      if (this.stat.temp < 40) {
        return "success";
      } else if (this.stat.temp > 40 && this.stat.temp < 50) {
        return "warning";
      } else {
        return "danger";
      }
    },
    cpuColor() {
      if (this.stat.CPU < 40) {
        return "success";
      } else if (this.stat.CPU > 40 && this.stat.CPU < 70) {
        return "warning";
      } else {
        return "danger";
      }
    }
  },
  mounted() {
    axios({
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      url: "http://kdanet.ddns.net/adpanel",
      data: { name: this.$store.state.name }
    }).then(response => {});
  },
  destroyed() {
    setTimeout(() => {
      this.$socket.emit("temp", "false");
    }, 2000);
  }
};
</script>