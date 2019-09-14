<template>
  <div>
    <!-- banner开始 -->
    <div id="demo" class="carousel" data-ride="carousel">
      <!-- 1.轮播图片-->
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="w-100" src="../../assets/index/1.jpg" />
        </div>
        <div class="carousel-item">
          <img class="w-100" src="../../assets/index/2.jpg" />
        </div>
        <div class="carousel-item">
          <img class="w-100" src="../../assets/index/3.jpg" />
        </div>
        <div class="carousel-item">
          <img class="w-100" src="../../assets/index/4.jpg" />
        </div>
      </div>
      <!-- 2.左右箭头-->
      <a data-slide="prev" class="carousel-control-prev" href="#demo">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a data-slide="next" class="carousel-control-next" href="#demo">
        <span class="carousel-control-next-icon"></span>
      </a>
      <!-- 3.轮播指示器-->
      <ul class="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" class="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
        <li data-target="#demo" data-slide-to="3"></li>
      </ul>
    </div>
    <!-- banner结束 -->
    <!-- 精于设计背景图片开始 -->
    <div class="bg">
      <img src="../../assets/index/n_tit_img.png" alt />
    </div>
    <!-- 精于设计背景图片结束 -->
    <!-- 长短线开始 -->
    <div class="short"></div>
    <div class="long"></div>
    <div class="short"></div>
    <!-- 长短线结束 -->

    <!-- 婚礼图片开始 -->
    <div class="wedpic">
      <div class="w_title">
        <img src="../../assets/index/n_hunli_img.png" alt />
      </div>
      <!-- 楼层图片组 -->
      <div v-for="(item,index) of floorImg" :key="index">
        <hhg-floor
          :index="index"
          :[item[2].img_type]="'@/../index/f'+(index+1)+'/'+item[2].img_url"
          :[item[1].img_type]="'@/../index/f'+(index+1)+'/'+item[1].img_url"
          :[item[0].img_type]="'@/../index/f'+(index+1)+'/'+item[0].img_url"
        ></hhg-floor>
      </div>
      <div class="w_more">
        <a href="http://www.huahaige.com/wedphoto/1.html" target="_blank">更多内容>></a>
      </div>
    </div>
    <!-- 婚礼图片结束 -->
    <!-- 长短线开始 -->
    <div class="short"></div>
    <div class="long"></div>
    <div class="short"></div>
    <!-- 长短线结束 -->
  </div>
</template>

<script>
import HhgFloor from "./HhgFloor";
export default {
  data() {
    return {
      floorImg: []
    };
  },
  async created() {
    // fetchJsonp("http://127.0.0.1:9999/floor").then(res=>{
    //   return res.json()
    // }).then(result=>{
    //   console.log(result);
    // })
    // 请求
    // console.log(this.axios)
    let res = await this.axios.get("/floor",{});
    this.floorImg = Object.freeze(await res.data.data);
  },
  components: {
    HhgFloor
  }
};
</script>

<style scoped>
/**************** banner部分 **************************/
.carousel-control-prev,
.carousel-control-next {
  width: 4%;
  height: 20%;
  background: #aaa;
  border-radius: 0.25rem;
  top: 40%;
}
.carousel-indicators li {
  width: 0.75rem;
  height: 0.75rem;
  background-color: #fff;
  border-radius: 50%;
  margin: 0 4px;
}
.carousel-indicators li:hover {
  cursor: pointer;
}
.carousel-indicators .active {
  background-color: #0aa1ed;
}
/*****************精于设计背景图片部分**************************/
.bg {
  width: 1200px;
  margin: 60px auto;
}
/*****************长短线部分**************************/
.short {
  width: 900px;
  border: 0.5px solid #535353;
  margin: 0 auto;
}
.long {
  width: 100%;
  border: 0.5px solid #434343;
  margin: 5px auto;
}
/*****************婚礼图片部分**************************/
.w_title,
.s_title {
  width: 1200px;
  margin: 100px auto 30px;
  text-align: center;
}
.w_more {
  width: 200px;
  margin: 0 auto;
  text-align: center;
}
.w_more a {
  display: block;
  background-color: #d2c1dc;
  color: #fff;
  font-size: 15px;
  margin: 55px auto 80px;
  padding: 10% 0;
}
.w_more a:hover {
  background: #000;
  text-decoration: none;
}
</style>