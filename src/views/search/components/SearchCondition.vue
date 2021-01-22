<template>
  <div id="search-condition">
        <div class="wrappers" ref="wrappers">
            <div class="content">
                <span
                    class="condition-item"
                    v-for="(item,index) in conditionData"
                    :key='index'
                >
                    {{item}}
                </span>
            </div>
        </div>
      <div class="condition-bottom">
          <div class="bottom-desc">
              <span class="desc-title">每客消毒更安心</span> 
              含 [安心住] 标签的房源为 [零接触] 自助入住，干净卫生评分4.8及以上，其房东承诺提供每客消毒。
          </div>
          <div class="bottom-gif">
              <!-- <div class="iconfont icon-HeartRate"></div> -->
              <img src="~assets/image/search/Heart.png" alt="">
          </div>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:'SearchCondition',
    data() {
        return {
            srcoll: null,
            conditionData:['整个房源','超赞房东','安心住','特惠房源','自助入住','闪订','防疫设施','爱彼迎Plus']
        }
    },
    mounted() {
        this.srcoll = new BScroll(this.$refs.wrappers,{
            startX: 0,  
            click: true,
            scrollX: true,
            scrollY: false,
            eventPassthrough: 'vertical'
        })
    },
}
</script>

<style scoped>
    #search-condition {
        height: 170px;
        margin: 15px;
        margin-top: 5px;
        /* background-color: pink; */
        /* overflow: hidden; */
    }
    .wrappers {
        overflow: hidden;
        width: 100%;
        touch-action: none;
    }
    .content {
        height: 30px;
        width: 570px;
        overflow: hidden;
        padding: 3px;

        white-space: nowrap;
    }
    .content .condition-item {
        border: 2px solid #ebebeb;
        border-radius: 15px;
        margin-right: 5px;
        font-size: 14px;
        color: #717171;
        /* margin: 5px; */
        padding: 2px;
    }
    .condition-bottom {
        display: flex;
        border-bottom: 1px solid #bbbbbb;
    }
    .bottom-desc {
        flex: 5;
        /* background-color: red; */
        padding: 5px;
        padding-top: 20px;
        padding-bottom: 20px;
        box-sizing: content-box;
        font-size: 15px;
        color: #222222;
        
    }
    .desc-title {
        font-weight: 600;
    }
    .bottom-gif {
        flex: 1;
        /* background-color: pink; */
        margin-bottom: 40px;
        margin-top: 25px;
    }
    .bottom-gif img {
        width: 100%;
        height: 100%;
    }
</style>