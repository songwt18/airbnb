<template>
  <div id="history">
      <div class="history-title">
          <span class="icon iconfont icon-sousuolishi"></span>
          <span class="desc">搜索历史</span>
      </div>
      <div class="wrappers" ref="wrappers">
          <div class="history-card" style="width:400px">
            <div class="card-item" ref="card">
                <font>东方明珠</font>
                <br>
                <span>11月8日-11月9日.2人</span>
            </div>
                <div class="card-item">
                <font>东方明珠</font>
                <br>
                <span>11月8日-11月9日.1人</span>
            </div>
        </div>
      </div>
      
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    data() {
        return {
            srcoll: null,
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
        // console.log(this.$refs.card)
    },
    computed: {
        width() {
            // return this.$refs.card.clientWidth
        }
    }

}
</script>

<style scoped>
#history {
    padding: 10px;
}
.wrappers {
    overflow: hidden;
}
.history-card {
    /* height: 40px; */
    /* width : 400px; */
    white-space: nowrap;
    color: #555;
    touch-action: none;
    padding-bottom: 5px;
    border-bottom: 1px solid #ebebeb;
}
.history-title {
    font-weight: bold;
}
.history-title .desc {
    padding-left: 5px;
    font-size: 15px;
}
.card-item {
    font-size: 14px;
    border: 1px solid #ebebeb;
    border-radius: 10px;
    display:inline-block !important;
    margin: 5px;
    padding: 5px;
}
</style>