<template>
  <div style="height:80%">
    <div class="hello" style="height:100%;">
      <h1>Welcome, {{nameLogin}}</h1>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  computed: {
    nameLogin() {
      return this.$store.state.name.toUpperCase();
    }
  },
  mounted(){
	  document.body.className="background";
  },
  destroyed(){
	  document.body.classList.remove('background');
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
  height: 100vh;
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
