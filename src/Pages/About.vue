<template>
  <div>
    <div class="text-center block" style="margin-top:60px;">
      <div class="about_project text-center">
        <div class="d-flex justify-content-center" style="width:100%;">
          <div :class="darkJumb" class="jumbotron col-11 col-sm-11 col-md-8">
            <h1 class="display-3">Hello, {{nameLogin}}</h1>
            <p
              class="lead"
            >Данный сайт является не больше,чем просто учебным проектом,он не несет большой смысловой нагрузки или скрытого контекста.</p>
            <hr class="my-2">
            <p>Если у вас есть желание связаться со мной,то вы можете сделать это нажав на любую кнопку ниже, with love by kdanet.</p>
            <p class="lead mt-5">
              <a
                href="https://vk.com/id172507304"
                role="button"
              ><img src="./../assets/vk1.png" width="50px" height="50px;"></a>
              <a
                href="https://vk.com/id172507304"
                role="button"
              ><img src="./../assets/inst.png" width="50px" height="50px;"></a>
              <a
                href="https://vk.com/id172507304"
                role="button"
              ><img src="./../assets/tel.png" width="50px" height="50px;"></a>
              <a
                href="https://vk.com/id172507304"
                role="button"
              ><img src="./../assets/twit.png" width="50px" height="50px;"></a>
            </p>
          </div>
        </div>
      </div>
      <div class="technologies">
        <h2 class="mb-5" id="techno">Используемые технологии:</h2>
        <div class="tech">
          <div>
            <h3>Vue</h3>
            <img width="150px" height="150px" src="./../assets/vue.png" alt>
          </div>
          <div>
            <h3>VueX</h3>
            <img width="150px" height="150px" src="./../assets/Vuex.png" alt>
          </div>
          <div>
            <h3>Bootstrap 4</h3>
            <img width="150px" height="150px" src="./../assets/Bootstrap.png" alt>
          </div>
          <div>
            <h3>JavaScript</h3>
            <img width="150px" height="150px" src="./../assets/javascript.png" alt>
          </div>
          <div>
            <h3>HTML 5</h3>
            <img width="150px" height="150px" src="./../assets/html.png" alt>
          </div>
          <div>
            <h3>CSS</h3>
            <img width="150px" height="150px" src="./../assets/css1.png" alt>
          </div>
          <div>
            <h3>Node.JS</h3>
            <img width="150px" height="150px" src="./../assets/node.png" alt>
          </div>
          <div>
            <h3>NPM</h3>
            <img width="150px" height="150px" src="./../assets/npm.png" alt>
          </div>
          <div>
            <h3>PHP</h3>
            <img width="150px" height="150px" src="./../assets/php.png" alt>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  computed: {
    darkJumb() {
      if (this.$store.getters.theme.mode == "Dark") {
        return "bg-dark";
      } else {
        return "bg-light font";
      }
    }, 
    colorLink() {
      if (this.$store.getters.theme.mode == "White") {
        return "link_dark";
      }
    },
    nameLogin() {
      return this.$store.getters.name.toUpperCase();
    }
  }
};
</script>

<style scoped>
.lead a {
  margin-top: 10px;
  margin-left:5px;
  margin-right: 5px;
}

.bg-light {
    background-color: #f8f9faa1 !important;
}

.font {
  color: black;
}

.link_dark {
  color: rgb(0, 0, 0);
}

a:active,
a:hover,
a {
  text-decoration: none;
  color: rgb(255, 255, 255);
}

.block {
  width: 100%;
  height: 100%;
  
}
h3 {
  margin: 0;
}

.about_project {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0px 0px 0px 0px;
}

.tech {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0px 0px 10px 0px;
}

.technologies {
  margin-top: 150px;
}

.tech div {
  margin: 10px 20px 10px 20px;
}
</style>

