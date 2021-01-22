<template>
  <div id="tab-search">
       <people 
            class="people" 
            :class="{'peopleActive':isClickPeople===true}" 
            :style="{top:tops+'px'}" 
            :scrollPosition='scrollPosition'
            @closeInner='closeInner'
        ></people>
      <div class="bg-bottom"></div>
      <div class="top-box">
           
          <div class="select-local" >
              <!-- <div class="local-inner" >国内</div>
              <div class="local-outer" >国际/港澳台</div> -->
                <span 
                  v-for="(item,index) in localData" 
                  :key="index"
                  @click="localItemClick(index)"
                  :class="localCurrentIndex===index?'local-active':''"
                >
                  {{item}}
                </span>
          </div>
          <div class="box-bottom">
              <div class="now-local">
                <div class="now-city" @click="selectCity">{{deslocal}}</div>
                <div class="iconfont icon-location now-icon"><span class="now-text"> 当前位置</span></div>
            </div>
            <div class="message">
                <div v-if='!ishavedate' class="date-message" @click="dateClick">请点击选择入住退房日期</div>
                <div v-else class="date-message" @click="dateClick">{{startDate}}-{{endDate}}</div>
                <div v-if="ishavepeople" class="people-message peopleCal" @click="peopleClick">房客人数</div>
                <div v-else class="people-message" @click="peopleClick">{{peopleNum}}位房客<br>{{infantNum}}位婴儿</div>
            </div>
            <div class="search">
                <div class="search-input" @click="toSearchCard" v-if="!haveSearch">景点/地址/关键词</div>
                <div class="search-input" @click="toSearchCard" v-else>{{searchContent}}</div>
                <div class="search-button" @click="toSearch">搜索房源</div>
            </div>
            <div class="bottom">
                <div class="iconfont icon-duihao bottom-item"><span class="bottom-text">真实可靠的房源</span></div>
                <div class="iconfont icon-duihao bottom-item"><span class="bottom-text">专业客服团队</span></div>
                <div class="iconfont icon-duihao bottom-item"><span class="bottom-text">多重安全保障</span></div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import People from './People'
export default {
    name: 'TabSearch',
    props: {
        isScroll: {
            default: false,
            type: Boolean
        },
        scrollPosition: {
            default: 0,
            type: Number
        }
    },
    data(){
        return {
            isClickPeople:false,
            peopleNum: 0,
            infantNum: 0,
            localData: ['国内','国际/港澳台'],
            localCurrentIndex: 0,
            isClickLocal: false,
            deslocal:'天津市',
            startDate: '',
            endDate: '',
            searchContent:''
        }
    },
    computed: {
        tops() {
            if(this.isScroll === true){
                return this.scrollPosition -234
            }
        },
        ishavepeople() {
            if(this.peopleNum === 0){
                return true
            }else{
                return false
            }
        },
        haveSearch() {
            if(this.searchContent!==''){
                return true
            }else{
                return false
            }
        },
        ishavedate(){
             if(this.startDate!==''){
                return true
            }else{
                return false
            }
        }
    },
    methods: {
        // 选择城市
        selectCity(){
            this.$router.push('/selectcity')
            console.log('11')
        },
        peopleClick(){
            this.isClickPeople = true
        },
        closeInner(people,infant){
            this.isClickPeople = false
            // console.log(people,infant)
            this.peopleNum = people
            this.infantNum = infant
        },
        localItemClick(index){
            this.localCurrentIndex = index
            if(index === 1){
                this.deslocal = '曼谷'
            }else{
                this.deslocal = '上海市'
            }
        },
        toSearch(){
            // console.log('toSearch')
            this.$router.push('/search')
        },
        toSearchCard(){
            this.$router.push('/searchcard')
        },
        dateClick(){
            console.log('dateClick')
            this.$router.push('/selectdate')
        }
    },
    components: {
        People
    },
    beforeCreate () {
        this.bus.$on('getDate',(start,end) => {
            this.bus.dataFromBus1 = start
            this.bus.dataFromBus2 = end
        });        
    },    
    mounted () {
        console.log(this.$store.state.startDate)
        this.startDate = this.$store.state.startdate; 
        this.endDate =   this.$store.state.enddate;
        this.searchContent = this.$store.state.search;
        if(this.$store.state.location!==''){
            this.deslocal = this.$store.state.location;
        }
    }
}
</script>

<style scoped>
@import '~assets/css/iconfont.css';
#tab-search {
    width: 100%;
    height: 200px;
    position: relative;
    z-index: 5;
    background-color: #fff;
    position: relative;
}
.bg-bottom {
    height: 170px;
}
.bg-bottom:before {
    content: '';  
    width: 0;  
    height: 0;  
    border: 6px solid transparent; 
    border-left-color: #ffffff;  
    position: absolute;  
    left: 0px;   
    margin-top: -5px;  
}
.bg-bottom:after {
    content: '';  
    width: 0;  
    height: 0;  
    border: 6px solid transparent; 
    border-right-color: #ffffff;  
    position: absolute;  
    right: 0px;   
    margin-top: -5px; 
}
.top-box {
    height: 220px;
    width: 90%;
    margin: 0 auto;
    background-color: #ffffff;
    box-shadow: 0 5px 5px rgba(100, 100, 100, 0.5);
    border-radius: 10px;
    position: absolute;
    top: -40px;
    left: 0px;
    right: 0px;
}
.select-local {
    height: 30px;
    line-height: 30px;
    display: flex;
    background-color: #ebebeb;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    color: #717171;
    font-size: 15px;
}
.select-local span {
    flex: 1;
    text-align: center;
    font-weight: bold;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
}
.local-active {
    background-color: #ffffff;
    color: #000000;
}
.box-bottom {
    margin: 8px;
    height: 22px;
}
.now-text {
    font-size: 14px;
    font-weight: 400;
}
.now-local {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ebebeb;
    padding-bottom: 7px;
}
.now-local .iconfont {
    font-weight: bold;
}
.now-city {
    flex: 1;
    font-weight: bold;
    font-size: 15px;
}
.now-icon {
    flex: 1;
    text-align: right;
}
.message { 
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ebebeb;
    padding-bottom: 7px;
    padding-top: 7px;
    height: 32px;
}
.date-message {
    flex: 3;
    font-size: 15px;
    font-weight: bold;
    line-height: 32px;
}
.date-days {
    font-size: 12px;
    color: #a3a3a3;
    font-weight: 400;
    line-height: 32px;
}
.people-message {
    border-left: 1px solid #ebebeb;
    flex: 1;
    text-align: right;
    font-size: 14px;
    color: #a3a3a3;
}
.peopleCal {
    line-height: 32px;
}
.search {
    display: flex;
    flex-flow: column;
    padding-bottom: 7px;
    padding-top: 10px;
}
.search-input {
    color: #a3a3a3;
    font-size: 12px;
    padding-bottom: 10px;
}
.search-button {
    background-color: #008489;
    color: #ffffff;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 5px;
}
.bottom {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #a3a3a3;
}
.bottom .iconfont {
    color: #008489;
}
.bottom-item {
    font-size: 12px;
}
.bottom-text {
    color: #717171;
}
.people {
    position: fixed;
    top: 0px;
    left: 0;
    right: 0;
    bottom: 49px;
    z-index: 999;
    display: none;
}
.peopleActive {
    display: block;
}
</style>