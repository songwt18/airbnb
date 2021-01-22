<template>
  <div id="outer-cities">
      <div 
        class="outer"
      >
        <div class="outer-left">
            <div 
            v-for="(item,index) in outercities.city"
            :key = index
            >
                <div 
                    class="left-item" 
                    :class="currentLeftIndex===index?'left-active':''"
                    @click="leftClick(index)"
                >{{item.title}}</div>
            </div>
        </div>
        <scroll 
        class="wrappers outer-right" 
        :probe-type='3' 
        @scroll="contentScroll" 
        :scrolltop=scrolltop
        :listenScroll="listenScroll"
        >
            <div >
                <div
                    v-for="(item,index) in outercities.city"
                    :key = index
                    class="right-card"
                    ref="rightcard"
                >
                        <div 
                            v-for="(item1,index1) in item.lists"
                            :key = index1
                            class="card-item"
                        >
                        <div class="card-title">{{item1.ctitle}}</div>
                        <div class="card-content">
                            <div class="content-item"
                                v-for="item2 in item1.clists"
                                :key = item2
                                @click="contentClick(item2)"
                            >
                                {{item2}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="add-content"></div>
            </div>
        </scroll>
      </div>
  </div>
</template>

<script>
import outercities from '../../../assets/json/outercities.json';
import Scroll from 'components/common/betterscroll/Scroll'
export default {
    data() {
        return {
            outercities,
            currentLeftIndex: 0,
            scrolltop:0,
            position:-1,
            topLlist:[0],
            listenScroll:true
        }
    },
    created() {
    },
    mounted(){
        let h = 0
        let list = this.$refs.rightcard
        list.forEach((item, i) => {
            h += list[i].clientHeight
            this.topLlist.push(h)
        })
         console.log(this.topLlist)
    },
    computed: {

    },
    components: {
         Scroll
    },
    methods: {
        leftClick(index) {
            this.currentLeftIndex = index
            this.scrolltop = this.$refs.rightcard[this.currentLeftIndex].offsetTop
        },
        contentScroll(position){
            this.position = position.y
                this.topLlist.forEach((item,index) => {
                    
            }) 
            // console.log(this.position)
        },
        contentClick(item2){
            console.log(item2)
            this.$store.commit({
                type:'changeCity',
                location:item2
            })
            this.$router.push('/home')
        }
    },
    updated(){
       
    },
    watch: {
    position (newy) {
      if (newy >= 0) this.currentLeftIndex = 0
      let topLlist = this.topLlist
      for (let i = 0; i < topLlist.length-1; i++) {
        let h1 = topLlist[i]
        let h2 = topLlist[i + 1]
        if (-newy >= h1 && -newy < h2) {
          this.currentLeftIndex = i
          return
        }
      }
    }
  }

}
</script>

<style scoped>
#outer-cities {
    height: 74vh;
}
.wrappers {
    height: 74vh;
    overflow: hidden;
}
.outer {
    display: flex;
}
.outer-left {
    flex: 2;
    background-color: #ebebeb;
}
.left-item {
    color: #000000;
    font-size: 14px;
    font-weight: 550;
    text-align: center;
    padding-top: 15px;
    height: 38px;
}
.outer-right {
    flex: 5;
}
.right-card {
    background-color: #fff;
    padding: 10px;
    border-bottom: 10px solid #ebebeb;
}
.card-item {
    margin-bottom: 10px;
}
.card-title {
    font-size: 16px;
    margin-left: 5px;
    margin-bottom: 5px;
}
.card-content {
    color:#333333;
}
.content-item {
    border: 1px solid #ebebeb;
    display: inline-block;
    border-radius: 5px;
    margin: 5px;
    padding: 3px;
    font-size: 14px;
}
.add-content {
    height: 5px;
    background-color: #fff;
}
.left-active {
    background-color: #fff;
    color: #008489;;
}
</style>