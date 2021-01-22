<template>
  <div id="info">
      <div class="info-img">
          <img src="~assets/image/airbnb/icon1.png" alt="">
      </div>
      <div class="info-desc">
          <div class="desc-text">
              添加您的工作邮箱，获得商务差旅的更多便利服务，如简化的报销流程。
          </div>
          <div class="desc-date">
              2020年9月21日
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'Info'
}
</script>

<style scoped>
#info {
    display: flex;
    margin-right: 30px;
    
    margin-top: 10px;
}
.info-img {
    flex: 2;
    text-align: center;
}
.info-img img {
    width: 70%;
    height: 60%;
    margin: 10px 18px;
}
.info-desc {
    flex: 5;
}
.desc-text {
    font-size: 15px;
}
.desc-date {
    font-size: 15px;
    margin-top: 5px;
    color: #a3a3a3;
}
</style>