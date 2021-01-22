<template>
  <div id="bullet-num">
      <div id="bullet-base" @touchmove.prevent >
      <div class="base-nav">
          <div class="nav-close" @click="clickClose">×</div>
          <div class="nav-clear" @click="clickClear">清除</div>
      </div>
      <div class="base-title">人数</div>
      <div class="base-content">
          <div class="adult">
              <div class="adult-desc">
                    <span class="desc-desc">成人</span>
                    <br>
                    <span class="desc-range">13岁或以上</span>
              </div>
              <div class="adult-right">
                    <div class="right-min" @click="adultMin" >
                        <div class="min" :class="isAdult?'disabled':''">-</div>
                    </div>
                    <div class="right-num">{{adultNum}}</div>
                    <div class="right-max" @click="adultMax">
                        <div class="max">+</div>
                    </div>
              </div>
          </div>
          <div class="child">
              <div class="adult-desc">
                    <span class="desc-desc">儿童</span>
                    <br>
                    <span class="desc-range">2-12岁</span>
              </div>
              <div class="adult-right">
                    <div class="right-min" @click="childMin" >
                        <div class="min" :class="isChild?'disabled':''">-</div>
                    </div>
                    <div class="right-num">{{childNum}}</div>
                    <div class="right-max" @click="childMax">
                        <div class="max">+</div>
                    </div>
              </div>
          </div>
          <div class="infant">
              <div class="adult-desc">
                    <span class="desc-desc">婴儿</span>
                    <br>
                    <span class="desc-range">2岁以下</span>
              </div>
              <div class="adult-right">
                    <div class="right-min" @click="infantMin" >
                        <div class="min" :class="isInfant?'disabled':''">-</div>
                    </div>
                    <div class="right-num">{{infantNum}}</div>
                    <div class="right-max" @click="infantMax">
                        <div class="max">+</div>
                    </div>
              </div>
          </div>
      </div>
      <div class="base-btn">
          <div class="btn" @click="clickClose">显示超过{{houseNum}}个住宿</div>
      </div>
  </div>
      
  </div>
</template>

<script>
import BulletBase from './BulletBase'
export default {
    name: 'BulletNum',
    data() {
        return {
            houseNum:300,
            adultNum:0,
            childNum: 0,
            infantNum: 0,
            isAdult:true,
            isChild:true,
            isInfant:true
        }
    },
    components: {
        BulletBase,
    },
    computed: {
        peopleNums() {
            return this.adultNum + this.childNum
        }
    },
    methods: {
        adultMin(){
            if(this.adultNum > 0){
                this.adultNum--
            }
            if(this.adultNum === 0){
                this.isAdult = true
            }
            console.log('--')
             this.$emit('getpeople',this.adultNum)
        },
        adultMax(){
            this.adultNum++
            this.isAdult = false
        },
        childMin(){
            if(this.childNum > 0){
                this.childNum--
            }
            if(this.childNum === 0){
                this.isChild = true
            }
        },
        childMax(){
            this.childNum++
            this.isChild = false
        },
        infantMin(){
            if(this.infantNum > 0){
                this.infantNum--
            }
            if(this.infantNum === 0){
                this.isInfant = true
            }
        },
        infantMax(){
            this.infantNum++
            this.isInfant = false
        },
        clickClose(){
            // console.log('clickClose',this.peopleNums,this.infantNum)
            this.$emit('clickCloseNum',this.peopleNums,this.infantNum)
        },
        clickClear(){
            // console.log('clickClear')
            this.adultNum = 0
            this.childNum = 0
            this.infantNum = 0
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

.adult-right {
    flex: 1;
    display: flex;
    padding-top: 5px;
}
.adult,.child,.infant {
    display: flex;
}
.adult-desc {
    flex: 2;
    text-align: left;
    color: #888888;
}
.desc-desc {
    font-size: 15px;
}
.desc-range {
    font-size: 12px;
}
.adult-right {
    flex: 1;
    display: flex;
    box-sizing: content-box;
    margin-top: 10px;
}
.adult-right .right-min {
    flex: 1;
    text-align: right;
    
}
.right-min  .min{
    color: #008489;
    border: 1px solid #008489;
    border-radius: 50%;
    text-align: center;
    font-size: 16px;
    width: 25px;
    height: 25px;
    line-height: 25px;
}
.disabled {
    opacity: 0.5;
}
.adult-right .right-num {
    flex: 2;
    text-align: center;
}
.adult-right .right-max {
    flex: 1;
    text-align: left;
}
.right-max .max {
     color: #008489;
    border: 1px solid #008489;
    border-radius: 50%;
    text-align: center;
    font-size: 16px;
    width: 25px;
    height: 25px;
    line-height: 25px;
}
</style>