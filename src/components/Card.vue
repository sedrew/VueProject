<template>
  <div>
    <hr :class="hrClass">
    <div class="container d-flex justify-content-center">
      <div class="mb-5 col-12 col-sm-7 col-md-7 col-lg-7 col-xl-7">
        <div class="card" :class="darkCard">
          <h3 class="card-header">{{card.h3}}</h3>
          <div class="card-body">
            <!-- <h4 class="card-title">Run-Length-Encoding :</h4> -->
            <p class="card-text" v-html="card.text"></p>
            <h3>{{card.example.head}}</h3>
            <p class="card-text" v-html="card.example.text"></p>
            <a
              v-if="card.example.btn"
              :href="card.link"
              class="btn"
              :class="readMore"
              style="width:100%;margin:0;"
            >{{card.example.btn_text}}</a>
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
        link: "",
        example: {
          text: "",
          head: "",
          btn: true,
          btn_text: ""
        }
      }
    };
  },
  computed: {
    darkCard() {
      if (this.$store.getters.theme.mode == "Dark") {
        return "bg-dark";
      }
    },
    readMore() {
      if (this.$store.getters.theme.mode == "Dark") {
        return "btn-outline-light";
      } else {
        return "btn-outline-secondary";
      }
    },
    hrClass() {
      if (this.$store.getters.theme.mode == "Dark") {
        return "hr_dark";
      }
    }
  },
  mounted() {
    if (this.$route.path.slice(1) == "palindrome") {
      this.card.example.btn = true;
      this.card.example.btn_text = "Read More";
      this.card.example.head = "Примеры:";
      this.card.example.text = "Шалаш, 1001 , Nigro or gin? , В резерв!  ";
      this.card.h3 = "Palindrome";
      this.card.text =
        "Число, буквосочетание, слово или текст, одинаково читающееся в обоих направлениях.";
      this.card.link =
        "https://ru.wikipedia.org/wiki/%D0%9F%D0%B0%D0%BB%D0%B8%D0%BD%D0%B4%D1%80%D0%BE%D0%BC";
    } else if (this.$route.path.slice(1) == "RLE") {
      this.card.example.btn = true;
      this.card.example.btn_text = "Read More";
      this.card.example.head = "Примеры:";
      this.card.example.text = "AAAAAA=A5" + "<br>" + "ABCCC=ABC3";
      this.card.h3 = "RLE";
      this.card.text =
        "Алгоритм сжатия данных, заменяющий повторяющиеся символы (серии) на один символ и число его повторов.";
      this.card.link =
        "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%B4%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5_%D0%B4%D0%BB%D0%B8%D0%BD_%D1%81%D0%B5%D1%80%D0%B8%D0%B9";
    } else if (this.$route.path.slice(1) == "anagrams") {
      this.card.example.btn = true;
      this.card.example.btn_text = "Read More";
      this.card.example.head = "Примеры:";
      this.card.example.text =
        "'Statue of Liberty' и 'Built to stay free' - анаграммы." +'<br>'+ "'Просветитель' и 'Терпеливость' - анаграммы.";
      this.card.h3 = "Anagrams";
      this.card.text =
        "Литературный приём, состоящий в перестановке букв или звуков определённого слова (или словосочетания), что в результате даёт другое слово или словосочетание.";
      this.card.link =
        "https://ru.wikipedia.org/wiki/%D0%90%D0%BD%D0%B0%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0";
    } else if (this.$route.path.slice(1) == "film") {
      this.card.example.btn = true;
      this.card.example.btn_text = "Read More";
      this.card.h3 = "Film Search";
      this.card.text =
        "Сервис поиска постеров фильмов. Для получения данных используется стороннее <strong style='color:green'>API-OMDB</strong> (The Open Movie Database). Запросы к API асинхронные,что помогает избежать полной перезагрузки страницы.";
      this.card.link = "https://www.omdbapi.com/";
    } else if (this.$route.path.slice(1) == "chat") {
      this.card.example.btn = false;
      this.card.h3 = "Chat";
      this.card.text =
        "Чат,реализованный на удаленном " +
        "сервере с использованием <strong style='color:green'>LowDB</strong> и "+"<strong style='color:green'>Socket.io</strong>";
      this.card.link = "https://ru.wikipedia.org/wiki/PHP";
    } else if (this.$route.path.slice(1) == "todo") {
      this.card.example.btn = true;
      this.card.example.btn_text = "Read More";
      this.card.h3 = "TODO";
      this.card.text ="Try To Do Sth ";
      this.card.link = "https://www.definder.net/TODO/";
    }
  }
};
</script>


<style>
hr {
  margin-top: 0rem !important;
  margin-bottom: 2rem !important;
}

.hr_dark {
  border-top: 2px solid rgba(255, 255, 255, 0.1);
}
</style>
