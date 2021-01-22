<template>
  <div id="box" ref="'box">
    <div class="wrap">
      <div class="top-wrap">
        <div
          @click="goback(path)"
          class="return iconfont icon-fanhui" >
        </div>
        <div class="title">切换城市</div>
      </div>
      <div class="card-wrap">
        <div class="card-item"
          v-for="(item,index) in cardList"
          :key="index"
          @click="changeCity(item.id)"
          :class="{activecity:item.id == havecity}"
        >
          {{item.name}}


        </div>
        <!-- 保存 -->
        <div class="ctrl-s-wrap" @click="cityConfirm">
            <div class="ctrl-s">保存</div>
          </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: "ChangeCity",
  data(){
    return {
      path: '',
      havecity: '',
      cardList:[
        {id:1,name:'上海'},
        {id:2,name:'成都'},
        {id:3,name:'北京'},
        {id:4,name:'广州'},
        {id:5,name:'重庆'},
        {id:6,name:'杭州'},
        {id:7,name:'南京'},
        {id:8,name:'长沙'},
        {id:9,name:'西安'},
        {id:10,name:'厦门'},
        {id:11,name:'深圳'},
        {id:12,name:'苏州'},
        {id:13,name:'武汉'},
        {id:14,name:'青岛'},
        {id:15,name:'天津'},
        {id:16,name:'三亚'},
        {id:17,name:'大理'},
        {id:18,name:'丽江'},
        {id:19,name:'桂林'},
        {id:20,name:'大连'},
      ]
    }
  },
  computed: {
    iscity(){
      if(this.havecity){
        return this.cardList[this.havecity-1].name
      }else{
        return false
      }
    }
  },
  methods: {
    goback(path){
      this.$router.go({path :'/earth'})
    },
    changeCity(id){
      this.havecity = id
      // console.log(this.havecity)
    },
    cityConfirm(){
      this.$emit("chosenCity",this.iscity)
      console.log(this.iscity)
    }
  }
}
</script>
<style scoped>
  .box{
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background-color: rgb(121 121 121 / 0.8);
  }
  .display{
    display: none;
  }
  .wrap{
    height: 100%;
    padding: 25px;
    background-color: #ffffff;
    border-radius: 8px;
  }
  .top-wrap{
    box-sizing: border-box;
    height: 46px;
    font-weight: 500;
    border-bottom: 1px solid rgb(121 121 121 / 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .return{
    padding: 10px;
    flex: 2;
    font-size: 24px;
    font-weight: 700;
    /* color: #f8f8f8; */
  }
  .title{
    flex: 3;
    font-size: 16px;
    /* color: #f8f8f8; */
  }
  .card-wrap{
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
  }
  .card-item{
    width: 25%;
    height: 40px;
    line-height: 36px;
    text-align: center;
    margin: 10px;
    border-radius: 8px;
    border: 1px solid #e2e2e2;
    background-color: #fff;
  }
  .ctrl-s-wrap{
    margin: 0 20px;
    height: 40px;
    position: fixed;
    bottom: 8px;
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
  .activecity{
    background-color: #008489;
    color: #ffffff;
  }
</style>
