<template>
  <footer class="footer">® Alexander Hall</footer>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Footer extends Vue {}
</script>

<style lang="scss" scoped>
.footer {
  background-color: rgba(169, 169, 169, 0.2);
  width: 70vw;
  padding-top: 80px;
  border-radius: 0px 0px 10px 10px;
  min-width: 480px;
}
</style>
