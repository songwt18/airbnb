<template>
    <div>
        <div class="order-tab">
            <div class="order-tab-item" v-for="(item,index) in menuList" :key="item+index" :class="{active:index===currentIndex}" @click="ChangeItem(index)">
                {{item.name}}
            </div>
        </div>
        <div class="order-content" v-for="(item,index) in constList" :key="item+index" v-show="index===currentIndex">
            <div  class="order-content">
                <input type="checkbox" class="left-box" v-show="isShow" v-model="checkList" :value="item"/>
                <div class="order-content-left">
                    <div class="left-title">{{item.content}}</div>
                    <div class="left-date">{{item.date}}<strong>.</strong>{{item.number}}位房客</div>
                    <div><span class="order-pay" id="pays">{{item.state}}</span><strong class="order-mark">.</strong>￥{{item.price}}</div>
                    <button class="order-button" id="finshpay" @click="finshpay()" >{{item.button}}</button>
                </div>
                <div class="order-content-right">
                    <img :src="item.src" alt=""/>
                </div>  
            </div>
        </div>
        <div class="order-edit" @click="orderEdit()" v-show="isTrue">编辑</div>
        <div class="bottom-order" v-show="isHidden">
            <div class="order-all"><input type="checkbox" class="order-check" v-model="checked" @click="checkAll"/>全选</div>
            <div class="order-delete" @click="orderDelete()">删除</div>
            <div class="oeder-finish" @click="orderFinish()">完成</div>
        </div>
    </div>
</template>

<script>
let menuList=[
    {   
        id:1, 
        name:"全部订单",
    },
    {
        id:2,
        name:"有效订单",
    },
    {
        id:3,
        name:"待支付",
    }
]
export default {
    name:"OrderTab",
    data() {
        return {
            menuList,
            currentIndex:0,
            oneShow:true,
            twoShow:false,
            isShow:false,
            isHidden:false,
            isTrue:true,
            checkList:[],
            checked:false,
            isActive:false,
            isPay:false,
            constList:[
                {id:1,content:'徐汇区的整套房子/公寓',date:'10/03/2020-10/04',number:'11',price:'234',state:"订单待支付",button:'完成支付',src:require("../../assets/img/Bspecially-preferential03-2.jpeg")},
                {id:2,content:'徐汇区的整套房子/公寓',date:'10/03/2020-10/04',number:'1',price:'234',state:"订单已支付",button:'已支付',src:require("../../assets/img/Bspecially-preferential03-2.jpeg")},
                {id:3,content:'清单区的整套房子/公寓',date:'10/03/2020-10/04',number:'2',price:'234',state:"订单待支付",button:'完成支付',src:require("../../assets/img/Bspecially-preferential03-2.jpeg")},
            ],
            ID:0,
        }
    },
    mounted(){
         this.ID=this.$route.query.id
         if(this.ID==='1'){
           this.currentIndex=0
         }else if(this.ID==='2'){
            this.currentIndex=1
         }else if(this.ID==='3'){
            this.currentIndex=2
         }
    },
    watch:{
    　　checkList(){
    　　　　if(this.checkList.length==this.constList.length){
                //被全选
    　　　　　　this.checked=true;
    　　　　}else{
                //未被全选
    　　　　　　this.checked=false;
    　　　　    }
    　　    }
        },
    methods: {
        finshpay(){
            var finshpay=document.getElementById("finshpay")
            finshpay.style.display="none"
            this.constList[0].state="订单已支付"
            var pays=document.getElementById("pays")
            pays.style.color="black"
        },
        ChangeItem(index){
            this.currentIndex=index
            this.oneShow=!this.oneShow
            if(index===0){
                
            }
        },
        orderEdit(){
            this.isShow=!this.isShow
            this.isTrue=!this.isTrue
            this.isHidden=!this.isHidden
        },
        orderFinish(){
            this.isTrue=!this.isTrue
            this.isHidden=!this.isHidden
            this.isShow=!this.isShow
        },
        checkAll(){
    　　　　if(this.checked){
              //全不选
    　　　　　　this.checkList=[];
    　　　　}else{
              //全选
    　　　　　　this.constList.forEach((item)=>{
    　　　　　　if(this.checkList.indexOf(item)==-1){
                    //数组中没有item,则加到数组中
    　　　　　　　　this.checkList.push(item)
    　　　　　　        }
    　　　　　　   })
    　　　　    }
    　　    },
      orderDelete(){
        if(!this.checked){
            this.constList.forEach((items,index)=>{
                if(this.checkList.indexOf(items)!=-1){
                    this.constList.splice(index,1) 
                }
    　　　　　　})
            }else{
                this.constList.forEach((items,index)=>{
                if(this.checkList.indexOf(items)!=-1){
                    this.constList.splice(index) 
                    this.checked=!this.checked       
                }   
    　　　　　　})
            }
        }
    },
}
</script>
<style  scoped>
.order-tab-item{
  float: left; 
  margin: 10px 0px;
  padding-bottom: 10px;
  margin-left: 25px;
  font-size: 14px;
}
.active{
    border-bottom:2px solid #008489;
}
.order-content{
    display: flex;
    clear: both;
    border-bottom: 1px solid gainsboro;
    margin: 0px 10px;
}
.left-box{
    flex:0.5;
    margin-top:60px;    
}
.order-content-left{
   font-size: 12px;
   padding: 20px 0px;
   flex:4;
}
.left-title{
    font-size:14px;
    font-weight: bold;
    margin: 5px 0px;
}
.left-date{
    margin: 5px 0px;
}
.order-pay{
    color:rgb(255 0 0/0.8);
}
.order-mark{
    padding:0px 10px;
}
.order-content-right{
  padding: 20px 0px;
  flex:2;
}
.order-content-right img{
    width: 100%;
    height: 80px;
    border-radius: 10px;
}
.order-button{
    background-color:#008489 ;
    color: white;
    margin-top: 10px;
    height: 30px;
    line-height: 30px;
    width:100px;
    border: none;
    border-radius: 10px;
}
.order-edit{
    clear: both;
    position: fixed;
    bottom: 10px;
    right: 15px;
    color:#008489 ;
}
.bottom-order{
    height: 40px;
    line-height: 40px;
    width:100%;
    border-top: 1px solid gainsboro;
    border-bottom: 1px solid gainsboro;
    position: fixed;
    bottom: 0px;
    right: 0px;
    color:#008489 ;
    background-color: white;
}
.order-all{
    float: left;
    margin: 0px 20px;
}
.order-delete{
   float: left;
   margin:0px 30px 0px 110px;
}
.order-finish{
    float: right;
    margin-left: 20px;
}
</style>