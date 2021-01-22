<template>
  <div class="box">
    <!-- 引入MyWishDate组件 -->
    <!-- <my-wish-date
      class="my-wish-date"
      :class="{'show-city':!isShowDate}"
      @getDate="wishDate"
    ></my-wish-date> -->
    <!-- 引入MyWishPeople组件 -->
    <my-wish-people
      class="my-wish-people"
      :class="{'show-people':!isShowPeople}"
      @wishNumber="wishNumber"
    ></my-wish-people>
    <!-- 引入MyWishCity -->
    <my-wish-city
      class="my-wish-city"
      :class="{'show-city': !isShowCity}"
      @wishCity="wishCity"
    ></my-wish-city>
    <!-- title部分 -->
    <div class="wishlist-title">
        <h1>心愿单</h1>
    </div>
    <!-- 卡片展示部分 -->
    <div class="card-wrap">
        <!-- 合集部分-->
        <div class="card-album-wrap" @click="gofor">
            <div class="card-album-photo">
                <img src="../../assets/img/wishlist-1.jpeg" alt="">
            </div>
            <div class="card-album-desc">
                <div>
                    <strong>我的合集</strong>
                    <br>
                    <span style="font-size:12px;">共0个</span>
                </div>
            </div>
        </div>
        <!-- 足迹部分-->
        <div class="card-track-wrap">
            <div class="card-track-photo">
                <img src="../../assets/img/wishlist-2.jpeg" alt="">
            </div>
            <div class="card-track-desc">
                <div>
                    <strong>历史足迹</strong>
                    <br>
                    <span style="font-size:12px;">最近浏览房源</span>
                </div>
            </div>
        </div>
    </div>
    <!-- 选项卡部分 -->
    <div class="wishlist-card-wrap">
        <!-- 日期切换 -->
        <div class="wishlist-card" v-if="havedate">
            <div @click="gotoDate">
              <strong>日期</strong>
            </div>
        </div>
        <div class="wishlist-card havedate" v-else>
            <div @click="gotoDate">
              <div>{{startdate}}-{{enddate}}</div>
            </div>
        </div>
        <!-- 人数切换 -->
        <div
          @click="showPeople"
          class="wishlist-card"
          v-if="!havepeople"
        >
          <strong >人数</strong>
        </div>
        <div
          @click="showPeople"
          class="wishlist-card havepeople"
          v-else
        >
          <div>{{peopleNum}}人,{{infantNum}}婴儿</div>
        </div>
        <!-- 城市切换 -->
        <div
          @click="showCity"
          class="wishlist-card"
          v-if="!havecity"
        >
          <strong>城市</strong>
        </div>
        <div
          @click="showCity"
          class="wishlist-card havecity"
          v-else
        >
          <div>{{cityName}}</div>
          <!-- <div>{{上海}}</div> -->
        </div>
    </div>
    <!-- 房源信息标题 -->
    <div class="wishlist-header-wrap">
        <div class="wishlist-header-number"><strong><span>{{houseList.length}}</span>个房源</strong></div>
        <div class="wishlist-header-button" @click="handleHouseEdit()" v-show="houseEdit"><strong>编辑</strong></div>
        <div class="wishlist-header-button" @click="handleHouseEdit()" v-show="houseCancle"><strong>取消</strong></div>
    </div>
    <!-- 房源细节信息 -->
    <div class="wishlist-house-wrap"
      v-for="(item,index) in houseList"
      :key="item+index"
    >
      <div
        class="wishlist-house-button-wrap"
        v-show="houseCancle"
        :class="{activeName:item.id == checkedOpt}"
      >
        <div class="wishlist-house-button">
          <input
            type="checkbox"
            ref="ipts"
            class="checkBox"
            @input="change(index)"
            :value="item.id"
          >
          <label class="label-box" ref="index"></label>
          <label class="canCheck" ref="ok">√</label>
        </div>
      </div>
      <div class="wishlist-house-photo">
        <i class="lheart iconfont icon-heart1"></i>
        <img :src="item.src" alt="">
        <div class="iconfont "></div>
      </div>
      <div class="wishlist-house-msg">
          <div class="wishlist-house-title">{{item.title}}</div>
          <div class="wishlist-house-detail">{{item.detail}}</div>
          <div class="wishlist-house-comment">{{item.commments}}
            <span class="iconfont icon-star"></span>
          </div>
          <div class="wishlist-house-price">
              <strong><span>￥</span><span>498</span></strong>
              <span style="font-size:12px">/晚</span>
          </div>
      </div>

    </div>
    <!-- 编辑选项卡部分 -->
    <div class="edit-card-wrap" v-show="bottomMenus">
        <!-- <div class="edit-card-myShare">分享</div> -->
        <div class="edit-card-addAlbum">添加到合集</div>
        <div
          class="edit-card-myDelete"
          @click="handleDelete"
        >删除</div>
    </div>
  </div>
