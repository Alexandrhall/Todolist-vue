<template>
  <li :class="theObj.done">
    <span
      @click="
        () => {
          handleUpdate();
        }
      "
      >{{ theObj.title }}</span
    >
    <span
      @click="
        () => {
          handleDelete();
        }
      "
      >X</span
    >
  </li>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { ITask } from "@/models/ITask";

export default class List extends Vue {
  @Prop() theObj!: ITask;
  styleClass = "";

  handleUpdate() {
    this.styleClass = this.theObj.done.toString();
    this.$emit("changeObj", this.theObj);
  }

  handleDelete() {
    this.$emit("deleteObj", this.theObj.id);
  }
}
</script>

<style lang="scss" scoped>
li {
  cursor: pointer;
  list-style: none;
  margin: 0 auto;
}
.true {
  text-align: right;
  text-decoration: line-through;
}
.false {
  text-align: left;
  display: flex;
  flex-direction: row;
}
</style>
