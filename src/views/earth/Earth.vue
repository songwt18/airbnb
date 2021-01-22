<template>
  <div class="box">
    <!-- 引入ChangeCity组件 -->
    <change-city
      class="show-city"
      :class="{'like-city':!isShowCity}"
      @chosenCity="chosenCity"
    ></change-city>
    <!-- 设置城市部分 -->
    <div class="destination-city-wrap">
      <div
        class="destination-city"
        v-if="!myChosenCity"
      >
        上海
        <span
          class="changecity"
          @click="myChosen"
        >切换城市</span>
      </div>
      <div
        class="destination-city"
        v-else
      >
        {{myCity}}
        <span
          class="changecity"
          @click="myChosen"
        >切换城市</span>
      </div>
      <div
        class="destination-more"
        @click="toSearch"
      >搜索更多房源&nbsp;&gt;</div>
    </div>
    <!-- 热门房源榜 -->
    <div>
      <div class="hot-title">
          热门房源榜
      </div>
      <div class="hot-house">
        <div
          class="hot-house-item"
          v-for="item in hotList"
          :key="item.id"
        >
          <div class="imgs">
            <img :src="item.src" alt="">
          </div>
          <div class="hot-comment">
            <div class="hot-item-title">{{item.title}}</div>
            <div class="hot-item-content">{{item.content}}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 精选客房推荐 -->
    <div class="chosen-title">精选客房推荐</div>
      <div class="chosen-wrap">
        <div class="chosen-first"
          v-for="(item,index) in chosenList"
          :key="index"
        >
          <div class="chose-item">
            <!-- 精品图片部分 -->
            <!-- <div class="iconfont icon-aixin"></div> -->
            <div class="chosen-img">
              <img :src="item.src">
            </div>
            <!-- 精品内容部分 -->
            <div class="chose-content">
              <div class="chose-title">{{item.title}}</div>
              <div class="chose-text">{{item.content}}</div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChangeCity from './components/ChangeCity';
export default {
    name: "Earth",
    data() {
        return {
          myCity: '',
          isShowCity: false,
          hotList: [
              {
                id:1,
                src:require("../../assets/image/earth/hot1.jpeg"),
                title:"北京认证榜",
                content:"设计好 | 设施全"
              },
              {
                id:2,
                src:require("../../assets/image/earth/2.jpeg"),
                title:"欢乐谷好评榜",
                content:"满分榜 | 无差评"
              },
              {
                id:3,
                src:require("../../assets/image/earth/3.jpeg"),
                title:"全家出行房源榜",
                content:"两居室 | 好评多"
              },
              {
                id:4,
                src:require("../../assets/image/earth/5.jpeg"),
                title:"三里屯热销榜",
                content:"预定快 | 好评多"
              },
            ],
          chosenList: [
              {
                id:1,
                src:require("../../assets/image/earth/beijing-HotDestination-01-1.jpeg"),
                title:"望京•房东热情好客",
                content:"首先房子的地理位置特别好，走路十分钟即可到三里屯商区。房子内有个特别大的落地窗，可以看到底下人来人往。傍晚的时候坐在落地窗旁弹弹吉他，看看书十分惬意。房东十分热情，有任何问题马上可以得到解决。"
              },
              {
                id:2,
                src:require("../../assets/image/earth/beijing-HotDestination-02-1.jpeg"),
                title:"欢乐谷好评榜",
                content:"首先房子的地理位置特别好，走路十分钟即可到三里屯商区。房子内有个特别大的落地窗，可以看到底下人来人往。傍晚的时候坐在落地窗旁弹弹吉他，看看书十分惬意。房东十分热情，有任何问题马上可以得到解决。"
              },
              {
                id:3,
                src:require("../../assets/image/earth/beijing-HotDestination-03-4.jpeg"),
                title:"全家出行房源榜",
                content:"首先房子的地理位置特别好，走路十分钟即可到三里屯商区。房子内有个特别大的落地窗，可以看到底下人来人往。傍晚的时候坐在落地窗旁弹弹吉他，看看书十分惬意。房东十分热情，有任何问题马上可以得到解决。"
              },
              {
                id:4,
                src:require("../../assets/image/earth/beijing-HotDestination-04-1.jpeg"),
                title:"三里屯热销榜",
                content:"首先房子的地理位置特别好，走路十分钟即可到三里屯商区。房子内有个特别大的落地窗，可以看到底下人来人往。傍晚的时候坐在落地窗旁弹弹吉他，看看书十分惬意。房东十分热情，有任何问题马上可以得到解决。"
              },
              {
                id:5,
                src:require("../../assets/image/earth/beijing-HotDestination-05-1.jpeg"),
                title:"三里屯热销榜",
                content:"首先房子的地理位置特别好，走路十分钟即可到三里屯商区。房子内有个特别大的落地窗，可以看到底下人来人往。傍晚的时候坐在落地窗旁弹弹吉他，看看书十分惬意。房东十分热情，有任何问题马上可以得到解决。"
              },
              {
                id:6,
                src:require("../../assets/image/earth/beijing-HotDestination-06-1.jpeg"),
                title:"三里屯热销榜",
                content:"首先房子的地理位置特别好，走路十分钟即可到三里屯商区。房子内有个特别大的落地窗，可以看到底下人来人往。傍晚的时候坐在落地窗旁弹弹吉他，看看书十分惬意。房东十分热情，有任何问题马上可以得到解决。"
              },
            ],
        }
    },
    components: {
      ChangeCity
    },
    computed: {
      myChosenCity(){
        if(this.myCity === ""){
          return false
        }else{
          return true
        }
      }
    },
    methods: {
      toSearch(){
        this.$router.push('/search')
      },
      chosenCity(iscity){
        this.myCity = iscity
        this.isShowCity = false
        console.log(this.myCity)
      },
      myChosen(){
        this.isShowCity = true
      }
    },
}
</script>

