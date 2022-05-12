<template>
  <li :class="theObj.done ? 'true' : 'false'">
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
  font-size: 30px;
  column-gap: 10px;
}
.true {
  text-align: right;
  text-decoration: line-through;
  display: flex;
  flex-direction: row;
  justify-content: right;
}
.false {
  text-align: left;
  display: flex;
  flex-direction: row;
  row-gap: 10px;
}
</style>
