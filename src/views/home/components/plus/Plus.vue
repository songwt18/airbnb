<template>
  <div class="plus">
      <p class="p1">爱彼迎Plus</p>
      <p class="p2">品质和设计经过验证的精选房源系列</p>
      <div class="plusimg">
          <img src="" alt="">
          <div class="plus-btn">
              浏 览 P L U S 房 源 >
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Plus'
}
</script>

<style scoped>
.plus {
    margin: 15px;
    margin-top: 30px;
    background-color: #fff;
}
.p1 {
        font-size: 16px;
        font-weight: bold;
    }
.p2 {
    font-size: 15px;
}
.plusimg {
    height: 200px;
    background-color: rosybrown;
    display: flex;
    justify-content: space-between;
    border-radius: 5px;
    position: relative;
}
.plus-btn {
    position: absolute;
    bottom: 35px;
    left: 70px;
    border-radius: 5px;
    text-align: center;
    height: 30px;
    line-height: 30px;
    font-weight: bold;
    font-size: 14px;
    background-color: #ffffff;
    padding: 10px;
}
</style>