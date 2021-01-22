<template>
  <div id="search">
      <div id="search-input">
        <div id="input-left">
            <div class="left-back iconfont icon-fanhui" @click="goBack"></div>
            <div class="left-city" @click="tocity">上海市</div>
            <div class="left-input" @click="tosearch">景点/地址/房源名</div>
             <div class="left-date nodate" v-if="haveDate" @click="todate">
                选择日期
            </div>
            <div class="left-date" v-else  @click="todate">
                {{startdate}}入住
                <br>
                {{enddate}}退房
            </div>
        </div>
        <div id="input-right">
            <div class="right-icon iconfont icon-ditu"></div>
            <div class="right-desc">地图</div>
        </div>
  </div>
  </div>
</template>

<script>
export default {
    name:'SearchInput',
    data() {
        return {
            startdate:'',
            enddate:''
        }
    },
    mounted() {
        this.startdate = this.$store.state.startdate
        this.enddate = this.$store.state.enddate
    },
    methods: {
        goBack() {
            // console.log(1)
            this.$router.go(-1)
        },
        tosearch() {
            this.$router.push('/searchcard')
        },
        tocity() {
            this.$router.push('/selectcity')
        },
        todate() {
            this.$router.push('/selectdate')
        }
    },
    computed:{
        haveDate() {
            if(this.startdate!==''){
                return false
            }else{
                return true
            }
        }
    }
}
</script>

<style scoped>
#search{
    position: relative;
}
#search-input {
    height: 65px;
    width: 100%;
    background-color: #ffffff;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
}
#search-input #input-left {
    flex: 6;
    /* background-color: black; */
    margin: 10px;
    border: 1px solid #ebebeb;
    box-shadow: 0 0 2px 2px rgba(100,100,100,.1);

    display: flex;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
}
#input-left .left-back{
    flex: 2;
    line-height: 40px;
    font-size: 24px;
    color: #474444;
}
#input-left .left-city{
    flex: 3;
    color: #008489;
    height: 45px;
    line-height: 45px;
}
#input-left .left-input{
    flex: 4;
    height: 45px;
    line-height: 45px;
    color: #a3a3a3;
    
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
#input-left .left-date{
    flex: 6;
    color: #008489;
    height: 45px;
    font-size: 14px;
}
.nodate{
    line-height: 45px;
}
#search-input #input-right {
    flex: 1;
    /* background-color: blue; */
    box-sizing: content-box;
    padding: 6px;
    padding-top: 10px;
    text-align: center;
}
#input-right .right-icon{
    font-size: 18px;
    font-weight: bold;
}
#input-right .right-desc{
    font-size: 12px;
}
</style>