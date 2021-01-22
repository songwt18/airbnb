<template>
  <div id="inner-cities">
      <div 
       class="letter-item"
       v-for="(item,index) in innercities.city"
       :key=index>
          <div class="item-title">{{item.title}}</div>
          <!-- {{item.lists}} -->
          <div class="item-desc" 
            v-for="(item1,index1) in item.lists"
            :key = index1
            @click="innerCityClick(item1)"
            >{{item1}}</div>
      </div>
  </div>
</template>

<script>
import innercities from '../../../assets/json/innercities.json';
export default {
    data() {
        return {
             innercities,
        }
    },
    methods: {
        innerCityClick(item1){
            // console.log(item1)
             this.$store.commit({
                type:'changeCity',
                location:item1
            })
            this.$router.push('/home')
        }
    }
}
</script>

<style scoped>
.item-title {
    height: 20px;
    background-color: #ebebeb;
    padding-left: 10px;
}
.item-desc {
    padding: 10px;
    font-size: 16px;
    border-bottom: 1px solid #ebebeb;
}
</style>
