<template>
  <div id="message">
      <div class="title">
          您没有未读消息
      </div>
      <div class="desc">
          如果您没有联系房东/体验达人或者发送预定申请，您会在这里看到这些消息。
      </div>
  </div>
</template>

<script>
export default {
    name:'Message'
}
</script>

<style scoped>
#message {

}
.title {
    margin-top: 15px;
    font-weight: bold;
    font-size: 16px;
}
.desc {
    padding-right: 30px;
    color: #a3a3a3;
    line-height: 25px;
}
</style>