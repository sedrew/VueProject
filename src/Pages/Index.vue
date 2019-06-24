<template>
  <div>
    <div class="mt-5 text-center">
      <h1>Welcome,{{nameLogin}} </h1>
    </div>
  </div>
</template>


<script>
export default {
  data(){
    return {
      
    }
  },
  computed: {
    nameLogin() {
      return this.$store.state.name;
    }
  }
}
</script>


<style scoped>

</style>