</template>

<script>
import MyWishDate from './components/MyWishDate'
import MyWishPeople from './components/MyWishPeople'
import MyWishCity from './components/MyWishCity'
// import MyWishList from './components/MyWishList'
export default {
    name: "Heart",
    components: {
      MyWishDate,
      MyWishPeople,
      MyWishCity,
      // MyWishList
    },
    computed:{
      havedate() {
        if(this.startdate !== ''){
          return false
        }else{
          return true
        }
      },
      havepeople(){
        if(this.peopleNum  + this.infantNum === 0){
          return false
        }else{
          return true
        }
      },
      havecity(){
        if(this.cityName === ""){
          return false
        }else{
          return true
        }
      }
    },
    data(){
        return {
            isShowPeople: false,
            isShowCity: false,
            houseEdit: true,
            houseCancle: false,
            bottomMenus: false,
            checkedOpt: "",
            // checkBox: false,
            peopleNum: 0,
            infantNum: 0,
            cityName: '',
            startdate:'',
            enddate:'',
            houseList: [
              {
                id: 1,
                src: require("../../assets/image/earth/beijing-HotDestination-06-1.jpeg"),
                title: "上海•整套公寓",
                detail: "【黑尾公寓】外滩景观loft公寓 &nbsp; 极米投影仪",
                comments: "12条评论•超赞房东",
              },
              {
                id: 2,
                src: require("../../assets/image/earth/beijing-HotDestination-05-1.jpeg"),
                title: "上海•整套公寓",
                detail: "【黑尾公寓】外滩景观loft公寓 &nbsp; 极米投影仪",
                comments: "12条评论•超赞房东",
              },
              {
                id: 3,
                src: require("../../assets/image/earth/beijing-HotDestination-03-4.jpeg"),
                title: "上海•整套公寓",
                detail: "【黑尾公寓】外滩景观loft公寓 &nbsp; 极米投影仪",
                comments: "12条评论•超赞房东",
              }
            ],
            checkedList: []
        }
    },
    mounted(){
      this.startdate = this.$store.state.startdate
      this.enddate = this.$store.state.enddate
    },
    methods: {
      
      gotoDate(){
        this.$router.push('/selectdate')
      },
      showPeople(){
        this.isShowPeople = true
        console.log('ww')
      },
      showCity(){
        this.isShowCity = true
      },
      handleHouseEdit(){

          if(this.houseEdit == true){
              this.houseEdit = ! this.houseEdit
              this.houseCancle = ! this.houseCancle

          }else{
              this.houseEdit = ! this.houseEdit
              this.houseCancle = ! this.houseCancle

          }
          this.bottomMenus=!this.bottomMenus

      },
      wishNumber(cpeople,cinfant){
        this.isShowPeople = false
        this.peopleNum = cpeople
        this.infantNum = cinfant
      },
      wishCity(ccity){
        this.isShowCity = false
        this.cityName = ccity.join(' ')
        console.log(this.cityName)
      },
      change(index){
        // this.checkBox = !this.checkBox
        if(this.$refs.ipts[index].checked){
            this.$refs.index[index].className = 'label-box activeCheck'
            this.$refs.ok[index].className = "okCheck"
        }else{
          this.$refs.index[index].className = 'label-box'
          this.$refs.ok[index].className = "canCheck"
        }
        // console.log(this.$refs.ipts);
      },
      handleDelete(){
        this.checkedList = []
        this.$refs.ipts.forEach((item,index)=>{
          if(item.checked === true){
            this.checkedList.push(index+1)
          }
        })
        this.checkedList.forEach(item=>{
          this.houseList.forEach((item1,index,arr)=>{
            if(item == item1.id){
              arr.splice(index,1)
            }
          })
        })

        this.$refs.ipts.forEach((item,index)=>{
          // console.log(item.checked);
          item.checked = false
            this.change(index)
        })
        console.log(this.$refs.ipts);

      },
      gofor(){
        this.$router.push('/mywishlist')
        // console.log(11)
      },
      gohis(){
        // console.log(123)
        this.$router.push('/search')
      }
    },
}
</script>

