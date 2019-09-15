<template>
  <div class="wedpic">
    <div class="wedpic_tit">
      <img src="@/assets/wedpic/hl_tit .png" alt />
    </div>
    <div class="wedpic_guide">
      当前位置：
      <a href>首页</a>
      >
      <a href>婚礼</a>
      >
      <a href>婚礼图片</a>
      >
      <a href>主题婚礼</a>
    </div>
    <div class="wedpic_wedding" id="show_wedding">
      <div class="wed_tit">
        <img src="@/assets/wedpic/inside_hlshow_tit.png" alt />
      </div>
      <div class="wed_show">
        <div class="wed_show_left">
          <div class="show_img">
            <div v-for="(item,index) of detailList" :key="index">
              <br />
              <img :src="axios.defaults.baseURL+'/'+item.path" alt />
              <!-- <br />
              <img src="img/wedpic/ssss1.jpg" alt />
              <br />
              <img src="img/wedpic/ssss2.jpg" alt />
              <br />
              <img src="img/wedpic/ssss3.jpg" alt />
              <br />
              <img src="img/wedpic/ssss4.jpg" alt />
              <br />
              <img src="img/wedpic/ssss5.jpg" alt />
              <br />
              <img src="img/wedpic/ssss6.jpg" alt />
              <br />
              <img src="img/wedpic/ssss7.jpg" alt />
              <br />
              <img src="img/wedpic/ssss8.jpg" alt />
              <br />
              <img src="img/wedpic/ssss9.jpg" alt />-->
            </div>
          </div>
        </div>
        <div class="wed_show_right">
          <div class="show_rtit">
            <img src="@/assets/wedpic/show_wedtit.png" alt />
          </div>
          <div class="show_fd">
            <div class="show_r_top">
              <h6>{{this.detailList[0].title}}</h6>
              <p>
                当我遇到你
                <br />原想收获一缕春风
                <br />你却给了我整个春天
                <br />桃花已然绽放
                <br />许下三世真心
                <br />只因三生三世
                <br />缘来有你
              </p>
            </div>
            <div class="show_r_form">
              <span>
                服务咨询预订
                <i>Service and order</i>
              </span>
              <form method="POST" action class="show_form">
                <div class="show_formcont">
                  <input type="text" name class="show_input name" placeholder="姓名" value />
                  <input type="text" name class="show_input phone" placeholder="联系电话" value />
                  <input type="text" name class="show_input dangqi" placeholder="预约档期" value />
                  <input type="text" name id="show_input verifycode" placeholder="验证码" />
                  <input type="button" name id="show_button" value="获取验证码" />
                  <input type="hidden" name class="laiyuan" value="婚礼图片详情页报名" />
                  <input type="hidden" name class="shijian" value="2019-07-10 09:23:40" />
                  <input type="submit" name id="show_tijiao" value="提交" />
                </div>
              </form>
              <div class="return_list">
                <a href="#" target="_blank">返回</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 婚礼详情页列表
      detailList: []
    };
  },
  async created() {
    console.log(this.$route)
    let result = await this.axios.get("/weddingDetail", {
      params: { wid: this.$route.query.wid }
    });
    this.detailList = result.data.data;
    // console.log(this.detailList);
  }
};
</script>

<style>
.wedpic {
  width: 100%;
}
.wedpic_tit {
  width: 1350px;
  max-width: 72%;
  margin: 0 auto 20px;
}
img {
  margin: 0 auto;
  padding: 0;
  border: none;
  display: block;
  max-width: 100%;
}
.wedpic_guide {
  width: 1350px;
  max-width: 72%;
  margin: 0 auto;
  font-size: 13px;
  color: #999;
  line-height: 20px;
}
.wedpic_guide a {
  display: inline-block;
  margin: 0 5px;
  color: #999;
}
.wedpic_wedding {
  flex-wrap: wrap;
  width: 1350px;
  max-width: 72%;
  margin: 20px auto 0;
  display: flex;
  position: relative;
}
.wedpic_wedding .wed_tit {
  width: 100%;
  margin: 50px 0;
}
.wedpic_wedding .wed_tit img {
  margin-left: 0;
}
.wedpic_wedding .wed_show {
  width: 100%;
  margin: 0 auto;
  display: flex;
  border: 1px solid #ebebeb;
  border-bottom: none;
}
.wedpic_wedding .wed_show .wed_show_left {
  width: 960px;
  max-width: 72%;
}
.wedpic_wedding .wed_show .wed_show_left .show_img {
  width: 92%;
  margin: 50px 5% 50px 3%;
  line-height: 0;
}
.wedpic_wedding .wed_show .wed_show_right {
  max-width: 28%;
  margin-top: -1px;
  border-left: 1px solid #dbdbdb;
  padding-bottom: 30px;
  position: relative;
}
.wedpic_wedding .wed_show .wed_show_right .show_rtit {
  width: 100%;
  margin-bottom: 30px;
}
.wedpic_wedding .wed_show .wed_show_right .show_rtit img {
  margin-left: 0;
}
.wedpic_wedding .wed_show .wed_show_right .show_fd {
  position: relative;
  top: 0px;
  left: 0px;
  width: 287px;
}
.wedpic_wedding .wed_show .wed_show_right .show_fd .show_r_top {
  width: 100%;
}
.wedpic_wedding .wed_show .wed_show_right .show_fd .show_r_top h6 {
  font-size: 20px;
  color: #333;
  margin: 0 0 10px 30px;
}
.wedpic_wedding .wed_show .wed_show_right .show_fd .show_r_top p {
  margin-top: 20px;
  margin-left: 30px;
  font-size: 14px;
  color: #666;
  line-height: 22px;
  padding-bottom: 30px;
}
.wedpic_wedding .wed_show .wed_show_right .show_fd .show_r_form {
  margin-left: 30px;
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  position: relative;
  top: 0;
}
.wedpic_wedding .wed_show .wed_show_right .show_fd .show_r_form span {
  width: 100px;
  font-size: 16px;
  color: #181818;
  line-height: 20px;
  margin-bottom: 10px;
}
.show_formcont {
  width: 100%;
  margin: 10px 0 0 0;
}
.show_formcont input {
  width: 100%;
  border: none;
  border-bottom: 1px solid #d5d5d5;
  height: 45px;
  line-height: 45px;
  margin-bottom: 5px;
}
#show_input verifycode {
  width: 170px;
}
#show_button {
  width: 80px;
  background-color: #3d3d3d;
  font-size: 12px;
  color: #fff;
}
#show_tijiao {
  width: 100px;
  height: 36px;
  line-height: 36px;
  background-color: #3d3d3d;
  color: #fff;
  margin: 20px auto 0;
  display: block;
}
.wedpic_wedding .wed_show .wed_show_right .show_fd .show_r_form .return_list {
  width: 168px;
  margin: 30px auto;
  height: 42px;
  line-height: 42px;
  border: 1px solid #282828;
  text-align: center;
  font-size: 14px;
  color: #282828;
}
a {
  text-decoration: none;
  color: #333;
}
</style>