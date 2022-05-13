<template>
  <TodoWrap />
  <Footer />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TodoWrap from "@/components/TodoWrap.vue";
import Footer from "@/components/Footer.vue";

@Options({
  components: {
    TodoWrap,
    Footer,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: "Courier New";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: darkorange;
  width: 70vw;
  margin: 0 auto;
  border-radius: 10px;
  font-size: 12pt;
  display: flex;
  flex-direction: column;
  min-width: 480px;
  justify-content: center;
}
html {
  background-color: rgba(0, 0, 0, 0.904);
}
</style>
