<template>
  <li :class="theObj.done ? 'true' : 'false'">
    <span
      class="title"
      @click="
        () => {
          handleUpdate();
        }
      "
      >{{ theObj.title }}</span
    >
    <span
      class="delete"
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
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { ITask } from "@/models/ITask";

@Options({
  emits: ["changeObj", "deleteObj"],
})
export default class List extends Vue {
  @Prop() theObj!: ITask;

  handleUpdate() {
    this.$emit("changeObj", this.theObj);
  }

  handleDelete() {
    this.$emit("deleteObj", this.theObj.id);
  }
}
</script>

<style lang="scss" scoped>
li {
  display: flex;
  cursor: pointer;
  list-style: none;
  margin: 0 auto;
  font-size: 18pt;
  column-gap: 10px;
  width: 30%;
  align-items: center;
  padding: 2px;
}
li:hover {
  background-color: wheat;
  color: black;
  border-radius: 8px;
  transition: 0.2s all ease;
}
.delete {
  font-size: 12pt;
  text-align: end;
}
.delete:hover {
  background-color: salmon;
  border-radius: 8px;
  transition: 0.2s all ease;
}
.title {
  width: 100%;
  text-align: left;
}
.true {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .title {
    text-decoration: line-through;
    text-decoration-color: black;
  }
}
.false {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  row-gap: 10px;
}
</style>
