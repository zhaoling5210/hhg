<template>
  <div class="w_piclist" :class="{r:index%2}">
    <div class="w_list-one">
      <!-- {样式名:布尔值}  !! 隐式转为布尔值-->
      <a href="javascript:;">
        <img :src=big alt="你的名字蕴含着无限的意义" />
      </a>
    </div>
    <div class="w_list-two">
      <div class="w_up">
        <a href="javascript:;">
          <img :src=small1 />
        </a>
      </div>
      <div class="w_down">
        <a href="javascript:;">
          <img :src=small2  />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      // 默认值
      default: 0,
      // 这个参数是否必须
      required: false,
      // 检测类型
      type: Number,
      // 验证(true)
      validator(val) {
        return val >= 0;
      }
    },
    big: {
      required: true,
      type: String,
      validator(val) {
        return val.trim().length > 0;
      }
    },
    small1: {
      required: true,
      type: String,
      validator(val) {
        return val.trim().length > 0;
      }
    },
    small2: {
      required: true,
      type: String,
      validator(val) {
        return val.trim().length > 0;
      }
    }
  }
};
</script>

<style>
/*  */
.r {
  flex-direction: row-reverse;
}
.w_piclist {
  width: 1200px;
  margin: 0 auto 15px;
  display: flex;
  justify-content: space-around;
}
.w_piclist a {
  overflow: hidden;
  display: block;
}
.w_piclist a:hover > img {
  transform: scaleX(1.1) scaleY(1.1);
  filter: brightness(0.5);
}
.w_list-one img {
  width: 790px;
  height: 540px;
  transition: all 2s ease 0s;
}
.w_list-two img {
  width: 400px;
  height: 265px;
  transition: all 2s ease 0s;
}
.w_up {
  margin-bottom: 10px;
}
</style>