<style scoped>
.box{
  position: relative;
  margin: 0;
  padding: 0;
  background-color: #f2f2f2;
  padding: 20px 0;
}
.show-city{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 999;
}
.like-city{
  display: none;
}
/* 设置城市部分 */
.destination-city-wrap{
    display: flex;
    padding: 0 15px;
}
.destination-city{
    flex: 2;
    font-size: 24px;
}
.destination-more{
    border-radius: 30px;
    font-size: 12px;
    display: flex;
    justify-items: center;
    align-items: center;
    flex: 1.3;
    color: white;
    padding-left: 15px;
    background: linear-gradient(to right,#3caeae,#41849e, #3d4e93);
}
.changecity{
    font-size: 12px;
    margin-left: 4px;
    color:  #12786a;
}
/* 热门房源榜  */
.hot-title{
  margin: 20px;
  font-weight: 600;
}
.hot-house{
  display: flex;
  overflow-x: auto;
  margin: 0px 8px;
}
.hot-house-item{
    flex-shrink: inherit;
    /* background-color: red; */
    margin: 0px 4px;
    background-color: #f2f2f2;
    border-radius: 10px;
    position: relative;
}
.hot-item-title{
  font-size: 13px;
  margin: 5px 8px;
}
.hot-item-content{
  font-size: 12px;
  margin: 5px 8px;
}
.hot-house-item img{
    border-radius: 10px;
    width: 110px;
    height: 130px;
}
::-webkit-scrollbar {
    display: none;
}
.hot-comment{
    /* padding-left: 10px;
    padding-bottom: 8px; */
    position: absolute;
    left:0px;
    bottom:3px;
    font-weight: 500;
    color: #ffffff;
    background-color:rgb(255 255 255 /0.0);
    width: 100%;
}
/* 精选 */
.chosen-wrap{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.chosen-title{
  margin: 20px;
  font-weight: 600;
}
.chosen-first{
  width: 45%;
  margin: 5px 8px;
}
/* .icon-aixin{
  position: absolute;
  top: 5px;
  right: 10px;
  font-weight: 500;
  color: red;
} */
.chose-item{
  border: 2px solid #ffffff;
  border-radius: 6px;
  /* margin: 0 5px; */
  /* height: 320px; */
  /* position: relative; */
}
.chosen-img img{
  width: 100%;
  height: 170px;
  border-radius: 6px 6px 0 0;
}
.chose-content{
  background-color: #fff;
  padding: 5px 10px;
}
.chose-title{
  color: rgb(110, 91, 61);
  font-size: 12px;
  margin-bottom: 5px;
  font-weight: 700;
}
.chose-text{
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  word-break: break-all;
  overflow: hidden;
  font-size: 13px;
  color: black;
  font-weight: bold;
  opacity: 0.8;

}

</style>
