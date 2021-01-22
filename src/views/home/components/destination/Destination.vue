<template>
  <div id="destination">
      <div class="des-title">热门目的地</div>
      
        <div class="des-local">
                <div class="wrappers" ref="wrappers">
                    <div class="content">
                        <div 
                          class="local-item" 
                          v-for="(item,index) in desData" 
                          :key="index"
                          @click="desClick(index)"
                          :class="desCurrentIndex===index?'active':''"
                        >
                            {{item}}
                        </div>
                    </div>
                </div>
        </div>
      <div class="des-item">
          <house-item></house-item>
      </div>
      <div class="des-button">
          更多上海的房源
      </div>
  </div>
</template>

<script scoped>
import BScroll from 'better-scroll'

import HouseItem from 'components/content/house/HouseItem'
export default {
    name:'Destination',
    components: {
        HouseItem,
    },
    data() {
        return {
            srcoll: null,
            desData: ['上海','成都','杭州','东京'],
            desCurrentIndex: 0
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
    methods: {
        desClick(index) {
            this.desCurrentIndex = index
        }
    }
}
</script>

<style scoped>
.wrappers {
    overflow: hidden;
}
.content {
    height: 40px;
    width : 400px;
    white-space: nowrap;
}
#destination {
    margin: 15px;
    margin-top: 25px;
}
.des-title {
    font-weight: bold;
    font-size: 16px;
}
.des-local {
    margin-top: 10px;
}
.local-item {
    display: inline-block;
    width: 80px;
    margin-right: 8px;
    border: 1px solid #ebebeb;
    border-radius: 5px;
    box-shadow: 0 1px 1px 1px rgba(100, 100, 100, .2);
    text-align: center;
    padding: 5px;
    font-weight: 600;
}
.active {
    color: #ffffff;
    background-color: #008489;
    border: 1px solid #008489;
}
.des-item {
    margin-top: 10px;
}
.des-button {
    margin-top: 15px;
    border: 1px solid #008489;
    border-radius: 5px;
    height: 40px;
    line-height: 40px;
    color: #008489;
    font-weight: bold;
    font-size: 15px;
    text-align: center;
    
}
</style>