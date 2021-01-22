<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'TabBar'
}
</script>

<style scoped>
#tab-bar{
     display: flex;
     height: 52px;
     position: fixed;
     right: 0;
     left: 0;
     bottom: 0;
     z-index: 99;
     box-shadow: 0 -1px 1px rgba(100, 100, 100, .2);
     background-color: #ffffff;
   }
</style>