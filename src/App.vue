<template>
  <div id="app">
    <hhg-header></hhg-header>
    <router-view></router-view>
    <wedding-news v-if="$route.path!=='/'"></wedding-news>
    <hhg-footer></hhg-footer>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HhgHeader from "@/components/HeaderComponet/HhgHeader";
import HhgFooter from "@/components/FooterComponet/HhgFooter";
import WeddingNews from "@/components/WeddingNews/WeddingNewsIndex.vue";

import "./assets/base.scss";

export default {
  name: "app",
  components: {
    HhgHeader,
    HhgFooter,
    WeddingNews
  },
  created() {
  }
};
</script>

<style>
</style>
