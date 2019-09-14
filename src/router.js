import Vue from "vue";
import Router from "vue-router";
// 引入组件
import HhgIndex from "@/components/IndexComponet/HhgIndex";
import HhgWedding from "@/components/WeddingComponet/Index";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: HhgIndex
    },
    {
      path:"/wedding",
      component:HhgWedding
    },
  ]
});
