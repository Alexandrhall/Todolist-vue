<template>
  <Header />
  <TodoWrap />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "@/components/Header.vue";
import List from "./components/List.vue";
import TodoWrap from "@/components/TodoWrap.vue";

@Options({
  components: {
    TodoWrap,
    List,
    Header,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: darkorange;
  margin-top: 60px;
}
html {
  background-color: black;
}
</style>