<style scoped>
.box{
  box-sizing: border-box;
  padding: 10px 10px;
  padding-bottom: 50px;
  position: relative;
}
/* 总体标题部分 */
.wishlist-title{
    margin: 2px 10px;
}
/* 卡片展示部分 */
.card-wrap{
    /* background-color: red; */
    height: 80px;
    margin: 30px 0px;
    box-sizing: border-box;
    display: flex;
}
/* 合集部分 */
.card-album-wrap{
    margin-left: 5px;
    flex: 1;
}
/* 公共样式 */
.card-album-wrap,.card-track-wrap{
    /* background-color: red; */
    display: flex;
    box-sizing: border-box;
    border: 1px solid #cacaca;
    border-radius: 10px;
}
/* 图片部分 */
.card-album-photo,.card-track-photo{
    /* background-color: yellow; */
    flex: 1;
}
.card-album-photo img{
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 10px;
    padding-right: 5px;
}
.card-track-photo img{
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 5px;
    padding-right: 12px;
}
/* 描述部分 */
.card-album-desc,.card-track-desc{
    /* background-color: blue; */
    box-sizing: border-box;
    flex: 4;
    display: flex;
    align-items: center;
}
/* 足迹部分 */
.card-track-wrap{
    /* background-color: green; */
    flex: 1.1;
    margin-left: 10px;
}
/* 选项卡切换部分 */
.wishlist-card-wrap{
    box-sizing: border-box;
    margin: 20px 0px;
    height: 30px;
    line-height: 30px;
    /* background-color: seagreen; */
    display: flex;
    padding-right: 10%;
}
.wishlist-card{
    flex: 1;
    border:  1px solid #cacaca;
    border-radius: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 5px 0px 5px;
    font-size: 14px;

}
/* 房源信息标题部分 */
.wishlist-header-wrap{
    width: 100%;
    height: 30px;
    padding: 0px 10px;
    /* background-color: seagreen; */
    box-sizing: border-box;
    display: flex;
}
.wishlist-header-number{
    flex: 1;
    text-align: left;
    display: flex;
    align-items: center;
}
.wishlist-header-button{
    flex: 1;
    text-align: right;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #12786a;
}
/* 房源细节信息部分 */
.wishlist-house-wrap{
    /* background-color: red; */
    box-sizing: border-box;
    height: 120px;
    margin: 10px 2px;
    padding: 10px 8px;
    border-bottom: 1px solid #cacaca;
    display: flex;
}
.wishlist-house-button-wrap{
    flex: 0.4;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 20px;
    padding-bottom: 12px;

}
.wishlist-house-button{
    border: 1px solid #dbdbdb;
    background-color: #f3f3f3;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    position: relative;
}
.wishlist-house-photo{
    float: 1;
    position: relative;
}
.lheart{
  position: absolute;
  top: 5px;
  right: 10px;
  color: rgb(246, 104, 103);
  box-shadow: rgb(246, 104, 103);
}
.wishlist-house-photo img{
    width: 100px;
    height: 80px;
    border-radius: 10px;
}
.wishlist-house-msg{
    flex: 3;
    padding-top: 4px;
    padding-left: 14px;
}
.wishlist-house-title,
.wishlist-house-detail,
.wishlist-house-comment{
    font-size: 14px;
    margin: 2px 0px;
}
.wishlist-house-detail{
    /* 溢出隐藏 */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    /* 只显示一行 */
    -webkit-line-clamp: 1;
    word-break: break-all;
    overflow: hidden;
}

/* 编辑选项卡部分 */
.edit-card-wrap{
    position: fixed;
    bottom: 0px;
    left: 0;
    right: 0;
    display: flex;
    height: 55px;
    background-color: white;
    z-index: 999;
}
.edit-card-myShare,
.edit-card-addAlbum{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #12786a;
    font-weight: 700;
    border-right: 1px solid #dbdbdb;

}
.edit-card-addAlbum{
    flex: 1.5;
}
.edit-card-myDelete{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
    font-weight: 700;
}

.my-wish-people,.my-wish-city{
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  z-index: 999;
}
/* 功能卡 */
.show-people,.show-city{
  display: none;
}
.havepeople,.havecity,.havedate{
  text-align: center;
  background-color: #008489;
  color: #ffffff;
   /* 溢出隐藏 */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    /* 只显示一行 */
    -webkit-line-clamp: 1;
    word-break: break-all;
    overflow: hidden;
}
/* 设置心愿单数据处理 */
.activeName{
  color: #008489;
  font-weight: 600;
}
.checkBox{
  position: absolute;
  width: 30px;
  height: 30px;
  top: -2px;
  opacity: 0;
  z-index:9;
}
.label-box {
    width:30px;
    height:30px;
    position: absolute;
    top: 0px;
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
  left: 9px;
  z-index: 8;
}
.canCheck{
  display: none;
}
/* .havedate {
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  background-color: #008489;
} */

</style>
