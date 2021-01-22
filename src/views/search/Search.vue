<template>
  <div id="search">
      <search-input class="search-input"></search-input>
      <!-- <scroll class="wrappers"> -->
        <div class="inner">
          <div class="inner-bank"></div>
          <search-select></search-select>
          <search-condition></search-condition>
          <search-house></search-house>
        </div>
      <!-- </scroll> -->
  </div>
</template>

<script>
import Scroll from 'components/common/betterscroll/Scroll';

import SearchInput from './components/SearchInput'
import SearchSelect from './components/SearchSelect'
import SearchCondition from './components/SearchCondition'
import SearchHouse from './components/SearchHouse'
export default {
    name:'Search',
    components: {
      SearchInput,
      SearchSelect,
      SearchCondition,
      SearchHouse,
      Scroll
    },
}
</script>

<style scoped>
#search {
  position: relative;
  /* height: 100vh; */
  z-index: 999;
}
.search-input {
  position: relative;
  z-index: 99;
  background-color: #fff;
}
.wrappers {
  position: relative; 
  /* height: calc(100%-65); */
  z-index: 99;
  top: 65px;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  /* opacity: 0; */
  background-color: #ffffff;
}
.inner {
  background-color: #ffffff;
  
}
.inner .inner-bank {
  height: 65px;
}
</style>