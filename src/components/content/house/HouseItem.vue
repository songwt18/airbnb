<template>
  <div class="houseitem">
      <div class="item-top">
          <img src="https://z1.muscache.cn/im/pictures/afd3bc25-8b1a-4446-bffb-18b37dc3d4af.jpg?aki_policy=large" alt="">
          <div class="top-icon iconfont icon-collect1"></div>
      </div>
      <div class="item-bottom">
          <div class="item-facility">
              整套公寓.1室1卫1床
          </div>
          <div class="item-title">
              【阳光☀星空花园复式阁楼】每客消毒/独立整栋/3晚免费接机/特色双早/大理古城边洱海风景区/私家花园
          </div>
          <div class="item-price">
              ￥ 173/晚
          </div>
          <div class="item-core iconfont icon-collect_1">
              4.7
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'HouseItem'
}
</script>

<style scoped>
.houseitem {
    height: 200px;
    width: 140px;
    display: inline-block;
    margin-right: 5px;
    margin-bottom: 20px;
}
.item-top {
    height: 100px;
    position: relative;
}
.top-icon {
    position: absolute;
    right: 5px;
    top: 5px;
    font-weight: bold;
    color: #ffffff;
    font-size: 18px;
}
.item-top img{
    width: 100%;
    height: 100%;
    border-radius: 5px;
}
.item-bottom {
    height: 100px;
    margin-top: 5px;
}
.item-facility {
    font-size: 12px;
    color: #704e35;
}
.item-title {
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #484848;
}
.item-price {
    font-size: 14px;
    color: #484848;
}
.item-core {
    color: #008489;
    font-size: 12px;
}
</style>