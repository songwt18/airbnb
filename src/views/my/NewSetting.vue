<template>
    <div id="newsetting">
        <div class="head-content">
            <span class="iconfont icon-fanhui"  @click="back(path)"></span>
            <span class="head-item">账号设置</span>
        </div>
        <div class="content-center" v-for="item in menus" :key="item.name" @click="goto(item.path)">{{item.name}}
        </div>
    </div>
</template>
<script>
import { clearCacheVal } from '../../ajax/localStorage'

const menus=[
    {
        name:"账号管理",
        path:'/login'
    },
    {
        name:"通知",
        path:''
    },
    {
        name:"收款方式",
        path:''
    },
     {
        name:"客服中心",
        path:'/chatting'
    },
     {
        name:"关于此应用程序",
        path:''
    },
     {
        name:"高级设置",
        path:''
    },
    {
        name:"删除账户",
        path:'/feedback'
    },
     {
        name:"发送反馈",
        path:'/feedback'
    },
    {
        name:"退出",
        path:'/logout'
    },
]
export default {
    name:"NewSetting",
    data() {
        return {
            menus,
            path:''
        }
    },
    methods: {
        back(path){
           this.$router.push({path:'/newmy'})
        },
        goto(path){
            if (path === "/logout") {
               this.showConfirm(path)
            }else if(path === "/chatting"){
                this.$router.push({path:'/chatting'})
            }
        },
        showConfirm(path) {
            let t = this
            this.$confirm({
                title: '你是否确认退出登录?',
                okText:"确认",
                cancelText:"取消",
                onOk() {    
                    clearCacheVal()
                    t.$router.replace({path:'/my'})
                },
                onCancel() {
                },
            })
        },
}
}
</script>
<style scoped>
#newsetting{
    color: black;
}
.head-content{
    height: 45px;
    line-height: 45px;
}
.icon-fanhui{
    float: left;
    font-size: 35px;
}
.head-item{
    font-size: 18px;
    margin-left: 20px;
}
.content-center{
  border-top:1px solid gainsboro;
  height: 60px;  
  line-height: 60px;
  margin: 0px 15px;
  clear: both;
}
</style>