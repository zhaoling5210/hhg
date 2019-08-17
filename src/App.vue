<template>
  <div id="app">
    <hhg-header></hhg-header>
    <router-view></router-view>
    <hhg-footer></hhg-footer>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HhgHeader from "@/components/HeaderComponet/HhgHeader";
import HhgFooter from "@/components/FooterComponet/HhgFooter";

import "./assets/base.scss";

export default {
  name: "app",
  components: {
    HhgHeader,
    HhgFooter
  }
};
</script>

<style>
</style>
