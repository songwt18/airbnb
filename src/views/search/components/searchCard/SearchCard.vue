<template>
  <div id="search-card">
      <div class="search-input">
        <div class="input">
          <div class="icon iconfont icon-search1"></div>
          <div class="city">{{location}}</div>
          <!--  <div class="city">上海市</div> -->
          <div class="search">
            <input type="text" placeholder="景点/地址/房源名" v-model="inputText">
          </div>
        </div>
        <div class="cancel" @click="cancel" v-show="!haveText">取消</div>
        <div class="cancel" @click="search" v-show="haveText">搜索</div>
      </div>
      <div class="white"></div>
      <history v-if="haveHistory"></history>
      <search-condition></search-condition>
  </div>
</template>

<script>
import History from './History'
import SearchCondition from './SearchCondition'
export default {
  methods: {
    cancel() {
      this.$router.go(-1)
    },
    search() {
      this.$store.commit({
        type:'changeSearch',
        search:this.inputText
      })
      this.inputText=''
      
      // var list = JSON.parse(localStorage.getItem("text"||'[]'))
      // list.unshift(this.inputText)
      // console.log(list)
      // localStorage.setItem("text",JSON.stringify(list))
      this.$router.go(-1)
    }
  },
  mounted() {
    this.location = this.$store.state.location
  },
  components: {
    History,
    SearchCondition
  },
  data() {
    return {
      inputText:'',
      haveHistory: true,
      location:'天津市'
    }
  },
  computed: {
    haveText() {
      if(this.inputText!==''){
        return true
      }else{
        return false
      }
    }
  }
}
</script>

<style scoped>
#search-card {
  position: relative;
  background-color: #fff;
  height: 100vh;
  z-index: 99;
}
.search-input {
  display: flex;
  height: 49px;
  border-bottom: 1px solid  #f2f2f2;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: #fff;
  z-index: 999;
}
.search-input .input {
  flex: 5;
  background-color: #ebebeb;
  margin: 10px;
  border-radius: 10px;
  display: flex;
  font-size: 14px;
  line-height: 29px;
}
.input .icon {
  flex: 1;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  padding-left: 5px;
}
.input .city {
  flex: 2;
  color: #008489;
  text-align: center;
}
.input .search {
  flex: 5;
  color: #888;
  border-left: 1px solid #fff;
  padding-left: 5px;
}
.white {
  height: 49px;
}
.search input {
  background:none;  
	outline:none;  
	border:none;
  width: 80%;
}
.search-input .cancel {
  flex: 1;
  line-height: 49px;
  font-size: 14px;
  color: #888888;
  font-weight: bold;
}
</style>