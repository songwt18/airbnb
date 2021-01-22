<template>
  <div id="redpacket">
      <div class="red-left iconfont icon-hongbao"></div>
      <div class="red-center">
          <span class="center-top">领取￥150新人礼包券</span>
          <span class="center-bottom">特惠好房提前订</span>
      </div>
      <div class="red-right">立即领取</div>

  </div>
</template>

<script>
export default {
    name:'RedPacket'
}
</script>

<style scoped>
@import '~assets/css/iconfont.css';
    #redpacket {
        border: 1px solid #ebebeb;
        border-radius: 3px;
        height: 50px;
        display: flex;
        margin: 15px;
        margin-top: 25px;
        padding: 5px;
    }
    .red-left {
        flex: 1;
        text-align: center;
        height: 40px;
        line-height: 40px;
        color: #ff385c;
        font-size: 24px;
    }
    .red-center {
        flex: 4;
        display: flex;
        flex-flow: column;
        margin-top: 3px;
    }
    .center-top {
        font-size: 14px;
        font-weight: 600;
        flex: 1;
    }
    .center-bottom {
        font-size: 12px;
        color: #a3a3a3;
        flex: 1;
    }
    .red-right {
        flex: 2;
        background-color: #ff385c;
        color: #ffffff;
        height: 30px;
        line-height: 30px;
        margin-top: 10px;
        margin-right: 5px;
        border-radius: 5px;
        text-align: center;
        font-size: 14px;
    }
</style>