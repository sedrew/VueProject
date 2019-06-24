<template>
  <div>
    <b-modal no-close-on-backdrop hide-header-close hide-footer v-model="visible">
      <label for="name">Введите ваше Имя</label>
      <input id="name" v-model="name" class="form-control">
      <div class="btn_gr">
        <button @click="close" style="margin:0" class="btn btn-danger">Close</button>
        <button @click="ok" class="btn btn-success">Save</button>
      </div>
    </b-modal>
  </div>
</template>



<script>
export default {
  data() {
    return {
      name: "",
      visible: true
    };
  },
  methods: {
    ok() {
      if (this.name != "" && this.name != " " && this.name.length > 3) {
        this.$store.state.name = this.name;
        this.$store.state.login = 1;
        this.$emit("closeModal", false);
      }
    },
    close() {
      this.$store.state.login = 0;
      this.$emit("closeModal", false);
    }
  }
};
</script>


<style>
label {
  color:black !important;
}
.btn_gr {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
</style>
