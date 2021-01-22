<template>
  <div>
      <h3 class="house-title">300多处住宿</h3>
      <house-big-item></house-big-item>
      <house-big-item></house-big-item>
      <house-big-item></house-big-item>
      <house-big-item></house-big-item>
      <house-big-item></house-big-item>
  </div>
</template>

<script>
import HouseBigItem from 'components/content/house/HouseBigItem'
export default {
    name:'SearchHouse',
    components: {
      HouseBigItem
    }
}
</script>

<style scoped>
.house-title {
    margin-left: 15px;
}
</style>