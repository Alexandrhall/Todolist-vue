<template>
  <div class="header">
    <h1>Todo</h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TodoWrap from "@/components/TodoWrap.vue";

@Options({
  components: {
    TodoWrap,
  },
})
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
.header {
  height: 150px;
  width: 70vw;
  margin: 0 auto;
  border-radius: 10px;
}
</style>
