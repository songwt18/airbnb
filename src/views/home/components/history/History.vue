<template>
  <div id="history">
      <div class="history-title">历史浏览记录</div>
      <div class="history-item">
        <house-item></house-item>
      </div>

  </div>
</template>

<script>
import HouseItem from 'components/content/house/HouseItem'
export default {
    name: 'History',
    components: {
        HouseItem
    }
}
</script>

<style scoped>
    #history {
        margin: 15px;
        margin-top: 30px;
        background-color: #fff;
    }
    .history-title {
        font-size: 16px;
        margin-bottom: 15px;
        font-weight: bold;
    }
</style>