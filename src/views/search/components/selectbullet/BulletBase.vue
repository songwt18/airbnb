<template>
  <div id="bullet-base" @touchmove.prevent >
      <div class="base-nav">
          <div class="nav-close" @click="clickClose">×</div>
          <div class="nav-clear" @click="clickClear">清除</div>
      </div>
      <div class="base-title">综合排序</div>
      <div class="base-content">
          
      </div>
      <div class="base-btn">
          <div class="btn">显示超过{{houseNum}}个住宿</div>
      </div>
  </div>
</template>

<script>
export default {
    name:'BulletBase',
    data(){
        return {
            houseNum:300
        }
    },
    methods: {
        clickClose(){
            console.log('clickClose',this.peopleNums,this.infantNum)
        },
        clickClear(){
            console.log('clickClear')
        }
    }
    
}
</script>

<style scoped>
#bullet-base{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #ffffff;
    height: 633px;
    z-index: 999;
    box-sizing: content-box;
    padding: 10px;
    /* display: none; */
}
.base-nav {
    height: 10%;
    width: 100%;
    /* background-color: red; */
    display: flex;
    font-size: 14px;
}
.base-nav .nav-close{
    text-align: left;
    flex: 1;
    color: #333333;
    font-size: 26px;
}
.base-nav .nav-clear{
    flex: 1;
    text-align: right;
    color: #333333;
}
.base-title {
    height: 10%;
    width: 100%;
    color: #333333;
    font-size: 16px;
    text-align-last: left;
    /* background-color: blanchedalmond; */
}
.base-content {
    height: 60%;
    /* background-color: #656981; */
}
.base-btn {
    height: 10%;
    /* background-color: #008489; */
    border-top: 1px solid #ebebeb;
}
.base-btn .btn {
    text-align: center;
    height: 35px;
    line-height: 35px;
    margin: 7px;
    border-radius: 5px;
    color: #ffffff;
    background-color: #008489;
}
</style>