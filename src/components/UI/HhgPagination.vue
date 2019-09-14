<template>
  <div class="fenye">
    <ul>
      <a @click="prePage()" :class="{disable:currentPage<=1}">上一页</a>
      <a
        v-for="(item,index) of pageCountList"
        :key="index"
        :class="{'on disable':currentPage == index + 1}"
        @click="targetPage(index+1)"
      >{{index + 1}}</a>
      <a class="a1" @click="nextPage()" :class="{disable:currentPage>=pageTotalCount}">下一页</a>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 当前页
      currentPage: 1
    };
  },
  computed: {
    // 根据总页数生成一个空的数组，方便v-for遍历
    pageCountList() {
      return new Array(this.pageTotalCount); 
    }
  },
  props: {
    // 页码总数
    pageTotalCount: {
      // 传过来的参数类型是Number
      type: Number,
      // 传过来的参数是否必须
      required: true,
      // 传过来的参数验证 false 会报错
      validator: function(val) {
        return val < Number.MAX_VALUE && val > 0;
      }
    }
  },
  methods: {
    // 点上一页
    prePage() {
      // 回到页面最上方
      window.scrollTo(0, 0);
      // 当前页码减1
      this.currentPage--;
      // 触发父组件 prePage
      this.$emit("prePage", this.currentPage);
    },
    // 点下一页
    nextPage() {
      window.scrollTo(0, 0);
      this.currentPage++;
      this.$emit("nextPage", this.currentPage);
    },
    // 点页码
    targetPage(index) {
      window.scrollTo(0, 0);
      this.currentPage = index;
      this.$emit("targetPage", index);
    }
  }
};
</script>

<style>
a {
  cursor: pointer;
}
.fenye {
  width: 100%;
  margin: 50px auto;
}
.fenye ul {
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

.fenye ul a {
  font-size: 16px;
  margin: 0 7px;
  min-width: 25px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  text-decoration: none;
  color: #333;
}
.fenye ul a:hover {
  color: #b60000;
}
.fenye ul a.on,
.fenye ul a:hover {
  color: #b60000;
}
.disable {
  pointer-events: none;
}
</style>