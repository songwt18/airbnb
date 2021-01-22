<template>
  <div id="people">
      <div class="people-inner" :style="{top:topss}">
          <div class="inner-top">
              <div class="top-close" @click="closeInner">×</div>
              <div class="top-chose">选择人数</div>
              <div class="top-clear" @click="clearPeople">清除</div>
          </div>
          <div class="inner-center">
              <div class="center-adult">
                  <div class="adult-left">
                      成人
                      <br>
                      13岁或以上
                  </div>
                  <div class="adult-right">
                      <div class="right-min"  @click="adultMin" :class="isAdult?'disabled':''">-</div>
                      <div class="right-num">{{adultNum}}</div>
                      <div class="right-max" @click="adultMax">+</div>
                  </div>
              </div>
              <div class="center-adult">
                  <div class="adult-left" >
                      儿童
                      <br>
                      2-12岁
                  </div>
                  <div class="adult-right">
                      <div class="right-min" @click="childMin" :class="isChild?'disabled':''">-</div>
                      <div class="right-num">{{childNum}}</div>
                      <div class="right-max" @click="childMax">+</div>
                  </div>
              </div>
              <div class="center-adult">
                  <div class="adult-left">
                      婴儿
                      <br>
                      2岁以下
                  </div>
                  <div class="adult-right">
                      <div class="right-min" @click="infantMin"  :class="isInfant?'disabled':''">-</div>
                      <div class="right-num">{{infantNum}}</div>
                      <div class="right-max" @click="infantMax">+</div>
                  </div>
              </div>
          </div> 
          <div class="inner-bottom"  @click="closeInner">保存</div>
      </div>
  </div>
</template>

<script>
export default {
    name:'People',
    data(){
        return {
            adultNum:0,
            childNum: 0,
            infantNum: 0,
            isAdult:true,
            isChild:true,
            isInfant:true
        }
    },
    props:{
        scrollPosition: {
            default: 0,
            type: Number
        }
    },
    computed: {
        topss() {
                return  -2*this.scrollPosition+'px'
        },
        peopleNums() {
            return this.adultNum + this.childNum
        }
    },
    methods: {
        close() {
            console.log('1')
        },
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
        closeInner() {
            // console.log('closeInner')
            this.$emit('closeInner',this.peopleNums,this.infantNum)
            this.$store.commit({
                type:'changePeople',
                peopleNums:this.peopleNums,
                infantNum:this.infantNum
            })

        },
        peopleParentClick(){
            console.log('peopleParentClick')
        },
        clearPeople() {
            this.adultNum = 0,
            this.childNum = 0,
            this.infantNum = 0
            // console.log('11')
        }
    }
}
</script>

<style scoped>
#people {
    /* rgba(100,100,100,.3) */
    background-color: rgba(100,100,100,.3);
    width: 100%;

}
.people-inner {
    background-color: #ffffff;
    height: 260px;
    width: 90%;
    margin: 120px auto;
    box-sizing: border-box;
    position: absolute;
    left: 20px;
}
.inner-top {
    height: 40px;
    /* background-color: pink; */
    border-bottom: 1px solid #a3a3a3;
    text-align: center;
    line-height: 40px;
    box-sizing: border-box;
    padding-left: 5px;
    padding-right: 5px;
    display: flex;
    justify-content: space-between;
}
.top-close {
    flex: 2;
    font-weight: 600;
    color: #000000;
    font-size: 26px;
}
.top-chose {
    flex: 5;
    color: #130e0e;
    font-size: 14px;
}
.top-clear {
    flex: 2;
    color: #008489;
    font-weight: 600;
    font-size: 15px;
}
.inner-center {
    height: 180px;
    /* background-color: blue; */
    box-sizing: border-box;
    padding: 20px;
    border-bottom: 1px solid #a3a3a3;
}
.center-adult {
    display: flex;
    justify-content: space-between;
    padding-bottom: 15px;
}
.adult-left {
    flex: 2;
    font-size: 14px;
    color: #717171;
}
.adult-right {
    flex: 1;
    display: flex;
    padding-top: 5px;
}
.adult-right .right-min {
    flex: 1;
    color: #008489;
    border: 1px solid #008489;
    border-radius: 50%;
    width: 15px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    font-size: 16px;
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
    color: #008489;
    border: 1px solid #008489;
    border-radius: 50%;
    height: 18px;
    line-height: 18px;
    text-align: center;
    font-size: 16px;
}
.inner-bottom {
    height: 40px;
    /* background-color: pink; */
    text-align: center;
    line-height: 40px;
    color: #008489;
    font-size: 15px;
    font-weight: bold;
}
.active {
    opacity: 0.2;
}
</style>