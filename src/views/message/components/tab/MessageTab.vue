<template>
  <div>
        <div class="tab">
            <div class="tab-title">
                <span 
                    v-for="(item,index) in tabtitle" 
                    :key='index' 
                    class="item"
                    :class="currentIndex===index?'active':''"
                    @click='itemClick(index)'
                >
                    {{item}}
                </span>
                <div class="black-line" :style="{left:lineclass+'px'}">
                </div>
            </div>
            <div class="tab-content" :style="{transform:'translateX(-'+transform+'px)'}">
                <message class="content-item"></message>
                <Info class="content-item"></Info>
            </div>
        </div>
  </div>
</template>

<script>
import Message from './Message'
import Info from './Info'
export default {
    name:'MessageTab',
    data() {
      return {
        tabtitle: ['消息','通知'],
        currentIndex:0,
        lineclass: 0,
        transform: 0
       }
    },
    methods:{
      itemClick(index){
        this.currentIndex = index
        this.lineclass = index * 53
        this.transform = index * 320
        console.log(this.lineclass)
      }
    },
    components: {
      Message,
      Info
    }
}
</script>


<style scoped>
.tab {
    width: 290px;
     overflow: hidden;

}
.tab-title {
  position: relative;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #a3a3a3;
}
.item{
  font-size: 14px;
  color:dimgray;
  font-weight: 400;
  margin-right: 20px;
}
.black-line {
  height: 3px;
  width: 25px;
  background-color: #000;
  position: absolute;
  bottom: 0;
  transition: 0.5s ease;
}
.tab-content {
  /* background-color: pink; */
  /* height: 200px; */
  width: 640px;
  display: flex;
  transition: 0.5s ease;
}
.content-item {
    width: 320px;
}
.active {
  color: black;
  
}
</style>