<template>
  <!-- 婚礼资讯 -->
  <div class="newswed">
    <div class="news">
      <div class="news_tit">
        <h4>婚礼资讯</h4>
        <a href target="_blank">more +</a>
      </div>
      <ul class="news_cont">
        <li>
          <a href target="_blank">
            <img src="@/assets/wednews/news1.jpg" alt />
            <h4>伦敦时装周春夏| 2019 ...</h4>
            <time>TIME:2018/10/22</time>
            <p>每一季潘通色彩研究所(Pantone Color Institute™)的团队都会制作潘通时装流行色趋势报告(PANTONE Fashion Color Trend Report)</p>
            <span>阅读全文></span>
          </a>
        </li>
        <li>
          <a href target="_blank">
            <img src="@/assets/wednews/news2.jpg" alt />
            <h4>婚礼颜色搭配法则 | 流...</h4>
            <time>TIME:2018/10/20</time>
            <p>新人置办婚礼面临的第一个问题就是：选什么颜色搭配。因为选好了颜色，才能开始选择花材、装饰物，礼服，甚至西装等等。所以选对颜色真</p>
            <span>阅读全文></span>
          </a>
        </li>
        <li>
          <a href target="_blank">
            <img src="@/assets/wednews/news3.jpg" alt />
            <h4>视帝陈展鹏大婚 | 新娘...</h4>
            <time>TIME:2018/10/24</time>
            <p>视帝陈展鹏早在上个月的时候，便通过big big channel跟大家开心分享即将与港姐女友单文柔结婚的好消息，时间一眨眼就过去，相信这对准</p>
            <span>阅读全文></span>
          </a>
        </li>
        <li>
          <a href target="_blank">
            <img src="@/assets/wednews/news4.jpg" alt />
            <h4>心动的信号 | 即将收官...</h4>
            <time>TIME:2018/10/23</time>
            <p>等了一周今晚又要继续撒糖了，开心~~~最新几期刘泽煊开始猛烈进攻，带她去赛车，教她功课，和她一起坐热气球，一句我们家宝宝疯不</p>
            <span>阅读全文></span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
/***************** 婚礼资讯**************** */
.newswed {
  width: 100%;
  background-color: #f3f3f3;
  padding: 40px 0;
  margin: 0 auto 30px;
}
.news {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
.news .news_tit {
  width: 100%;
  display: flex;
  margin: 0 auto 20px;
}
.news .news_tit h4 {
  width: 1130px;
  font-size: 20px;
  line-height: 32px;
  font-weight: normal;
  display: inline-block;
  margin: 0 auto;
  text-align: left;
}
.news .news_tit a {
  font-size: 14px;
  width: 100px;
  border: 1px solid #666;
  height: 30px;
  line-height: 30px;
  text-align: center;
  text-decoration: none;
  color: #333;
}
.news .news_cont {
  width: 100%;
  display: flex;
}
.news .news_cont li {
  width: 25%;
  background-color: #fff;
  border: 1px solid #e1e1e1;
  margin-right: -1px;
}
.news .news_cont li a {
  display: block;
  width: 86%;
  margin: 25px 7%;
  text-decoration: none;
  color: #333;
}
.news .news_cont li a img {
  width: 100%;
}
.news .news_cont li a h4 {
  font-size: 14px;
  color: #191919;
  margin: 15px auto;
}
.news .news_cont li a time {
  color: #bbb;
  text-transform: uppercase;
  font-size: 12px;
  display: block;
}
.news .news_cont li a p {
  font-size: 12px;
  line-height: 20px;
  color: #666;
  margin: 10px auto 25px;
  height: 60px;
  overflow: hidden;
}
.news .news_cont li a span {
  color: #b40007;
  font-size: 12px;
}
</style>