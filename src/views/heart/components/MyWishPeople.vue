<template>
    <div class="box">
      <!-- 返回功能 -->
        <div @click="goback(path)" class="cancle iconfont icon-fanhui"></div>
        <!-- 渲染页面人数选择功能 -->
        <div
          class="chooseType-wrap"
          v-for="(item,index) in list"
          :key="index"
        >
            <div class="chooseType">
                {{item.type}}
                <br>
                <span style="font-size:12px">{{item.remarks}}</span>
            </div>
            <div class="changeNumber-wrap">
                <div class="changeNumber">
                    <div class="button-wrap"><div class="button" @click="decrease(index)">-</div></div>
                    <div class="number">{{item.count}}</div>
                    <div class="button-wrap"><div class="button" @click="increase(index)">+</div></div>
                </div>
            </div>
        </div>
        <!-- 保存按钮 -->
        <div class="confirm-wrap">
          <div class="confirm" @click="numberConfirm">保存</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MyWishCity",
    data() {
        return {
            path: '',
            list:[
              {
                type: "成人",
                remarks: "",
                count: 1,
              },
              {
                type: "儿童",
                remarks: "2-12岁",
                count: 0,
              },
              {
                type: "婴幼儿",
                remarks: "2岁以下",
                count: 0,
              }
            ]
        }
    },
    computed:{
      cpeople(){
        return this.list[0].count + this.list[1].count
      },
      cinfant(){
        return this.list[2].count
      }
    },
    methods:{
      goback(path){
        this.$router.go({path :'/heart'})
      },
      decrease(index){
        if(this.list[index].count <=0){
          this.list[index].count = 0
        }else{
          this.list[index].count--
        }

      },
      increase(index){
        this.list[index].count ++

      },
      numberConfirm(){
        this.$emit("wishNumber",this.cpeople,this.cinfant)
      }

    }
}
</script>

<style scoped>
.box{
    margin: 0;
    color: black;
    background-color: #fff;
}
.cancle{
    padding: 15px 0;
    font-size: 30px;
    font-weight: 700;
    border-bottom: 1px solid #f2f2f2;
}
.chooseType-wrap{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 24px 20px;
    padding: 24px 0;
    border-bottom: 1px solid #f2f2f2;
}
.chooseType{
    flex: 3;
}
.changeNumber-wrap{
    flex: 1;
}
.changeNumber{
    display: flex;
}
.button-wrap,.number{
    flex: 1;
    margin: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.button{
    width: 28px;
    height: 28px;
    border: 1px solid #12786a;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.confirm-wrap{
  border-top: 1px solid #f2f2f2;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  box-sizing: border-box;
  /* background-color: red; */
  padding: 17px 20px;

}
.confirm-wrap .confirm{
  height: 45px;
  line-height: 45px;
  background-color: #12786a;
  color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 15px;
}
</style>
