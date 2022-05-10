<template>
  <ul>
    <li
      @click="
        () => {
          handleUpdate();
        }
      "
    >
      {{ theObj.title }}, {{ theObj.done }}
    </li>
    <p
      @click="
        () => {
          handleDelete();
        }
      "
    >
      X
    </p>
  </ul>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { ITask } from "./models/ITask";

export default class List extends Vue {
  @Prop() theObj!: ITask;

  handleUpdate() {
    // task.done = !task.done;
    this.$emit("changeObj", this.theObj);
  }

  handleDelete() {
    this.$emit("deleteObj", this.theObj.title);
  }
}
</script>

<style lang="scss" scoped>
li {
  cursor: pointer;
  list-style: none;
  width: 180px;
  margin: 0 auto;
}
</style>
