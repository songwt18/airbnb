<template>
  <div id="main-tab-bar">
    <tab-bar>
      <tab-bar-item path="/home">
        <div slot="item-icon" class="iconfont icon-search2 iconsize"></div>
        <div slot="item-text">搜索</div>
      </tab-bar-item>
      <tab-bar-item path="/heart">
        <div slot="item-icon" class="iconfont icon-heart iconsize"></div>
        <div slot="item-text">心愿单</div>
      </tab-bar-item>
      <tab-bar-item path="/earth">
        <div slot="item-icon" class="iconfont icon-earth1 iconsize"></div>
        <div slot="item-text">目的地</div>
      </tab-bar-item>
      <tab-bar-item path="/message">
        <div slot="item-icon" class="iconfont icon-message1 iconsize"></div>
        <div slot="item-text">收件箱</div>
      </tab-bar-item>
      <tab-bar-item path="/my"> 
        <div slot="item-icon" class="iconfont icon-my1 iconsize"></div>
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
    name:'MainTabBar',
    components: {
        TabBar,
        TabBarItem
    }
}
</script>

<style scoped>
  @import '../../../assets/css/iconfont.css';
  #main-tab-bar {
    background-color: #ffffff;
  }
  .iconsize {
    font-size: 26px;
  }
  .item-text {
    /* margin-top: -3px; */
  }
</style>