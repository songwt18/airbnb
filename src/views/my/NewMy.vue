<template>
    <div id="newmy">
        <div class="tops-bar">
            <span class="iconfont icon-ling"></span>
            <span class="iconfont icon-shezhi" @click="ClickS(path)"></span>
        </div>
        <div class="my-info">
            <div class="item-content-left">
                <h2>Hi{{username}}</h2>
                <p @click="goto('/persondata')">查看并编辑个人资料</p>
            </div>
           <div class="avaterClass">
            <a-avatar v-if="imgpath == ''" :size="80" icon="user"  @click="goto('/persondata')"/>
            <a-avatar v-else :size="90" :src="imgpath"  @click="goto('/persondata')"/>
            </div>
        </div>
        <div class="my-card">
            <div class="my-card-left"><img src="../../assets/img/icon-bgc1.jpeg" alt=""></div>
            <div class="my-card-right">
                <p class="my-card-size">会员中心</p>
                <p class="my-card-size1">缤纷福利一触即发</p>
            </div>
            <div class="my-card-rights">立即查看<span class="iconfont icon-fanhui1"></span></div>
        </div>
        <div class="my-sale">
            <div class="my-sale-left">
                <img src="../../assets/img/icon-bgc.jpeg" alt="">
            </div>
            <div class="my-sale-right">
                <p>出租房源,每月最多可赚￥6447</p>
                <p class="my-sale-content">了解更多</p>
            </div>
        </div>
        <div class="order">
            <h4>我的房源订单</h4>
            <div class="my-order">
                <div class="my-order-item" @click="orderAll(path)">
                    <i class="iconfont icon-quanbudingdan"></i>
                    <div class="order-content" >全部订单</div>
                </div>
                <div class="my-order-item" @click="orderValid(path)">
                    <i class="iconfont icon-dingdan"></i>
                    <div class="order-content" >有效订单</div>
                </div>
                <div class="my-order-item" @click="unpaid(path)">
                    <i class="iconfont icon-dingdanshijian"></i>
                    <div class="order-content" >待支付订单</div>
                </div>
            </div>
        </div>
        <div class="gifts">
            <h4>礼券中心</h4>
            <div class="my-gifts">
                <div class="my-gifts-item">
                    <i class="iconfont icon-shengjilijin"></i>
                    <div class="gifts-content">礼金券<br><span class="gifts-item">共一张</span></div>
                </div>
                <div class="my-gifts-item">
                    <i class="iconfont icon-icon-test"></i>
                    <div class="gifts-content">旅行基金<br><span class="gifts-item">￥0</span></div>
                </div>
                <div class="my-gifts-item">
                    <i class="iconfont icon-liwu"></i>
                    <div class="gifts-content">邀请好友<br><span class="gifts-item">得￥30旅行基金</span></div>
                </div>
            </div>
        </div>
        <div class="tools">
            <h4>旅程工具</h4>
            <div class="my-tools">
                <div class="my-tools-item">
                    <i class="iconfont icon-winfo-icon-anquan"></i>
                    <div class="tools-content">安全中心</div>
                </div>
                <div class="my-tools-item">
                    <i class="iconfont icon-wenhao"></i>
                    <div class="tools-content">邻里调解</div>
                </div>
                <div class="my-tools-item">
                    <i class="iconfont icon-bangzhu"></i>
                    <div class="tools-content">获取帮助</div>
                </div>
                <div class="my-tools-item">
                    <i class="iconfont icon-changtuchezhan"></i>
                    <div class="tools-content">商务差旅</div>
                </div>
                <div class="my-tools-item">
                    <i class="iconfont icon-qiapian"></i>
                    <div class="tools-content">产品反馈</div>
                </div>
                <div class="my-tools-item">
                    <i class="iconfont icon-yijianfankui"></i>
                    <div class="tools-content">行程计划</div>
                </div> 
            </div>
            <div class="center-bottom-content">
                <h4>成为房东/体验达人</h4>
                <div class="bottom-item">
                    <div>了解如何出租房源<span class="iconfont icon-fanhui1"></span></div>
                    <div>发布房源<span class="iconfont icon-fanhui1"></span></div>
                    <div>开展体验<span class="iconfont icon-fanhui1"></span></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {clearCache,getCacheVal} from '../../ajax/localStorage'
