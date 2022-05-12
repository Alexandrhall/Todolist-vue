<template>
  <div class="main">
    <form @submit.prevent="handleClick">
      <input type="text" v-model="addText" />
      <button>Add</button>
    </form>
    <ul>
      <List
        v-for="task in taskList"
        :key="task.title"
        :theObj="task"
        @changeObj="updateObject($event)"
        @deleteObj="deleteObject($event)"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { ITask } from "@/models/ITask";
import { ListObject } from "@/models/ListObject";
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

  mounted() {
    const data = localStorage.getItem("TheList");
    if (data) {
      this.taskList = JSON.parse(data) as ITask[];
    }
  }

  handleClick() {
    const newTask = new ListObject(this.addText);
    // console.log(newTask);

    this.taskList.push(newTask);
    localStorage.setItem("TheList", JSON.stringify(this.taskList));
    this.addText = "";
  }

  updateObject(task: ITask) {
    task.done = !task.done;
    this.taskList.map((obj) => {
      if (obj.title === task.title) {
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
div {
  width: 70vw;
  margin: 0 auto;
}
ul {
  margin: 0 auto;
  padding-left: 150px;
  padding-right: 150px;
}
</style>
