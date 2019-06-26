<template>
  <transition name="item">
    <div>
      <card style="margin-top:40px;"></card>
      <hr>
      <div class="text-center"></div>
      <div class="container text-center" style="margin-top:40px;">
        <h1 class="mb-5">Film Search</h1>
        <div class="inp">
          <input
            @click="visible=false"
            id="name"
            style="margin-right:10px;"
            class="form-control col-8 col-sm-5 col-md-5 col-lg-5 col-xl-5"
            v-model="name"
            placeholder="Введите Название Фильма"
          >
          <button class="btn btn-primary" @click="axio">Find</button>
        </div>
      </div>
      <slide-up-down :active="visible">
        <div
          class="col-10 col-sm-5 col-md-5 col-lg-5 col-xl-5 container alert alert-danger"
          role="alert"
        >
          <h4 class="alert-heading">Sorry!</h4>По данному запросу ничего не найдено.
        </div>
      </slide-up-down>

      <div id="movies">
        <div :class="darkTheme" v-for="item in arrTitle" :key="item.id">
          <img :src="item.img">
          <p class="title">{{item.title}}</p>
          <p class="year">{{item.year}}</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      arrTitle: [],
      theme: "",
      visible: false
    };
  },
  methods: {
    axio() {
      axios({
        method: "GET",
        headers: { "Content-Type": "text/plain" },
        url: `https://www.omdbapi.com/?s=${this.name}&apikey=f7a37081`,
        data: {}
      }).then(response => {
        this.arrTitle = [];
        console.log(response.data.Search);
        if (response.data.Search == undefined) this.visible = true;
        response.data.Search.forEach(item => {
          console.log(item.Title);
          let x = {
            title: item.Title,
            img: item.Poster,
            year: item.Year
          };
          this.arrTitle.push(x);
          console.log(x);
        });
      });
    }
  },
  computed: {
    darkTheme() {
      if (this.$store.state.theme == "Dark") return "movie_dark";
      else return "movie";
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Fredoka+One&display=swap");
.inp {
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
}

#movies {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.movie {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  background: rgb(252, 252, 252);
  height: 600px;
  border-radius: 15px;
  margin: 0px 10px 30px 10px;
  color: black;
}

.movie_dark {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  background: rgb(63, 63, 63);
  height: 600px;
  border-radius: 15px;
  margin: 0px 10px 30px 10px;
  color: white;
}

.movie:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.title {
  font-family: "Fredoka One", cursive;
  width: 300px;
  margin-top: 10px;
  font-size: 20px;
}

.year {
  font-family: "Fredoka One", cursive;
  font-size: 15px;
}

img {
  margin-top: 20px;
  border-radius: 15px;
}
</style>


