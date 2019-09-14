<template>
  <div>
    <!-- 头部 -->
    <header>
      <div class="header">
        <div class="h_logo">
          <a href="#">
            <img src="../../assets/logo.png" alt />
          </a>
        </div>
        <div class="h_menu">
          <!-- 过渡 -->
          <router-link
            :to="item.link"
            class="a_list"
            :key="index"
            v-for="(item,index) of content"
            :title="item.cn"
          >
            <span class="cn">{{item.cn}}</span>
            <span class="en">{{item.en}}</span>
          </router-link>
        </div>
        <div class="h_tel">咨询热线：400-6068-158</div>
      </div>
    </header>
    <!-- header结束 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: Object.freeze([
        { cn: "网站首页", en: "HOME", link: "/" },
        { cn: "获取报价", en: "QUOTE", link: "/" },
        { cn: "婚礼", en: "WEDDING", link: "/wedding" },
        { cn: "酒店预订", en: "HOTEL", link: "/" },
        { cn: "海外婚礼", en: "OVERSEAS", link: "/" },
        { cn: "活动派对", en: "PARTY", link: "/" },
        { cn: "司仪天团", en: "STARCEREMONIES", link: "/" },
        { cn: "关于我们", en: "ABOUT", link: "/" },
        { cn: "加入我们", en: "JOINUS", link: "/" },
        { cn: "活动预约", en: "EVENT", link: "/" }
      ])
    };
  }
};
</script>

<style scoped>
/*****************header部分**************************/
.header {
  width: 1200px;
  height: 70px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  align-items: center;
}
.h_logo {
  width: 125px;
  height: 50px;
}
.h_menu {
  width: 800px;
  height: 50px;
  font-size: 14px;
  line-height: 50px;
}
.h_tel {
  width: 165px;
  height: 50px;
  font-size: 14px;
  line-height: 50px;
}
.a_list {
  width: 80px;
  height: 50px;
  float: left;
  font-size: 13px;
  padding: 0 10px;
  text-align: center;
  overflow: hidden;
  line-height: 50px;
  transition: all 0.5s linear;
  color: #333;
}

.header .h_menu .a_list .cn {
  width: 60px;
  height: 50px;
}
.header .h_menu .a_list .en {
  width: 60px;
  height: 50px;
}

.header .h_menu .a_list:hover {
  transform: translate(0, -50px);
  overflow: visible;
}

.header .h_menu .a_list:hover .en {
  border-bottom: 5px solid #000;
  height: 45;
  text-decoration: none;
  color: #333;
}
</style>