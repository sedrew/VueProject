<template>
  <div :class="this.$store.state.theme" id="qwe" class="main-layout" style="height:100%">
    <navbar></navbar>
    <transition name="item" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      theme: {
        color: "",
        name: "Dark"
      }
    };
  },
  methods: {}
};
</script>
<style>
.body_dark {
  background-color: rgb(32, 32, 32);
}
.item-enter-active,
.item-leave-active {
  transition: all 0.2s;
}
.item-enter,
.item-leave-to {
  opacity: 0;
  transform: translateY(40px);
}
.main-layout {
  position: absolute;
  height: 100%;
  width: 100%;
}
.Dark {
  background-color: rgb(32, 32, 32);
  color: white;
}
</style>
