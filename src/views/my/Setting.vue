<template>
    <div>
        <div class="head-content">
            <span class="iconfont icon-fanhui"  @click="back"></span>
            <span class="head-item">账号设置</span>
        </div>
        <div class="content-center" v-for="item in menus" :key="item.name" @click="goto(item.path)">{{item.name}}
        </div>
    </div>
</template>
<script>
const menus=[
    {
        name:"账号管理",
        path:'/login'
    },
     {
        name:"显示货币",
        path:''
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
        name:"发送反馈",
        path:'/feedback'
    },
]
export default {
    name:"Setting",
    data() {
        return {
            menus,
        }
    },
    methods: {
        back(){
           this.$router.go(-1)
        },
        goto(path){
            this.$router.push({path})
        }
    },

}
</script>
<style scoped>
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
  height: 70px;  
  line-height: 70px;
  margin: 0px 15px;
}
</style>