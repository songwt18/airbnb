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
          <div class="item-condition">
              <div
                v-for="(item,index) in itemCondition"
                :key ='index'
                class="condition"
                :class="conditionCurrentIndex===index?'conditionAdd':''"
              >
                {{item}}
              </div>
          </div>
          <div class="item-price">
              ￥ 173/晚
          </div>
          <br>
          <div class="item-core iconfont icon-collect_1">
              <span class="core-core">4.7</span>
              <span class="core-num">(17)条评价</span>
              <span class="core-content">" 房东小姐姐体贴温柔!"</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'HouseItem',
    data(){
        return {
            itemCondition: ['可开发票','近地铁站','自助入住','可以做饭','暖心房东'],
            conditionCurrentIndex:0
        }
    }
}
</script>

<style scoped>
.houseitem {
    height: 200px;
    width: 90%;
    margin-left: 15px;
    display: inline-block;
    
    /* margin-bottom: 30px; */
}
.item-top {
    height: 180px;
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
    position: relative;
}
.item-facility {
    font-size: 14px;
    color: #000000;
}
.item-title {
    margin-top: 2px;
    font-size: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    font-weight: bold;
}
.item-condition {
    margin-top: 5px;
}
.item-condition .condition {
    border: 1px solid rgb(124, 60, 7);
    color: rgb(124, 60, 7);
    font-size: 12px;
    border-radius: 3px;
    box-sizing: content-box;
    padding: 2px;
    margin-right: 3px;
    text-align: center;
    
    display: inline-block;
}
/* .conditionAdd {
    
} */
.item-price {
    margin-top: 5px;
    font-size: 14px;
    font-weight: bold;
}
.item-core {
    color: red;
    font-size: 12px;
    position: absolute;
    top :-40px;
    left: 10px;
    background-color: rgba(255,255,255,.9);
    padding: 3px;
    border-radius: 15px;
    height: 20px;
    line-height: 20px;
}
.item-core .core-core {
    font-weight: 600;
    color: #000000;
    font-size: 13px;
}
.item-core .core-num {
    font-size: 12px;
    color: #717171;
}
.item-core .core-content {
    font-weight: 600;
    color: #000000;
    font-size: 12px;
}
</style>