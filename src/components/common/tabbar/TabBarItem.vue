<template>
  <div class="tab-bar-item" @click='itemclick' :class="{clickitem:isClick}">
      <div :class="{activeicon:isActive}"><slot name="item-icon"></slot></div>
      <div :class="{activetext:isActive}"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
    name:'TabBarItem',
    props:{
        path: String
    },
    data() {
        return{
            isClick:false
        }
    },
    methods: {
        itemclick() {
            // console.log('itemclick')
            this.$router.replace(this.path)
            this.isClick = true
            setTimeout(() => {
                this.isClick = false
            }, 300);
        }
    },
    computed: {
         isActive() {
             if(this.isClick === false){
                 return this.$route.path.indexOf(this.path) !== -1
             }
         }
    }
}
</script>

<style>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    font-size: 14px;
    padding-bottom: 2px;
    color: #717171;

  }
  .iconfont {
      /* font-weight: bold; */
      margin-top: 3px;
  }
  .item-icon {
      height: 50%;
  }
  .item-text {
      height: 50%;
  }
  .activeicon {
      color: #eb4261;
       font-weight: 500;
  }
  .activetext {
      font-weight: 600;
      color: #000000;
  }
  .clickitem {
      background-color: rgba(100, 100, 100, .08);
      border-radius: 2px;
  }
</style>