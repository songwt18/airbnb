<template>
  <div id="tourist">
      <div class="tourist-top">
          <div class="top1">
              <img src="~assets/image/home/home-6.png" alt="">
              <div class="top-text1">放心入住</div>
              <div class="top-text2">房源真实可靠</div>
          </div>
          <div class="top2">
              <img src="~assets/image/home/home-7.png" alt="">
              <div class="top-text1">专业客服</div>
              <div class="top-text2">全方位服务</div>
          </div>
          <div class="top3">
              <img src="~assets/image/home/home-8.png" alt="">
              <div class="top-text1">安全无忧</div>
              <div class="top-text2">多重安全保障</div>
          </div>
      </div>
      <div class="tourist-bottom">查看爱彼迎旅行保障</div>
  </div>
</template>

<script>
export default {
    name: 'Tourist'
}
</script>

<style scoped>
#tourist {
    margin: 15px;
    border-radius: 5px;
    border: 1px solid #ebebeb;
    height: 130px;
    width: 85%;
    box-shadow: 0 2px 2px 1px rgba(100, 100, 100, .3);
    padding: 10px;
    padding-bottom: 0px;
}
.tourist-top {
    height: 90px;
    border-bottom: 1px solid #ebebeb;
    display: flex;
    text-align: center;
    justify-content: space-between;
}
.tourist-top div{
    flex: 1;
}
.tourist-top div img {
    width: 35px;
    height: 35px;
}
.top-text1 {
    font-weight: bold;
    font-size: 16px;
}
.top-text2 {
    font-size: 14px;
}
.tourist-bottom {
    height: 40px;
    font-weight: bold;
    color: #008489;
    text-align: center;
    line-height: 40px;
}
</style>