<template>
  <div id="text-cities">
      <div
        v-for="item in showData1"
        :key=item
        class="iconfont icon-weizhi itemCity"
        @click="back(item)"
         v-html="KeyRegExp(item,textvalue)"
      >
        <!-- {{item}} -->
      </div>
  </div>
</template>

<script>
import outercities from '../../../assets/json/outercities.json';
import innercities from '../../../assets/json/innercities.json';

export default {
  props:{
    textvalue:String,
    citielist:[],
  },
  data() {
    return {
      outercities,
      innercities,
      showData1:[]
    }
  },
  methods: {
    back(item) {
      this.$store.commit({
          type:'changeCity',
          location:item
      })
      this.$router.go(-1)
    },
    KeyRegExp:function(val, keyword) {
        val = val + '';
        if (val.indexOf(keyword) !== -1 && keyword !== '') {
            return val.replace(keyword, '<span style="color:#000000;font-weight:bold">' + keyword + '</span>')
        } else {
            return val
        }
    },
  },
  created() {
    this.outercities.city.filter((item,index) => {
      item.lists.filter((item,index) => {
        item.clists.map((item,index) => {
          if(this.textvalue!==''&&item.indexOf(this.textvalue)!==-1){
            this.showData1.push(item)
          }
        })
      })
    })
    this.innercities.city.filter((item,index) => {
      item.lists.map((item,index) => {
        if(this.textvalue!==''&&item.indexOf(this.textvalue)!==-1){
            this.showData1.push(item)
          }
      })
    })
  }
}

</script>

<style scoped>
#text-cities {
  background-color: #fff;
  padding: 10px;
}
.itemCity {
  border-bottom: 1px solid #f2f2f2;
  color: #8a8585;
  padding: 10px;
  font-size: 15px;
}
.search{
  color:aqua;
}
</style>