<template>
  <Header @addTask="handleClick($event)" />
  <main class="main">
    <h2>Tasks</h2>
    <ul>
      <List
        v-for="task in taskList"
        :key="task.title"
        :theObj="task"
        @changeObj="updateObject($event)"
        @deleteObj="deleteObject($event)"
      />
    </ul>
  </main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { ITask } from "@/models/ITask";
import { ListObject } from "@/models/ListObject";
import List from "@/components/List.vue";
import Header from "@/components/Header.vue";

@Options({
  components: {
    Header,
    List,
  },
})
export default class TodoWrap extends Vue {
  addText = "";
  taskList: ITask[] = [];

  mounted() {
    const data = localStorage.getItem("TheList");
    if (data) {
      this.taskList = JSON.parse(data) as ITask[];
    }
  }

  handleClick(newTask: ListObject) {
    this.taskList.unshift(newTask);
    localStorage.setItem("TheList", JSON.stringify(this.taskList));
  }

  updateObject(task: ITask) {
    task.done = !task.done;
    this.taskList.map((obj) => {
      if (obj.id === task.id) {
        return (obj.done = task.done);
      }
    });
    localStorage.setItem("TheList", JSON.stringify(this.taskList));
  }

  deleteObject(id: number) {
    this.taskList = this.taskList.filter((obj) => obj.id !== id);
    localStorage.setItem("TheList", JSON.stringify(this.taskList));
  }
}
</script>

<style lang="scss" scoped>
main {
  background-color: rgba(169, 169, 169, 0.2);
  border-radius: 10px 10px 0px 0px;
}
ul {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin: 0 auto;
  padding-left: 150px;
  padding-right: 150px;
  padding-top: 10px;
  margin-top: 20px;
}
</style>
