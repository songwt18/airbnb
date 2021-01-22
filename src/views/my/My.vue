<template>
    <div id="my">
        <div class="tops-bar">
            <span class="iconfont icon-ling"></span>
            <span class="iconfont icon-shezhi" @click="goto(path)"></span>
        </div>
        <div class="item-content">
                <div class="item-content-left">
                    <span @click="handleRegister(path)">注册</span>
                    <span>/</span>
                    <span @click="handleLogin(path)">登录</span>
                </div>
                <div class="iconfont icon-user" @click="handleLogin(path)"></div>
        </div>
        <div class="top-center-content">
            <div class="top-center">旅程工具</div>
            <div class="center-content">
                <div class="ctenter-content-item">
                    <i class="iconfont icon-wenhao1"></i>
                    <div class="item-contents">邻里调解</div>
                </div>
                <div  class="ctenter-content-item">
                    <i class="iconfont icon-bangzhu"></i>
                    <div class="item-contents">获取帮助</div>
                </div>
                <div  class="ctenter-content-item">
                    <i class="iconfont icon-qiapian"></i>
                    <div class="item-contents">行程规划</div>
                </div>
            </div>
        </div>
        <div class="center-bottom-content">
            <span>成为房东</span>
            <span>/</span>
            <span>体验达人</span>
            <p class="font-content">开展体验</p>
        </div>
    </div>
</template>
<script>
export default {
    name:"My",
    data() {
        return {
            path:'',
        }
    },
    methods: {
        goto(path){
             this.$router.push({path:'/setting'})
        },
        handleRegister(path){
            this.$router.push({path:'/register'})
        },
        handleLogin(path){
            this.$router.push({path:'/login'})
        }
    },
    
}
</script>
<style scoped>
/* #my{
    margin: 0px 15px;
}
.icon-wenhao1,.icon-bangzhu,.icon-qiapian{
    margin: 0px 18px;
    font-size:30px;
}
.tops-bar{
    float:right;
}
.icon-shezhi{
    margin-left: 30px;
}
.item-content{
    clear: both;
} 
.item-content-left{
    float: left;;
    font-size: 20px;
    padding: 35px 0px;
    font-weight: bold;
}
.icon-user {
    float: right;
    font-size:60px;
    font-weight: normal;
    color:gainsboro;
    padding: 25px 20px;
}  
.top-center{
    font-size: 17px;
    font-weight: bold;
    margin: 10px 0px;
}
.top-center-content{
    clear: both;
    border-top: 1px solid gainsboro;
    border-bottom: 1px solid gainsboro;
}
.center-content{
    display: flex;
}
.ctenter-content-item{
   flex: 1;
   margin-left: 20px;
}
.center-bottom-content{
    font-size: 17px;
    font-weight: bold;
    padding-top: 20px;
}
.font-content{
    font-size:15px;
    font-weight: normal;
}
.item-contents{
    margin: 10px 0px;
} */
</style>