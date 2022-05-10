<template>
  <div class="header">
    <h1>Todo</h1>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
.header {
  background-color: black;
  height: 150px;
  width: 70vw;
  margin: 0 auto;
}
</style>
