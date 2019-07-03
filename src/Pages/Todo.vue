<template>
  <div style="overflow-x:hidden">
    <!-- <card style="margin-top:40px;"></card> -->
    <div class="container text-center mt-5">
      <h1 class="mb-5">TODO</h1>
      <div class="inp">
        <input
          placeholder="Опишите задачу"
          v-model="text"
          class="form-control col-8 col-sm-5 col-md-5 col-lg-5 col-xl-5"
          @keyup.enter="sub"
        />
        <button @click="sub" class="btn btn-primary">Создать</button>
      </div>
    </div>

    <div id="bnt" class="cont_btn mb-2">
      <button
        @click="visible.all=true; visible.success=false; visible.unsuccess=false"
        class="btn btn-primary"
      >&nbsp;&nbsp;All&nbsp;&nbsp;</button>
      <button
        @click="visible.all=false; visible.success=true;visible.unsuccess=false"
        class="btn btn-success"
      >Completed</button>
      <button
        @click="visible.unsuccess=true;visible.all=false; visible.success=false;"
        class="btn btn-danger"
      >Uncompleted</button>
    </div>

    <div key="1" v-if="visible.all">
      <transition-group name="anim" tag="div" class="card_block mt-5">
        <div
          v-for="(item,index) in task"
          :key="index"
          class="mb-3 col-12 col-sm-7 col-md-7 col-lg-7 col-xl-7"
        >
          <div
            class="card"
            :class="!item.complete ? 'text-white bg-danger': 'text-white bg-success' "
          >
            <div class="card-header header">
              <h5>Task #{{index+1}}</h5>
              <div>
                <button class="btn" @click="succ(index)" style="color:white;">&#10003;</button>
                <button class="btn" @click="del(index)" style="color:white;">&times;</button>
              </div>
            </div>
            <div class="card-body">
              <h4 class="card-title">{{item.title}}</h4>
            </div>
          </div>
        </div>
      </transition-group>
    </div>

    <div key="2" v-show="visible.success">
      <div class="card_block mt-5">
        <div
          v-for="(item,index) in task.filter((item)=>{ if(item.complete==true) return item})"
          :key="index"
          class="mb-3 col-12 col-sm-7 col-md-7 col-lg-7 col-xl-7"
        >
          <div
            class="card"
            :class="!item.complete ? 'text-white bg-primary': 'text-white bg-success' "
          >
            <div class="card-header header">
              <h5>Task #{{index+1}}</h5>
              <div>
                <button class="btn" @click="succ(index)" style="color:white;">&#10003;</button>
                <button class="btn" @click="del(index)" style="color:white;">&times;</button>
              </div>
            </div>
            <div class="card-body">
              <h4 class="card-title">{{item.title}}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div key="3" v-show="visible.unsuccess">
      <div class="card_block mt-5">
        <div
          v-for="(item,index) in task.filter((item)=>{ if(item.complete==false) return item})"
          :key="index"
          class="mb-3 col-12 col-sm-7 col-md-7 col-lg-7 col-xl-7"
        >
          <div
            class="card"
            :class="!item.complete ? 'text-white bg-danger': 'text-white bg-success' "
          >
            <div class="card-header header">
              <h5>Task #{{index+1}}</h5>
              <div>
                <button class="btn" @click="succ(index)" style="color:white;">&#10003;</button>
                <button class="btn" @click="del(index)" style="color:white;">&times;</button>
              </div>
            </div>
            <div class="card-body">
              <h4 class="card-title">{{item.title}}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    if (JSON.parse(localStorage.getItem("all"))) {
      this.task = JSON.parse(localStorage.getItem("all"));
    }
  },
  data() {
    return {
      visible: {
        all: true,
        success: false,
        unsuccess: false
      },
      text: "",
      task: []
    };
  },
  methods: {
    succ(index) {
      this.task[index].complete = !this.task[index].complete;
    },
    del(index) {
      this.task.splice(index, 1);
    },
    sub() {
      if (this.text != "") {
        this.task.push({ title: this.text, complete: false });
        this.text = "";
        this.task.reverse();
      }
    }
  },
  updated() {
    localStorage.setItem("all", JSON.stringify(this.task));
  }
};
</script>

<style>
.items-enter-active,
.items-leave-active {
  transition: all 1s ease;
}
.items-enter,
.items-leave-to {
  opacity: 0;
}

.anim-enter-active,
.anim-leave-active {
  transition: all 0.8s ease;
}
.anim-enter,
.anim-leave-to {
  opacity: 0;
  /* transform: translateY(100px); */
}

.inp {
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
}
.header {
  display: flex;
  justify-content: space-between;
}
.card_block {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>


