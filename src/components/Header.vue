<template>
  <header class="header">
    <h1>Todo List</h1>
    <form id="inputForm" @submit.prevent="handleClick">
      <input type="text" v-model="addText" />
      <button>Add</button>
    </form>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TodoWrap from "@/components/TodoWrap.vue";
import { ListObject } from "@/models/ListObject";

@Options({
  components: {
    TodoWrap,
  },
})
export default class Header extends Vue {
  addText = "";

  handleClick() {
    if (this.addText == "" || this.addText == "Please write something") {
      this.addText = "Please write something";
      setTimeout(() => {
        this.addText = "";
      }, 2000);
    } else {
      const newTask = new ListObject(this.addText);
      this.$emit("addTask", newTask);
      this.addText = "";
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 70vw;
  border-radius: 10px;
  margin-top: 100px;
  padding-top: 15px;
  margin-bottom: 15px;
  background-color: rgba(169, 169, 169, 0.2);
  display: flex;
  flex-direction: column;
  #inputForm {
    display: flex;
    justify-content: left;
    margin-top: 30px;
    margin-bottom: 15px;
    margin-left: 15px;
    input {
      font-size: 1.2rem;
      border-radius: 10px;
      border-style: none;
      margin: 2px;
      background-color: black;
      color: darkorange;
      width: 40%;
      height: 35px;
      max-width: 225px;
      min-width: 135px;
    }
    button {
      border-style: none;
      border-radius: 10px;
      box-shadow: 1px 1px 1px rgba(169, 169, 169, 0.2);
      height: 37px;
      width: 20%;
      margin-left: 5px;
      margin-top: 2px;
      max-width: 80px;
      background-color: black;
      color: darkorange;
      font-family: "Courier New";
      font-size: 14pt;
    }
    button:hover {
      cursor: pointer;
      background-color: wheat;
      color: black;
      transition: 0.2s all ease;
    }
  }
}
</style>
