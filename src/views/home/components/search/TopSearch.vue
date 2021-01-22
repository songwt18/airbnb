<template>
  <div id="topsearch">
      <div class="search-content">
          <div class="content-item city" @click="tocity">{{location}}</div>
           <div v-if="haveDate" class="content-item date" @click="todate">请选择日期</div>
          <div v-else class="content-item date" @click="todate">{{startdate}}-{{enddate}}</div>
          <div class="content-item input" @click="tosearch">景点/地址/房源名</div>
          <div class="content-item iconfont icon-search"  @click="tosearch"></div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'TopSearch',
    data() {
        return {
            location:'天津市',
            startdate:'',
            enddate:'',
        }
    },
    mounted(){
        if(this.$store.state.location!==''){
            this.location = this.$store.state.location
        }
        this.startdate = this.$store.state.startdate
        this.enddate = this.$store.state.enddate
    },
    methods: {
        tocity(){
            this.$router.push('/selectcity')
        },
        todate(){
            this.$router.push('/selectdate')
        },
        tosearch(){
            this.$router.push('/searchcard')
        }
    },
    computed: {
        haveDate() {
            if(this.startdate!==''){
                return false
            }else{
                return true
            }
        }
    }
}
</script>

<style scoped>
#topsearch {
    background-color: #ffffff;
    padding: 10px;
    /* position: relative;
    z-index: 9; */
}
.search-content {
    background-color: #ffffff;
    display: flex;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 0 0 3px 2px rgba(100,100,100,.2);
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    text-align: center;
}
.city {
    flex: 2;
    margin-left: 2px;
    border-right: 1px solid #ebebeb;
    color: #008489;
    font-size: 14px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.date {
    flex: 6;
    color: #008489;
    margin-left: 3px;
    border-right: 1px solid #ebebeb;
    font-size: 14px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.input {
    flex: 4;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    color: #717171;
}
.iconfont {
    flex: 2;
    font-size:20px;
    color: #008489;
    font-weight: bold;
}
</style>