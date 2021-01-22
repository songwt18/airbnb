<template>
  <div id="home">
      <Swipper></Swipper>
      <div class="top-search" >
        <top-search v-show="isShowTopSearch"></top-search>
      </div>
      <scroll class="wrappers" :probe-type='3' @scroll="contentScroll" ref="scroll">
        <div class="inner">
            <tab-search :isScroll='isScroll' :scrollPosition='scrollPosition'></tab-search>
            <condition></condition>
            <red-packet></red-packet>
            <landlord></landlord>
            <history></history>
            <tourist></tourist>
            <destination></destination>
            <plus></plus>
            <online></online>
            <all></all>
        </div>
      </scroll>
  </div>
</template>

<script>
import BScroll from 'better-scroll';

import Scroll from 'components/common/betterscroll/Scroll';


import Swipper from 'components/common/swipper/Swipper';

import TopSearch from './components/search/TopSearch';

import TabSearch from './components/tabsearch/TabSearch';
import Condition from './components/tabsearch/Condition';
import RedPacket from './components/card/RedPacket';
import Landlord from './components/landlord/Landlord';
import History from './components/history/History';
import Tourist from './components/card/Tourist';
import Destination from './components/destination/Destination';
import Plus from './components/plus/Plus';
import Online from './components/online/Online';
import All from './components/all/All';

export default {
    name: 'Home',
    components: {
      Scroll,
      Swipper,
      TopSearch,
      TabSearch,
      Condition,
      RedPacket,
      Landlord,
      History,
      Tourist,
      Destination,
      Plus,
      Online,
      All
    },
    props: {
      
    },
    data() {
      return {
        isShowTopSearch : false,
        isScroll: false,
        scrollPosition: 0
      }
    },
    mounted() {
      // console.log(this.peopleNum)
      console.log(this.$refs.scroll.srcoll)
      },
    methods: {
      // 判断当前滚动位置
      contentScroll(position){
        // console.log(position)
        this.isScroll = true
        this.scrollPosition = position.y
        this.isShowTopSearch = -position.y > 264
        // console.log(this.scrollPosition)
        }
    }
}
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}
.top-search {
  position: absolute; 
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
}
.wrappers {
  position: absolute; 
  z-index: 9;
  /* background-color: #ffffff; */
  /* height: 300px; */
  top: 234px;
  bottom: 49px;
  left: 0;
  right: 0;
  /* opacity: 0; */
  
}
.inner {
  background-color: #fff;
}
</style>