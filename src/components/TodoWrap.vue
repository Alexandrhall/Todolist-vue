<template>
  <Header @addTask="handleClick($event)" />
  <main class="main">
    <div class="sortBut">
      <button @click="sortName">
        Sort Name <br />
        A-Z
      </button>
      <button @click="sortDate">
        Sort Date <br />
        New-Old
      </button>
    </div>
    <h2>Tasks</h2>
    <div>
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

  sortName() {
    this.taskList.sort(function (a, b) {
      let nameA = a.title.toUpperCase();
      let nameB = b.title.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    localStorage.setItem("TheList", JSON.stringify(this.taskList));
  }

  sortDate() {
    this.taskList.sort(function (a, b) {
      let nameA = a.date;
      let nameB = b.date;
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
      return 0;
    });
    localStorage.setItem("TheList", JSON.stringify(this.taskList));
  }
}
</script>

<style lang="scss" scoped>
main {
  background-color: rgba(169, 169, 169, 0.2);
  border-radius: 10px 10px 0px 0px;
  width: 70vw;
  min-width: 480px;
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
.sortBut {
  display: flex;
  margin-left: 30px;
}
button {
  border-style: none;
  border-radius: 10px;
  box-shadow: 1px 1px 1px rgba(169, 169, 169, 0.2);
  width: 100px;
  margin-left: 10px;
  margin-top: 10px;
  background-color: black;
  color: darkorange;
  font-family: "Courier New";
}
button:hover {
  cursor: pointer;
  background-color: wheat;
  color: black;
  transition: 0.2s all ease;
}
@media screen and (max-width: 640px) {
  .sortBut {
    justify-content: center;
  }
}
</style>
