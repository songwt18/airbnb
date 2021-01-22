<template>
  <div class="wrappers" ref="wrappers">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:'Scroll',
    props:{
        probeType: {
            type: Number,
            default: 0
        },
        scrolltop: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            srcoll: null
        }
    },
    mounted() {
        this.srcoll = new BScroll(this.$refs.wrappers,{
            probeType:this.probeType,
            click: true
        })
        this.srcoll.on('scroll',(position) => {
            this.$emit('scroll',position)
        })
        
    },
    updated() {
        if(this.scrolltop!==0){
            this.srcoll.scrollTo(0,-this.scrolltop,500)
        }
    }
}
</script>

<style scoped>

</style>