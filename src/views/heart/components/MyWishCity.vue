<template>
    <div class="box">
        <div
          @click="goback(path)"
          class="cancle iconfont icon-fanhui"
        ></div>
        <div class="choose-city-wrap">
            <div class="choose-city">选择城市</div>
        </div>
        <div class="all-city-wrap">
            <div class="all-city">全部城市</div>
        </div>
        <div
         class="one-city-wrap"
         v-for="(item,index) in cityList"
         :key="index"
         >
            <div
              class="one-city-name"
              :class="{activeName:item.id == checked}"
            >{{item.name}}</div>
            <div class="one-city-button-wrap">
              <input
                type="checkbox"
                :ref="'ipt'"
                class="checkBox"
                @input="change(index)"
                :value="item.name">
              <label class="label-box" ref="index"></label>
              <label class="canCheck" ref="ok">√</label>
                <!-- <strong v-if="!myradio"></strong>
                <strong
                  style="color:white"
                  v-else
                >√</strong> -->

            </div>
        </div>
        <div class="ctrl-s-wrap" @click="cityConfirm">
            <div class="ctrl-s">保存</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MyWishCity",
    data() {
        return {
          checked: '',
          checkBox:false,
          cityList:[
            {
                id: 1,
                name:"重庆",
            },
            {
                id: 2,
                name:"上海",
            },
            {
                id: 3,
                name:"北京",
            },
            {
                id: 4,
                name:"成都",
            },
            {
                id: 5,
                name:"大理",
            },
            {
                id: 6,
                name:"天津",
            },
          ],
          checkedList:[]
        }
    },
    computed: {
      ccity(){
        return this.cityList.name
      },
      // myradio(){
      //   if(this.checked === ""){
      //     return true
      //   }else{
      //     return false
      //   }
      // }
    },
    methods:{
      goback(path){
			  this.$router.go({path :'/heart'})
      },
      cityConfirm(){
         this.checkedList = []
          this.$refs.ipt.forEach(item=>{
            if(item.checked === true){
                this.checkedList.push(item.value)
            }
        })
        let cityLists = Array.from(this.checkedList)
        console.log(cityLists)
         this.$emit("wishCity",cityLists)
      },
      // radioOption(id){
      //   this.checked = id
      // },
      change(index){
        this.checkBox = !this.checkBox
        if(this.$refs.ipt[index].checked){
            this.$refs.index[index].className = 'label-box activeCheck'
            this.$refs.ok[index].className = "okCheck"
        }else{
          this.$refs.index[index].className = 'label-box'
          this.$refs.ok[index].className = "canCheck"
        }
        console.log(this.$refs.ok)
      }
    }
}
</script>

<style scoped>
.box{
    margin: 0px 10px;
    color: black;
    background-color: #ffffff;
}
.cancle{
    padding-top: 15px;
    font-size: 30px;
    font-weight: 700;
}
.choose-city-wrap{
    margin: 10px 0;
    padding: 14px 0;
    border-bottom: 1px solid#f2f2f2;
}
.choose-city{
    font-size: 24px;
    font-weight: 700;
}
.all-city-wrap,.one-city-wrap{
    margin: 10px 5px;
    margin-left: 15px;
    padding: 14px 0;
    border-bottom: 1px solid#f2f2f2;
}
.all-city{
    margin-bottom: 10px;
}
.one-city-wrap{
    display: flex;
}
.one-city-name{
    flex: 4;
}
.one-city-button-wrap{
    flex: 1;
    position: relative;
}
.one-city-button{
    width: 30px;
    height: 30px;
    border-radius: 100%;
    border: 1px solid #c3c3c3;
    background-color: #f2f2f2;
    text-align: center;
    line-height: 30px;
}
.ctrl-s-wrap{
    margin: 0 20px;
    height: 40px;
    position: fixed;
    bottom: 5px;
    left: 0;
    right: 0;
    background-color: #12786a;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    z-index: 999;
}
.ctrl-s{
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}
.activeOption{
    background-color:#008489;
  }
.activeName{
  color: #008489;
  font-weight: 600;
}
.checkBox{
  position: absolute;
  width: 30px;
  height: 30px;
  top: -10px;
  opacity: 0;
  z-index:9;
}
.label-box {
    width:30px;
    height:30px;
    position: absolute;
    top: -10px;
    z-index:7;
    border-radius: 50%;
    background: #f3f3f3;
    border: 1px solid #dbdbdb;
}
.activeCheck{
  background: #008489;
}
.okCheck{
  color: white;
  display: block;
  position: absolute;
  font-weight: 700;
  font-size: 16px;
  font-family: "微软雅黑";
  width: 30px;
  height: 30px;
  bottom: -2px;
  left: 10px;
  z-index: 8;
}
.canCheck{
  display: none;
}
</style>
