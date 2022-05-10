<template>
  <div class="header">
    <h1>Todo</h1>
    <form @submit.prevent="handleClick">
      <input type="text" v-model="addText" />
      <button>Add</button>
    </form>
  </div>
  <List
    v-for="task in taskList"
    :key="task.title"
    :theObj="task"
    @changeObj="updateObject($event)"
    @deleteObj="deleteObject($event)"
  />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { ITask } from "@/components/models/ITask";
import { ListObject } from "./models/ListObject";
import { Prop } from "vue-property-decorator";
import List from "@/components/List.vue";

@Options({
  components: {
    Header,
    List,
  },
})
export default class Header extends Vue {
  addText = "";
  taskList: ITask[] = [];

  handleClick() {
    const newTask = new ListObject(this.addText);

    this.taskList.push(newTask);
    this.addText = "";
  }

  updateObject(task: ITask) {
    task.done = !task.done;
    this.taskList.map((obj) => {
      if (obj.title === task.title) {
        return (obj.done = task.done);
      }
    });
    console.log(this.taskList);
  }

  deleteObject(title: string) {
    this.taskList = this.taskList.filter((obj) => obj.title !== title);
  }
}
</script>

<style lang="scss" scoped>
.header {
  background-color: black;
  height: 150px;
  width: 70vw;
  margin: 0 auto;
  border: 1px solid darkorange;
}
</style>
