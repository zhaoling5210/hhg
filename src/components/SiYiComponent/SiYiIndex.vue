<template>
  <div class="siyi">
    <div class="s_tit">
      <img src="../../assets/siyi/sy_tit.png" alt />
    </div>
    <div class="s_guide">
      当前位置:
      <a href>首页</a>
      >
      <a href>司仪天团</a>
    </div>
    <div class="s_siyi">
      <div class="siyi_cont">
        <div class="box">
          <h6>
            <img src="../../assets/siyi/siyi_t.png" alt />
          </h6>
          <div class="left_scroll">
            <a href="javascript:;" class="prev" @click="preSiYiPic"></a>
            <div class="left_img">
              <div class="temp">
                <ul>
                  <li
                    :class="{on:currentBigPicIndex == (currentPicIndex + index)%siyiList.length}"
                    v-for="(item,index) of siyiListFormat"
                    :key="index"
                  >
                    <a @mouseover="changeSiYiPic(index)">
                      <img :src="axios.defaults.baseURL+'/'+item.pic_small" alt />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <a href="javascript:;" class="next" @click="nextSiYiPic()"></a>
          </div>
          <ul class="right_scroll">
            <li>
              <a href target="_blank" title="于思齐">
                <img :src="currentBigPicUrl" alt="于思齐" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      siyiList: [],
      currentPicIndex: 0,
      currentBigPicUrl: "",
      currentBigPicIndex: 0
    };
  },
  computed: {
    // axios.defaults.baseURL+'/'+siyiList[currentPicIndex%siyiList.length].pic_big
    // 存储当前显示的图片
    siyiListFormat() {
      // 处理截取后的字符串
      let re = [];
      // 当前图片下标
      let index = this.currentPicIndex;
      // 总共多少张图片
      let count = this.siyiList.length;
      re.push(this.siyiList[index % count]);
      index++;
      re.push(this.siyiList[index % count]);
      index++;
      re.push(this.siyiList[index % count]);
      index++;
      re.push(this.siyiList[index % count]);
      return re;
    }
  },
  async created() {
    let result = await this.axios.get("/siyiList");
    this.siyiList = result.data.data;
    this.currentBigPicUrl =
      this.axios.defaults.baseURL +
      "/" +
      this.siyiList[this.currentPicIndex % this.siyiList.length].pic_big;
  },
  methods: {
    nextSiYiPic() {
      this.currentPicIndex++;
    },
    preSiYiPic() {
      this.currentPicIndex--;
      if (this.currentPicIndex < 0) {
        this.currentPicIndex = this.siyiList.length - 1;
      }
    },
    changeSiYiPic(index) {
      // console.log((this.currentPicIndex + index) % this.siyiList.length);
      this.currentBigPicIndex =
        (this.currentPicIndex + index) % this.siyiList.length;
      this.currentBigPicUrl =
        this.axios.defaults.baseURL +
        "/" +
        this.siyiList[this.currentBigPicIndex].pic_big;
    }
  }
};
</script>

<style scoped>
.siyi {
  width: 1350px;
  max-width: 80%;
  margin: 0px auto 0;
}
.s_tit {
  width: 100%;
  margin: 0 auto 20px;
}
img {
  margin: 0 auto;
  padding: 0;
  border: none;
  display: block;
  max-width: 100%;
}
.s_guide {
  width: 100%;
  margin: 0 auto;
  font-size: 13px;
  color: #999;
  line-height: 20px;
}
.s_guide a {
  display: inline-block;
  margin: 0 5px;
  color: #999;
}
.s_siyi {
  width: 100%;
  margin: 35px auto 0;
}
.siyi_cont {
  width: 100%;
  margin-top: 20px;
}
.box {
  width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-wrap: nowrap;
}
.box h6 {
  width: 220px;
  height: 50px;
  position: absolute;
  top: 0;
  left: 0;
}
.left_scroll {
  margin-top: 50px;
  position: relative;
  width: 300px;
  height: 534px;
  max-width: 22%;
}
.left_scroll .prev {
  top: 10px;
}
.left_scroll .prev,
.left_scroll .next {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: block;
  width: 27px;
  height: 15px;
  background: url("../../assets/siyi/controls3.png") 0px 0px no-repeat;
  filter: alpha(opacity=50);
  opacity: 0.7;
}
.left_scroll .left_img {
  overflow: hidden;
  width: 100%;
  height: 448px;
  position: absolute;
  margin: 40px auto 0;
}
.left_scroll .left_img ul li a:before {
  content: " ";
  position: absolute;
  top: 0;
  width: 142px;
  height: 112px;
  display: block;
  background: rgba(0, 0, 0, 0.4);
  left: 0;
  z-index: 15;
}
.left_scroll .left_img ul li.on a:before {
  background: none;
}
.temp {
  overflow: hidden;
  position: relative;
  height: 448px;
}
.temp ul {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
.temp ul li {
  width: 142px;
  cursor: pointer;
  color: #636363;
  height: 112px;
  overflow: hidden;
  margin: 0 auto;
}
.temp ul li a {
  width: 142px;
  height: 110px;
  margin: 1px auto;
  position: relative;
}
.left_scroll .next {
  bottom: 10px;
  background-position: 0 -15px;
}
.right_scroll {
  width: 888px;
  height: 541px;
  position: relative;
  z-index: 0;
}
.right_scroll li {
  width: 888px;
  left: 0;
  top: 0;
  position: absolute;
  /* display: none; */
  zoom: 1;
  vertical-align: middle;
}
.right_scroll img {
  width: 100%;
  height: auto;
  display: block;
}
</style>