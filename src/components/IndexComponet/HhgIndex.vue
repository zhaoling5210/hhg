<template>
  <div>
    <!-- banner开始 -->
        <div id="demo" class="carousel" data-ride="carousel">
        	<!-- 1.轮播图片-->
        	<div class="carousel-inner">
            	<div class="carousel-item active">
                	<img class="w-100" src="../../assets/index/1.jpg"/>
            	</div>
            	<div class="carousel-item">
                	<img  class="w-100" src="../../assets/index/2.jpg"/>
            	</div>
            	<div class="carousel-item">
                	<img  class="w-100" src="../../assets/index/3.jpg"/>
           		</div>
            	<div class="carousel-item">
                	<img  class="w-100" src="../../assets/index/4.jpg"/>
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
			<img src="../../assets/index/n_tit_img.png" alt="">
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
				<img src="../../assets/index/n_hunli_img.png" alt="">
			</div>
			<div class="w_piclist">
				<div class="w_list-one">
					<a href="http://www.huahaige.com/Western/8/1.html shouye">
						<img src="../../assets/index/list1.jpg" alt="你的名字蕴含着无限的意义">
					</a>
				</div>
				<div class="w_list-two">
					<div class="w_up">
						<a href="">
							<img src="../../assets/index/list2.jpg" alt="">
						</a>
					</div>
					<div class="w_down">
						<a href="">
							<img src="../../assets/index/list3.jpg" alt="">
						</a>
					</div>
				</div>
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
export default {

}
</script>

<style scoped>
  

/**************** banner部分 **************************/
.carousel-control-prev,
.carousel-control-next{
    width:4%;height: 20%;
    background:#aaa;
    border-radius: 0.25rem;
    top:40%;
}
.carousel-indicators li{
    width: 0.75rem;height:0.75rem;
    background-color:#fff;
    border-radius: 50%;
    margin:0 4px;
}
.carousel-indicators li:hover{
    cursor: pointer;
}
.carousel-indicators .active{
    background-color:#0aa1ed;
}
/*****************精于设计背景图片部分**************************/
.bg{
    width: 1200px;
    margin: 60px auto;
}
/*****************长短线部分**************************/
.short{
    width: 900px;
    border: 0.5px solid #535353;
    margin: 0 auto;
}
.long{
    width: 100%;
    border: 0.5px solid #434343;
    margin: 5px auto;
}
/*****************婚礼图片部分**************************/
.w_title,.s_title{
    width: 1200px;
    margin: 100px auto 30px;
    text-align: center;
}
.w_piclist{
    width: 1200px;
    margin: 0 auto 15px;
    display: flex;
    justify-content:space-around;
}
.w_piclist a{
    overflow: hidden;
    display: block;
}
.w_piclist a:hover > img {
    transform: scaleX(1.1) scaleY(1.1);
    filter: brightness(.5);
}
.w_list-one img{
    width:790px;
    height:540px;
    transition: all 2s ease 0s;
}
.w_list-two img{
    width:400px;
    height:265px;
    transition: all 2s ease 0s;
}
.w_up{
    margin-bottom:10px;
}
.w_more{
    width:200px;
    margin: 0 auto;
    text-align: center;
    
}
.w_more a{
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