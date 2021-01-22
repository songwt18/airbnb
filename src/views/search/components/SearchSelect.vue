<template>
  <div id="search-select">
      <!-- 人数 -->
      <bullet-num 
       :class="{'clickPeople':isclickPeople===false}"
       @clickCloseNum='clickCloseNum'
      ></bullet-num>
      <div v-if="ishavepeople" class="select-num" @click="numClick">人数<span class="iconfont icon-sanjiao"></span></div>
      <div v-else class="select-num havepeople" @click="numClick">{{peopleNums}}房客,{{infantNum}}婴儿<span class="iconfont icon-sanjiao"></span></div>
      <!-- 位置 -->
      <bullet-location
        :class="{'clickLocation':isclickLocation===false}"
        @clickCloselocation='clickCloselocation'
      ></bullet-location>
      <div v-if="ishavelocation" class="select-location" @click="locationClick">位置区域<span class="iconfont icon-sanjiao"></span></div>
      <div v-else class="select-location havalocation" @click="locationClick">{{checkLocation}}<span class="iconfont icon-sanjiao"></span></div>
      <!-- 排序 -->
      <bullet-sort
        :class="{'clickSort':isclickSort===false}"
        @clickCloseSort = 'clickCloseSort'
      ></bullet-sort>
      <div class="select-sort" @click="sortClick">{{sortSelect}}<span class="iconfont icon-sanjiao"></span></div>
      <!-- 筛选 -->
      <!-- <div class="select-select" @click="selectClick">筛选<span class="iconfont icon-sanjiao"></span></div> -->
  </div>
</template>

<script>
import BulletNum from './selectbullet/BulletNum'
import BulletLocation from './selectbullet/BulletLocation'
import BulletSort from './selectbullet/BulletSort'
export default {
    name: 'SearchSelect',
    components: {
        BulletNum,
        BulletLocation,
        BulletSort
    },
    data() {
        return {
            isclickPeople:false,
            isclickLocation:false,
            isclickSort:false,
            peopleNums: 0,
            infantNum: 0,
            checkLocation:'',
            sortSelect:'综合排序'
            // ishavepeople: false
        }
    },
    computed:{
        ishavepeople() {
            if(this.peopleNums <= 0 && this.infantNum <= 0) {
                return true
            }else {
                return false
            }
        },
        ishavelocation() {
            if(this.checkLocation === ''){
                return true
            }else {
                return false
            }
        }
    },
    methods: {
        numClick() {
            console.log(1)
            this.isclickPeople = true
        },
        locationClick(){
            console.log(2)
            this.isclickLocation = true
        },
        sortClick(){
            console.log(3)
            this.isclickSort = true
        },
        selectClick(){
            console.log(4)
        },
        clickCloseNum(peopleNums,infantNum){
            // console.log(peopleNums,infantNum)
            this.peopleNums = peopleNums
            this.infantNum = infantNum
            this.$store.commit({
                type:'changePeople',
                peopleNums:this.peopleNums,
                infantNum:this.infantNum
            })
            this.isclickPeople = false
        },
        clickCloselocation(checkLocation){
            this.isclickLocation = false
            // console.log(checkLocation)
            this.checkLocation = checkLocation
        },
        clickCloseSort(data){
            this.isclickSort = false
            if(data!==''){
                this.sortSelect = data
            }
            
        }
    }
}
</script>

<style scoped>
 #search-select {
     height: 35px;
     line-height: 35px;
     text-align: center;
     font-size: 14px;
     font-weight: 550;
     width: 100%;
     display: flex;
     justify-content: space-between;
 }
 #search-select div{
     border-right: 1px solid #ebebeb;
 }
 #search-select .select-num {
     flex: 3;
     /* text-align: left; */
 }
 .havepeople, .havalocation{
     color: #008489;
     overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
 }
 #search-select .select-location {
     flex: 4;
 }
 #search-select .select-sort {
     flex: 4;
     color: #008489;
 }
 #search-select .select-select {
     flex: 3;
 }
 .clickPeople,.clickLocation,.clickSort{
     display: none;
 }
</style>