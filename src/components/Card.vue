<template>
  <div>
    <hr :class="hrClass">
    <div class="container d-flex justify-content-center">
      <div class="mb-5 col-12 col-sm-7 col-md-7 col-lg-7 col-xl-7">
        <div class="card" :class="darkCard">
          <h3 class="card-header">{{card.h3}}</h3>
          <div class="card-body">
            <!-- <h4 class="card-title">Run-Length-Encoding :</h4> -->
            <p class="card-text">{{card.text}}</p>
            <a
              :href="card.link"
              class="btn"
              :class="readMore"
              style="width:100%;margin:0;"
            >Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      card: {
        h3: "",
        text: "",
        link: ""
      }
    };
  },
  computed: {
    darkCard() {
      if (this.$store.state.theme == "Dark") {
        return "bg-dark";
      }
    },
    readMore() {
      if (this.$store.state.theme == "Dark") {
        return "btn-outline-light";
      } else {
        return "btn-outline-secondary";
      }
    },
    hrClass() {
       if (this.$store.state.theme == "Dark") {
        return "hr_dark";
      }
    }
  },
  mounted() {
    if (this.$route.path.slice(1) == "palindrome") {
      this.card.h3 = "Palindrome";
      this.card.text =
        "Число, буквосочетание, слово или текст, одинаково читающееся в обоих направлениях.";
      this.card.link =
        "https://ru.wikipedia.org/wiki/%D0%9F%D0%B0%D0%BB%D0%B8%D0%BD%D0%B4%D1%80%D0%BE%D0%BC";
    } else if (this.$route.path.slice(1) == "RLE") {
      this.card.h3 = "RLE";
      this.card.text =
        "Алгоритм сжатия данных, заменяющий повторяющиеся символы (серии) на один символ и число его повторов.";
      this.card.link =
        "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%B4%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5_%D0%B4%D0%BB%D0%B8%D0%BD_%D1%81%D0%B5%D1%80%D0%B8%D0%B9";
    } else if (this.$route.path.slice(1) == "anagrams") {
      this.card.h3 = "Anagrams";
      this.card.text =
        "Литературный приём, состоящий в перестановке букв или звуков определённого слова (или словосочетания), что в результате даёт другое слово или словосочетание.";
      this.card.link =
        "https://ru.wikipedia.org/wiki/%D0%90%D0%BD%D0%B0%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0";
    } else if (this.$route.path.slice(1) == "film") {
      this.card.h3 = "Film Search";
      this.card.text =
        "Минисервис по поиску фильмов с использованием The Open Movie Database.";
      this.card.link = "https://www.omdbapi.com/";
    } else if (this.$route.path.slice(1) == "chat") {
      this.card.h3 = "Chat";
      this.card.text =
        "Чат,реализованный на удаленном PHP сервере с использованием баз данных.";
      this.card.link = "https://ru.wikipedia.org/wiki/PHP";
    }
  }
};
</script>


<style>
hr {
  margin-top:0rem !important;
  margin-bottom:2rem !important;
}

.hr_dark {
  border-top: 2px solid rgba(255, 255, 255, 0.1);
}
</style>
