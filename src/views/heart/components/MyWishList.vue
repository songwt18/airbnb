<template>
  <div class="box">
    <div class="button">
      <div
        class="return iconfont icon-fanhui"
        @click="gobacks"
      ></div>
      <div class="add">＋</div>
    </div>
    <div class="title">心愿单</div>
    <div class="content"><img src="../../../assets/image/heart/mylist.png" alt=""></div>
    <div class="bgc">
      <div class="myheart iconfont icon-heart"></div>
    </div>
    <div class="pra">尚未收藏任何内容</div>
  </div>
</template>
<script>
export default {
  // name: MyWishList,
  methods:{
    gobacks(path){
      this.$router.go(-1)
      // console.log(123)
    },
  }
}
</script>
<style scoped>
  .box{
    padding: 10px 20px;
  }
  .button{
    display: flex;
  }
  .return,.add{
    flex: 1;
    font-size: 30px;
  }
  .return{
    text-align: left;
  }
  .add{
    text-align: right;
  }
  .title{
    margin: 5px 0;
    font-size: 24px;
    font-weight: 600;
  }
  .content{
    margin: 30px 0;
    padding-top: 10px;
    width: 100%;
    height: 90px;
  }
  .content img{
    width: 100%;
    height: 100%;
    border: 2px solid #008489;
    border-radius: 6px;
  }
  .bgc{
    margin: 10px 0;
    background-color: #f2f2f2;
    height: 200px;
    position: relative;
  }
  .myheart{
    position: absolute;
    top: 25%;
    left: 40%;
    font-size: 60px;
    color: #ffffff;
  }
  .pra{
    margin: 100x 0;
  }
</style>
