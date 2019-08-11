<template>
  <div>
    <button class="btn btn-danger" @click="clickButton">Тест</button>
    <input class="form-control" v-model="text" type="text" />
    <div style="color:white" v-for="(item,index) in mess" :key="index">{{item}}</div>123
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      mess:[1,2,3,4],
    };
  },
  methods: {
    clickButton() {
      this.$socket.emit('sayHelloServer', this.text);
    }
  },
  sockets: {
    connect: () => {
      console.log("Подключение прошло успешно");
    },
    sayHelloClient: (data)=>{
      console.log(data);
    },
  },
  created(){
    this.sockets.subscribe('test', (data) => {
      this.mess.push(data);
    })
  }
  
};
</script>