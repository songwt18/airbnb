<template>
    <div class="order">
        <div class="order-top">
            <span class="iconfont icon-fanhui"  @click="back(path)"></span>
        </div>
        <div class="order-title">订单中心</div>
        <order-tab>
           
        </order-tab>
    </div>
</template>
<script>
import OrderTab from './OrderTab'
export default {
    name:"Order",
    data(){
        return{
            path:'',
        }
    },
    components:{
        OrderTab,
    },
    methods: {
         back(path){
           this.$router.push({path:'/newmy'})
        },
    },
}
</script>
<style scoped>
.rd{
    width: 40px;
    height: 60px;
    background-color: red;
}
.order-top{
    height: 40px;
}
.icon-fanhui{
    font-size: 30px;
}
.order-title{
    font-size: 22px;
    font-weight: bold;
    margin:10px 10px;
}

</style>