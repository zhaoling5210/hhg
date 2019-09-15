import Vue from "vue";
import Router from "vue-router";
// 引入组件
import HhgIndex from "@/components/IndexComponet/HhgIndex";
import HhgWedding from "@/components/WeddingComponet/WeddingIndex";
import WeddingDetail from "@/components/WeddingDetail/WeddingDetail";
import SiYiIndex from "@/components/SiYiComponent/SiYiIndex"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: HhgIndex
    },
    {
      path: "/wedding",
      component: HhgWedding
    },
    {
      path: "/detail",
      component: WeddingDetail
    },
    {
      path:"/siyi",
      component:SiYiIndex
    }
  ]
});
