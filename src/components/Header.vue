<template>
  <div class="header">
    <h1>Todo</h1>
    <form>
      <input type="text" />
      <button>Add</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Header extends Vue {}
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
