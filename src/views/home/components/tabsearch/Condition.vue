<template>
  <div id="condition">
    <div class="condition-item">
        <img src="~assets/image/home/home-1.jpeg" alt="">
        <div>可以做饭</div>
    </div>
    <div class="condition-item">
        <img src="~assets/image/home/home-2.jpeg" alt="">
        <div>整个房源</div>
    </div>
    <div class="condition-item">
        <img src="~assets/image/home/home-3.jpeg" alt="">
        <div>自助入住</div>
    </div>
    <div class="condition-item">
        <img src="~assets/image/home/home-4.jpeg" alt="">
        <div>特惠房源</div>
    </div>
    <div class="condition-item">
        <img src="~assets/image/home/home-5.jpeg" alt="">
        <div>当地体验</div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Condition'
}
</script>

<style scoped>
    #condition {
        display: flex;
        justify-content: space-around;
        font-size: 14px;
        font-weight: bold;
        margin-left: 10px;
        margin-right: 10px;
        background-color: #fff;
    }
    #condition img {
        display: block;
    }
    #condition div {
        font-size: 12px;
    }

</style>