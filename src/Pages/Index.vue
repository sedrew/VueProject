<template>
  <div style="height:100%;">
    <about></about>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  computed: {},
  mounted() {
    if (this.$store.getters.theme.mode != "Dark") {
      document.body.classList.add("background");
    }
  },
  updated() {},
  destroyed() {
    document.body.classList.remove("background");
  }
};
</script>


<style>
.hello {
  display: flex;
  justify-content: center;
  align-items: center;
}

.background {
  width: 100wh;
  height: 150vh;
  color: #fff;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  -webkit-animation: Gradient 15s ease infinite;
  -moz-animation: Gradient 15s ease infinite;
  animation: Gradient 15s ease infinite;
}

@-webkit-keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@-moz-keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
