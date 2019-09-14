<template>
  <div class="inside_cont">
    <div class="inside_tit">
      <img src="../../assets/wedding/hl_tit.png" alt />
    </div>
    <div class="inside_guide">
      当前位置：
      <a href="#" target="_blank">首页</a>
      >
      <a href="wedding.html">婚礼</a>
    </div>
    <div class="inside_wedding">
      <div class="inside_web_leftnav">
        <ul>
          <li class="on">
            <a href>
              01&nbsp;&nbsp;&nbsp;
              <i>————</i>
              &nbsp;&nbsp;&nbsp;婚礼图片
            </a>
          </li>
          <li>
            <a href>
              02&nbsp;&nbsp;&nbsp;
              <i>————</i>
              &nbsp;&nbsp;&nbsp;婚礼视频
            </a>
          </li>
        </ul>
      </div>
      <div class="inside_web_cont" id="wed_cont">
        <div class="inside_web_menu">
          <ul>
            <a v-for="(item,index) of weddingType" :key="index" :class="{on:currentType==item}" @click="typeOfWedding(item)">{{item||'全部'}}</a>
            <!-- <a :class="{on:currentType==''}" @click="typeOfWedding('')">全部</a>
            <a :class="{on:currentType=='草坪婚礼'}" @click="typeOfWedding('草坪婚礼')">草坪婚礼</a>
            <a :class="{on:currentType=='主题婚礼'}" @click="typeOfWedding('主题婚礼')">主题婚礼</a>
            <a :class="{on:currentType=='西式婚礼'}" @click="typeOfWedding('西式婚礼')">西式婚礼</a>
            <a :class="{on:currentType=='中式婚礼'}" @click="typeOfWedding('中式婚礼')">中式婚礼</a>
            <a :class="{on:currentType=='创意婚礼'}" @click="typeOfWedding('创意婚礼')">创意婚礼</a> -->
          </ul>
          <p>2019 NEW COLLECTION FROM HUAHAIGE WEDDING</p>
        </div>
        <div class="wedding_content">
          <ul>
            <li v-for="(item,index) of weddingList" :key="index">
              <a href target="_blank">
                <div class="wedpic">
                  <i></i>
                  <!-- axios配制的服务器端地址 + 图片在数据库存的地址 -->
                  <img :src="axios.defaults.baseURL+item.pic" alt="三生三世十里桃花" />
                </div>
                <h4>{{item.title}}</h4>
              </a>
            </li>
          </ul>
          <!-- 分页 -->
          <hhg-pagination
            v-if="pageTotalCount > 1"
            :pageTotalCount="pageTotalCount"
            @prePage="pagination"
            @nextPage="pagination"
            @targetPage="pagination"
          ></hhg-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// UI下的 是通用组件
import HhgPagination from "@/components/UI/HhgPagination";
import { CLIENT_RENEG_LIMIT } from "tls";
export default {
  components: {
    HhgPagination
  },

  data() {
    return {
      // 页面要展示的数据
      weddingList: [],
      // 总页数
      pageTotalCount: 1,
      // 当前页
      currentPage: 1,
      // 单页显示数据
      count: 9,
      // 当前选中婚礼类型
      currentType: "",
      weddingType: [
        "",
        "草坪婚礼",
        "主题婚礼",
        "西式婚礼",
        "中式婚礼",
        "创意婚礼"
      ]
    };
  },

  async created() {
    // 页面创建完成读取数据
    // await 代替 .then
    let res = await this.axios.get("/weddingList", {
      params: {
        count: this.count,
        page: this.currentPage,
        type: this.currentType
      }
    });
    this.pageTotalCount = Math.ceil(
      +(await this.axios.get("/weddingListCount", {})).data.data / this.count
    );
    this.weddingList = res.data.data;
  },
  methods: {
    // 页码改变重新查询
    async pagination(index) {
      let res = await this.axios.get("/weddingList", {
        params: { count: this.count, page: index, type: this.currentType }
      });
      this.weddingList = res.data.data;
    },
    async typeOfWedding(type) {
      // 点击婚礼类型更换 currentType
      this.currentType = type;
      // 点击婚礼类型重新查询
      let res = await this.axios.get("/weddingList", {
        params: { count: this.count, page: this.currentPage, type }
      });
      this.weddingList = res.data.data;

      // 查询总页数

      this.pageTotalCount = Math.ceil(
        +(await this.axios.get("/weddingListCount", { params: { type } })).data
          .data / this.count
      );
    }
  }
};
</script>

