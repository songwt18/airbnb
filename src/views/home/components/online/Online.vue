<template>
  <div class="online">
      <p class="p1">最新线上体验</p>
      <p class="p2">翻开体验新一页，在家 [躺游] 全世界</p>
      <div class="online-item">
          <house-item></house-item>
          <house-item></house-item>
          <house-item></house-item>
          <house-item></house-item>
      </div>
      <div class="online-btn">
          探索更多
      </div>
  </div>
</template>

<script>
import HouseItem from 'components/content/house/HouseItem'
export default {
    name: 'Online',
    components: {
        HouseItem
    }
}
</script>

<style scoped>
.p1 {
    text-align: center;
}
.online {
    margin: 15px;
    margin-top: 30px;
    background-color: #fff;
}
.online-btn {
    margin-top: 15px;
    border: 1px solid #000000;
    border-radius: 5px;
    height: 40px;
    line-height: 40px;
    color: #000000;
    font-weight: bold;
    font-size: 15px;
    text-align: center;
}
</style>