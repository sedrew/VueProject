<template>
  <div :class="this.$store.getters.theme.mode" class="main-layout">
    <navbar></navbar>
    <transition name="item" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  updated() {
    
  },
  created() {
    //Чинит слеты темной темы при прокрутке.
    if (this.$store.getters.theme.mode=='Dark') {
      document.body.classList.add("body_dark");
    }
  }
};
</script>
<style>
.body_dark {
  background-color: rgb(32, 32, 32);
}
.item-enter-active,
.item-leave-active {
  transition: all 0.3s;
}
.item-enter,
.item-leave-to {
  opacity: 0;
  transform: translateY(80px);
}
.main-layout {
  position: absolute;
  width: 100%;
  height: 100%;
}
.Dark {
  background-color: rgb(32, 32, 32);
  color: white;
  width: 100%;
  height: 100%;
}
</style>
