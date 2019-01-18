<!-- head插件
        returns默认false,关闭返回按钮,boolean
        background默认#fff,背景色,String
        color默认#333,字体颜色,String
        deborder默认false,删除下边框,Boolean
 -->
<template>
  <div>
    <div class="header"></div>
    <div :style="{backgroundColor:!background?'#fff':background,color:color?color:'#333'}" :class="deborder?'head':'head bord'">
      <img v-if="!color?!returns:false" @click="returnto" src="../../static/img/icon_fanhui.png" alt="">
      <img v-if="color?!returns:false" @click="returnto" src="../../static/img/icon_fanhui_b.png" alt="">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    returns: Boolean,
    background: String,
    color: String,
    deborder: Boolean
  },
  methods: {
    returnto() {
      history.back();
    }
  },
  mounted() {}
};
</script>
<style lang="css" scoped>
.header {
  position: relative;
  left: 0;
  top: 0;
  height: 3.3333vw;
  margin-bottom: 40px;
}
.head {
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
  width: 100%;
  /* height: 13.333vw;  */
  padding-top: 3.333vw;
  font-size: 18px;
  line-height: 40px;
  z-index: 1000;
}
.bord {
  border-bottom: 1px solid #dbdbdb;
}
.head > img {
  position: absolute;
  left: 4vw;
  width: 10px;
  bottom: 11px;
}
</style>