export default {
    name:'Login',
     data(){
       return{
            path:'',
            imgpath:getCacheVal("imgpath") ? getCacheVal("imgpath") : "",
            username:getCacheVal("name")
       }
  },
   methods:{
    ClickS(path){
        this.$router.push({path:'/newsetting'})
    },
    goto(path){
            this.$router.push({path:'/persondata'})
        },
    orderAll(path){
        this.$router.push({path:"/order",query:{id:1}})
    },
    orderValid(path){
        this.$router.push({path:"/order",query:{id:2}})
    },
    unpaid(path){
        this.$router.push({path:"/order",query:{id:3}})
    }
    }
}
</script>
<style scoped>
#newmy{
    margin: 0px 15px;
    color: black;
}
.tops-bar{
    float:right;
    margin: 5px 0px;
}
.icon-shezhi{
    margin-left: 30px;
}
.my-info{
    clear: both;
}
.item-content-left{
    float: left;
    padding-top: 10px;
    padding-left: 10px;
}
.item-content-left p{
    color: #008489 ;
}
.avaterClass{
    float: right;
    font-size: 60px;
    margin: 0px 0px 10px 0px;
}
.my-card{
    margin: 10px 10px;
    border-radius: 10px;
    clear: both;
    height: 70px;
    background-image: linear-gradient(to right,#fef3dd,#f2cc8e);
    display: flex;
}
.my-card-left{
    float: left;
}
.my-card-size{
    margin: 10px 10px;
    font-weight: bold;
    color: brown;
}
.my-card-size1{
    margin: 0px 10px;
}
.my-card-left img{
    flex:0;
    width: 30px;
    height: 30px;
    margin: 20px 10px;
    border-radius: 100%;
}
.my-card-right{
    flex: 7;
}
.my-card-rights{
    flex:4;
    font-size: 14px;
    color: brown;
    font-weight: bold;
    padding: 23px 0px;
}
.my-card-rights .iconfont{
    font-size: 12px;
}
.my-card-size{
    font-size: 13px;
}
.my-card-size1{
    font-size: 12px;
}
.my-sale{
    clear: both;
}
.my-sale-left{
    float: left;
}
.my-sale-left img{
    width:50px;
    height: 50px;
    margin: 20px 0px;
}
.my-sale-right{
    float: right;
    margin: 15px 15px 0px 0px;
}
.my-sale-content{
    color: #008489 ;
    font-weight: bold;
}
.order,.gifts,.tools,.center-bottom-content{
    border-top:1px solid gainsboro;
    clear: both;  
}
.my-order,.my-gifts{
    display: flex;
}
h1, h2, h3, h4, h5, h6{
    margin-top: 8px;
    font-weight: bold;
}
.my-order-item ,.my-gifts-item{
    flex: 1;
    justify-content: center;
    padding:0px 10px;
}
.my-order-item .iconfont,.my-gifts-item .iconfont {
   font-size: 25px;
   padding: 0px 23px;
}
.order-content{
    margin: 5px 0px 10px 6px;
}
.gifts-content{
    margin: 5px 5px 10px 0px;
    text-align: center;
}
.gifts-item{
    font-size: 12px;
}
.my-tools{
    display: flex;
    flex-wrap: wrap; 
}
.my-tools-item{
   flex: 1;
   padding:5px 15px 15px 15px;
}
.my-tools-item .iconfont{
   font-size: 20px;
   padding: 0px 15px;
   color: black;
}
.tool-content{
    margin: 5px 0px;
    color: black !important;
}
.center-bottom-content{
    font-size: 14px;
}
.font-content{
    font-size:12px;
    font-weight: normal;
}
.item-contents{
    margin: 10px 0px;
}
.bottom-item{
   font-size: 13px;
   font-weight: normal;
   height: 40px;
   line-height: 40px;
   
}
.bottom-item .iconfont{
    font-size: 13px;
    float: right;
    margin-right: 15px;
    font-weight: normal;
}
</style>