<style scoped>
.inside_cont {
  width: 100%;
}
.inside_tit {
  width: 1350px;
  margin: 0 auto 20px;
}
.inside_tit img {
  width: 1024px;
  height: 136px;
  margin: 0 auto;
  display: block;
}
.inside_guide {
  width: 1024px;
  max-width: 72%;
  font-size: 13px;
  margin: 0 auto;
  color: #999;
  line-height: 20px;
}

.inside_guide a {
  display: inline-block;
  margin: 0 5px;
  color: #999;
}
.inside_guide a:hover {
  color: #000;
  text-decoration: none;
}
.inside_wedding {
  width: 100%;
  margin: 20px auto 0;
  display: flex;
  position: relative;
}
.inside_wedding .inside_web_leftnav {
  width: 285px;
  height: 110px;
  margin-bottom: 40px;
  margin-top: 88px;
  position: absolute;
  left: 0;
}
.inside_wedding .inside_web_leftnav ul {
  width: 240px;
}
.inside_wedding .inside_web_leftnav ul li {
  height: 40px;
  margin: 10px 0;
}
.inside_wedding .inside_web_leftnav ul li:hover a {
  background: #0f0c15;
  font-size: 14px;
  color: #fff;
}

.inside_wedding .inside_web_leftnav ul li a {
  display: inline-block;
  width: 240px;
  height: 40px;
  line-height: 40px;
  padding-left: 50px;
  font-size: 13px;
  font-family: "Microsoft Yahei";
  text-decoration: none;
  color: #333;
}
.inside_wedding .inside_web_leftnav ul li a i {
  color: #636363;
}

.inside_wedding .inside_web_cont {
  width: 1350px;
  max-width: 72%;
  margin: 0 auto;
}

#wed_cont {
  margin-left: 284px;
}
.inside_wedding .inside_web_cont .inside_web_menu {
  width: 100%;
}
.inside_wedding .inside_web_cont .inside_web_menu ul {
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 10px auto;
}

.inside_wedding .inside_web_cont .inside_web_menu ul a {
  font-size: 15px;
  padding: 0 8px;
  color: #666;
  border-right: 1px solid #666;
  line-height: 16px;
}
.inside_wedding .inside_web_cont .inside_web_menu ul a:hover {
  color: #181818;
  font-weight: bold;
  text-decoration: none;
}

.inside_wedding .inside_web_cont .inside_web_menu p {
  text-align: center;
  text-transform: uppercase;
  font-size: 10px;
  color: #999;
}

.inside_wedding .inside_web_cont .wedding_content {
  width: 100%;
  margin: 50px auto 0;
}
.inside_wedding .inside_web_cont .wedding_content ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.inside_wedding .inside_web_cont .wedding_content ul li {
  width: 33%;
  margin: 0 0.111% 50px;
}
.inside_wedding .inside_web_cont .wedding_content ul li a {
  width: 100%;
  text-decoration: none;
}

.inside_wedding .inside_web_cont .wedding_content ul li a .wedpic {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.inside_wedding .inside_web_cont .wedding_content ul li a .wedpic i {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../../assets/wedding/inside_wed_cen.png") no-repeat center;
  background-size: 107%;
  opacity: 0;
}
.inside_wedding .inside_web_cont .wedding_content ul li a .wedpic i:hover {
  opacity: 1;
}
.inside_wedding .inside_web_cont .wedding_content ul li a .wedpic img {
  margin: 0 auto;
  padding: 0;
  border: none;
  display: block;
  max-width: 100%;
}
.inside_wedding .inside_web_cont .wedding_content ul li a h4 {
  margin: 20px auto 0;
  font-size: 16px;
  color: #181818;
  line-height: 20px;
  font-weight: bold;
}

a.on,
a:hover {
  color: #181818;
  font-weight: bold;
}
</style>