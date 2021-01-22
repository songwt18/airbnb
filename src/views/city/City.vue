<template>
  <div id="city">
      <div class="des-city">
          <div class="back iconfont icon-fanhui" @click="back"></div>
          <div class="desc">选择目的地城市</div>
      </div>
      <div class="des-input">
          <div class="input-icon iconfont icon-search2"></div>

          <div class="input-city">
              <input type="text" v-model="textvalue" placeholder="输入城市" @input="haveInput">
          </div>
      </div>
      <div v-if="havatext">
          <div class="city-tab">
            <div
                v-for="(item,index) in localData" 
                :key="index"
                @click="localItemClick(index)"
                :class="localCurrentIndex===index?'local-active':''"
            >
                {{item}}
            </div>
            <div class="black-line" :style="{left:lineclass+'px'}"></div>
           </div>
            <scroll class="wrappers" v-if="isClickInner">
            <div>
                <inner-cities></inner-cities>
            </div>
            </scroll>
            <div v-else>
                <outer-cities
                @contentClick="contentClick"
                ></outer-cities>
            </div>
       </div>
       <div v-else>
           <text-cities :textvalue="textvalue"></text-cities>
       </div>
  </div>
</template>

<script>
import Scroll from 'components/common/betterscroll/Scroll'
import InnerCities from './components/InnerCities.vue'
import OuterCities from './components/OuterCities.vue'
import TextCities from './components/TextCities.vue'
export default {
    data() {
        return {
            localData: ['国内','国际/港澳台'],
            localCurrentIndex: 0,
            lineclass: 0,
            localCity:'天津',
            havatext:true,
            textvalue:''
        }
    },
    methods:{
        localItemClick(index){
            this.lineclass = index*100
            this.localCurrentIndex = index
        },
        back(){
            this.$emit('contentBack',this.localCity)
            this.$router.go(-1)
        },
        contentClick(item) {
            // console.log(item)
            this.localCity = item
        },
        haveInput(){
            if(this.textvalue === ''){
                this.havatext = true
            }else{
                this.havatext = false
            }
        }
    },
    computed:{
        isClickInner() {
            if(this.localCurrentIndex === 0) {
                return true
            }else{
                return false
            }
        }
    },
    components:{
        InnerCities,
        OuterCities,
        Scroll,
        TextCities
    }
}
</script>

<style scoped>
#city {
    width: 100%;
    height: 100vh;
    background-color: #ffffff;
    position: relative;
    z-index: 99;
}
.des-city {
    width: 100%;
    height: 49px;
    line-height: 49px;
    /* background-color: red; */
    border-bottom: 1px solid #ebebeb;
    display: flex;
}
.des-city .back {
    flex: 1;
    font-size: 28px;
    text-align: center;
}
.des-city .desc {
    flex: 5;
    font-weight:550;
}
.des-input {
    height: 30px;
    /* line-height: 30px; */
    margin: 15px;
    background-color: #ebebeb;
    border-radius: 10px;
    display: flex;
   border-bottom: 1px solid #cccccc;
}
.des-input .input-icon {
    flex: 1;
     text-align: center;
     font-size: 18px;
     font-weight: 600;
     line-height: 25px;
     padding-left: 5px;
}
.des-input .input-city {
    flex: 9;
    font-size: 14px;
    line-height: 30px;
    color: #888888;
}
.input-city input {
    background:none;  
	outline:none;  
	border:none;
}
.city-tab {
    /* background-color: red; */
    height: 35px;
    line-height: 35px;
    width: 100%;
    color: #534e4e;
    /* border-bottom: 1px solid #cccccc; */
    box-shadow: 0px 3px 3px rgba(0, 0, 0, .05);
    position: relative;
}
.city-tab div {
    width: 100px;
    text-align: center;
    display: inline-block;
}
.local-active {
    color: #008489;
}
.black-line {
  height: 3px;
  width: 25px;
  background-color: #008489;
  position: absolute;
  bottom: 0;
  transition: 0.5s ease;
}
.wrappers {
    height: 75vh;
    overflow: hidden;
}
</style>