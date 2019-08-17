<template>
  <div>
    <!-- 服务咨询开始 -->
    <div class="service">
      <div class="s_title">
        <img src="../../assets/footer/n_zixun_img.png" alt />
      </div>
      <div class="service_show">
        <div class="s_k1"></div>
        <div class="s_k2"></div>
        <div class="s_bm">
          <div class="s_left">
            <form class="s_form" action>
              <label class="sign">
                <i>*</i>
                姓名
              </label>
              <input type="text" name class="input_info_name" />
              <label class="sign">
                <i>*</i>
                婚期
              </label>
              <input type="text" name class="input_info_hunqi" />
              <label class="sign">
                <i>*</i>
                电话
              </label>
              <input type="text" name class="input_info_phone" />
              <label class="sign">
                <i>&nbsp;</i>
                微信
              </label>
              <input type="text" name class="input_info_weixin" />
              <label class="sign">
                <i>*</i>
                验证码
              </label>
              <input type="text" name id="input_info_verifycode" />
              <input type="button" name id="input_button" value="获取验证码" />
              <input type="hidden" name class="input_info_laiyuan" value="婚礼图片详情页报名" />
              <input type="hidden" name class="input_info_shijian" value="2019-07-10 09:23:40" />
              <input type="submit" name id="input_tijiao" value="提交" />
            </form>
          </div>
          <div class="s_right">
            <span>
              公司地址
              <i>Address——</i>
            </span>
            <div class="s_address">
              <h6>
                花海阁总店
                <a href="#" target="_blank">查看地图</a>
              </h6>
              <p>地址：北京市朝阳区光华路soho一期二单元八层805</p>
              <p></p>
              <p>路线：</p>
              <div class="s_map">
                <img src="../../assets/footer/foot_map.png" alt />
              </div>
            </div>
          </div>
          <div class="cl"></div>
        </div>
      </div>
    </div>
    <!-- 服务咨询结束 -->
    <!-- footer开始 -->
    <footer>
      <div class="footer">
        <div class="f_erweima">
          <img src="../../assets/footer/1.jpg" alt />
          <img src="../../assets/footer/2.jpg" alt />
        </div>
        <p class="f_address">公司地址：花海阁总店：北京市朝阳区光华路soho一期二单元八层805</p>
        <p class="f_banquan">婚庆公司© 2015-2018 版权所有：北京花海阁文化发展有限公司 京ICP备 13011293号-1</p>
        <div class="f_zztj">
          <img src="../../assets/footer/pic.gif" alt />
        </div>
        <div class="f_link">
          <a href="javascript:;" title="友情链接">友情链接</a>
          <a href="http://www.huahaige.com/" target="_blank" title="婚礼策划">婚礼策划</a>
          <a href="http://www.musestudio.net/" target="_blank" title="韩式婚纱摄影">韩式婚纱摄影</a>
          <a href="http://www.skyphoto.com.cn/" target="_blank" title="北京婚纱摄影">北京婚纱摄影</a>
          <a href="http://www.deyetown.com/" target="_blank" title="成都婚纱摄影">成都婚纱摄影</a>
          <a href="http://panzi.cc/index.html" target="_blank" title="古装艺术照">古装艺术照</a>
          <a href="http://www.vivibride.cn/" target="_blank" title="昆明婚纱摄影">昆明婚纱摄影</a>
          <a href="http://www.musestudio.net/" target="_blank" title="韩式婚纱摄影">韩式婚纱摄影</a>
          <a href="http://bj.daoxila.com/" target="_blank" title="北京结婚网">北京结婚网</a>
        </div>
      </div>
    </footer>
    <!-- footer结束 -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
