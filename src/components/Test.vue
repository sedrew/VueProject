<template>
  <div>
    <button class="btn btn-danger" @click="clickButton">Тест</button>
    <input class="form-control" v-model="name">
    <input class="form-control" v-model="password">
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      password: null
    };
  },
  methods: {
    clickButton(){
      this.$store.dispatch('loginServer', {'name': this.name,'password':this.password});
    }
  }
};
</script>