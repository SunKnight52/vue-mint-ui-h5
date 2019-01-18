<template>
  <div class="coin">
    <div class="left">
      <div>
          <slot name="img"></slot>
      </div>
      <div class="in">
        <slot></slot>
        <span >/{{littitle}}</span>
        <p><slot name="content" class="con"></slot></p>
      </div>
    </div>
    <div class="right">
      <span>{{newll}}</span>
      <div :style="{backgroundColor:(back?back:'#4ca84b')}">{{add}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    littitle: String,
    newll: String,
    add: String,
    back:String,
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
.coin {
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #333;
  color: #fff;
  border-bottom: 1px solid #000;
  height: 61px;
}
.in {
  display: inline-block;
    font-weight: 700;
    font-size: 16px;
  > span {
    font-weight: normal;
    font-size: 12px;
  }
  >p {
    font-size: 12px;
    color: #ccc
  }
}
.left {
  margin-right: auto;
  display: flex;

  >div:first-of-type{
      width: 30px;
      text-align: center;
  }
}
.right {
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  > div {
    display: flex;
    // background-color: #4ca84b;
    align-items: center;
    width: 75px;
    height: 28px;
    justify-content: flex-end;
    border-radius: 3px;
    margin: 0 10px;
    padding-right: 5px;
  }
}
</style>