/*****************服务咨询部分**************************/
.service {
  width: 100%;
  position: relative;
}
.s_title {
  width: 1200px;
  height: 62px;
  margin: 100px auto 30px;
  text-align: center;
}
.service_show {
  width: 1200px;
  height: 600px;
  margin: 0 auto 30px;
  position: relative;
}
.s_k1 {
  width: 1200px;
  height: 530px;
  border: 2px solid #beaac9;
  position: absolute;
  top: 10px;
}
.s_k2 {
  width: 1200px;
  height: 530px;
  border: 2px solid #beaac9;
  position: absolute;
  right: 10px;
  top: 24px;
}
.s_bm {
  width: 1070px;
  position: relative;
  margin: 0 60px;
}
.s_left {
  width: 449px;
  height: 403px;
  border: 1px solid rgba(200, 200, 200, 0.5);
  padding: 2% 6% 4% 6%;
  box-shadow: 1px 2px 11px 0 #909090;
  position: relative;
  float: left;
  top: 80px;
  display: flex;
  flex-wrap: wrap;
}
.s_form {
  width: 320px;
  height: 338px;
  display: block;
  margin-top: 0em;
}
.sign {
  font-size: 13px;
  color: #333;
  float: left;
  line-height: 50px;
  font-family: "Awesome Font";
  margin-bottom: 0;
}
.s_left .sign i {
  /* color:#FF0000; */
  font-weight: normal;
  font-style: normal;
}
.s_left input {
  width: 250px;
  font-size: 14px;
  height: 50px;
  line-height: 50px;
  border: 0;
  border-bottom: 2px solid #dcdcdc;
  margin-left: 20px;
}
#input_info_verifycode {
  width: 130px;
  margin-left: 16px;
}
#input_button {
  width: 90px;
  background-color: #333;
  color: #fff;
  border-radius: 11px;
  margin-top: 13px;
  height: 38px;
  line-height: 38px;
  font-size: 13px;
  cursor: pointer;
}
#input_tijiao {
  width: 300px;
  height: 40px;
  line-height: 40px;
  margin-top: 6%;
  background: #333;
  color: #fff;
  font-size: 13px;
  border-radius: 12px;
  margin-left: 0;
  cursor: pointer;
}
.s_right {
  width: 375px;
  margin-right: 0;
  background-size: 100% 100%;
  background: url(../../assets/footer/background_right.png) no-repeat 0 15%;
  float: right;
  position: relative;
  top: 80px;
}
.s_right .s_address {
  margin-top: 15px;
  margin-bottom: 25px;
}
.s_right .s_address h6 {
  color: #181818;
  font-size: 16px;
  font-weight: bold;
  margin: 5px auto;
  line-height: 20px;
}
.s_right .s_address h6 a {
  display: inline-block;
  margin-left: 10px;
  position: relative;
  text-indent: 20px;
  font-weight: normal;
  font-size: 14px;
  text-decoration: none;
  color: #333;
}
.s_right .s_address h6 ::before {
  content: " ";
  width: 18px;
  height: 18px;
  background: url(../../assets/footer/icon_map.png) no-repeat;
  background-size: contain;
  position: absolute;
  left: 0;
}
.s_right .s_address p {
  font-family: "Microsoft Yahei";
  font-size: 16px;
  line-height: 20px;
}
.s_map {
  margin-top: 45px;
}
.s_map img {
  width: 375px;
  height: 238px;
  margin: 0 auto;
  padding: 0;
  border: none;
  display: block;
}
.cl {
  clear: both;
}
/*****************footer部分**************************/
.footer {
  width: 1423;
  background: #434343;
  padding: 30px 0 20px;
}
.f_erweima {
  width: 1423px;
  text-align: center;
}
.f_erweima img {
  width: 168px;
  height: 143px;
  padding: 0 20px 15px;
}
.f_address {
  width: 1200px;
  margin: 0 auto;
  font-size: 13px;
  color: #fff;
  text-align: center;
}
.f_banquan {
  width: 1200px;
  margin: 0 auto;
  font-size: 13px;
  color: #fff;
  text-align: center;
  padding-top: 30px;
}
.f_zztj {
  width: 50px;
  margin: 10px auto;
}
.f_link {
  width: 1200px;
  margin: 10px auto;
  text-align: center;
}
.f_link a {
  color: #fff;
  margin: 0 5px;
  font-size: 12px;
}
.f_link a:hover {
  color: #9c9c9c;
}
</style>