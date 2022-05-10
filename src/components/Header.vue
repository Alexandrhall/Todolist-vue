<template>
  <div class="header">
    <h1>Todo</h1>
    <form @submit.prevent="handleClick">
      <input type="text" v-model="addText" />
      <button>Add</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { ITask } from "@/components/models/ITask";
import { ListObject } from "./models/ListObject";
import { Prop } from "vue-property-decorator";

export default class Header extends Vue {
  addText = "";
  taskList: ITask[] = [];

  handleClick() {
    const newTask = new ListObject(this.addText);
    console.log(newTask);

    this.taskList.push(newTask);
    console.log(this.taskList);

    for (const task of this.taskList) {
      console.log(task.title, task.done);
    }
  }
}
</script>

<style lang="scss" scopedw>
.header {
  background-color: black;
  height: 150px;
  width: 70vw;
  margin: 0 auto;
  border: 1px solid darkorange;
}
</style>
