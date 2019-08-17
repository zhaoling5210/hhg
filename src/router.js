import Vue from "vue";
import Router from "vue-router";
// 引入组件
import HhgIndex from "@/components/IndexComponet/HhgIndex";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: HhgIndex
    }
  ]
});
