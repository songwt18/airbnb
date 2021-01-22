<template>
  <div id="bullet-base" @touchmove.prevent >
      <div class="base-nav">
          <div class="nav-close" @click="clickClose">×</div>
          <div class="nav-clear" @click="clickClear">清除</div>
      </div>
      <div class="base-title">位置</div>
      <div class="base-content">
          <div class="bullet-location">
              <div class="location-left">
                  <div
                    v-for="(item,index) in locationData" 
                    :key="index"
                    class="locationitem"
                    :class="{'itemactive':currentIndex===index}"
                    @click="locationitemclick(index,item)"
                  >
                    {{item.title}}
                  </div>
              </div>
              <scroll class="wrappers">
                    <div class="location-right">
                        <div
                        v-for="(item,index) in locationData[currentIndex].local"
                        :key="index"
                        class="rightitem"
                        :class="{'rightitemactive':currentDescIndex===index}"
                        @click="locationrightitemclick(index,item.name)"
                        >
                            <!-- {{item}} -->
                            <span class="itemname">{{item.name}}</span><span class="itemdesc"> {{item.desc}}</span>
                        </div>
                    </div>
              </scroll>
          </div>
      </div>
      <div class="base-btn">
          <div class="btn" @click="clickClose">显示超过{{houseNum}}个住宿</div>
      </div>
  </div>
</template>

<script>
import Scroll from 'components/common/betterscroll/Scroll'
export default {
    name:'BulletBase',
    components: {
        Scroll
    },
    data(){
        return {
            checkLocation:'',
            currentIndex:0,
            currentDescIndex: -1,
            houseNum:300,
            locationData: [
                { 
                    title:'热门',
                    local:[
                        {
                        name:'上海新天地',
                        desc:'14%房客选择'
                        },
                        {
                        name:'田子坊',
                        desc:'9%房客选择'
                        },
                        {
                        name:'外滩',
                        desc:''
                        },
                        {
                        name:'陆家嘴',
                        desc:''
                        },
                        {
                        name:'上海迪士尼乐园',
                        desc:''
                        },
                        {
                        name:'虹桥火车站',
                        desc:''
                        },

                        {
                        name:'静安寺/南京西路',
                        desc:''
                        },
                        {
                        name:'人民广场',
                        desc:''
                        }
                    ]
                },
                { 
                    title:'景点',
                    local:[
                        {
                        name:'静安寺',
                        desc:'10%房客选择'
                        },
                        {
                        name:'南京步行路',
                        desc:'9%房客选择'
                        },
                        {
                        name:'东方明珠电视塔',
                        desc:''
                        },
                        {
                        name:'老城隍庙',
                        desc:''
                        },
                        {
                        name:'陆家嘴',
                        desc:''
                        },
                        {
                        name:'七宝老街',
                        desc:''
                        },

                        {
                        name:'上海中心大厦',
                        desc:''
                        },
                        {
                        name:'上海迪士尼乐园',
                        desc:''
                        },
                        {
                        name:'上海野生动物园',
                        desc:''
                        },
                        {
                        name:'朱家角古镇',
                        desc:''
                        },
                        {
                        name:'豫园',
                        desc:''
                        },
                        {
                        name:'中山公园',
                        desc:''
                        },
                        {
                        name:'徐家汇',
                        desc:''
                        }
                    ]
                },
                { 
                    title:'地铁',
                    local:[
                        {
                        name:'1号线',
                        desc:''
                        },
                        {
                        name:'2号线',
                        desc:''
                        },
                        {
                        name:'2号线东延伸段',
                        desc:''
                        },
                        {
                        name:'3号线',
                        desc:''
                        },
                        {
                        name:'4号线',
                        desc:''
                        },
                        {
                        name:'5号线(东川路-闵行)',
                        desc:''
                        },

                        {
                        name:'5号线(莘庄-奉贤新)',
                        desc:''
                        },
                        {
                        name:'6号线',
                        desc:''
                        },
                        {
                        name:'7号线',
                        desc:''
                        },
                        {
                        name:'8号线',
                        desc:''
                        },
                        {
                        name:'9号线',
                        desc:''
                        },
                        {
                        name:'10号线(虹桥火车)',
                        desc:''
                        },
                        {
                        name:'10号线(航中路-新江)',
                        desc:''
                        },
                        {
                        name:'11号线(花桥-迪士尼)',
                        desc:''
                        },
                        {
                        name:'12号线',
                        desc:''
                        },
                        {
                        name:'13号线',
                        desc:''
                        },
                        {
                        name:'16号线',
                        desc:''
                        },
                        {
                        name:'17号线',
                        desc:''
                        },
                        {
                        name:'浦江路',
                        desc:''
                        },
                        {
                        name:'磁悬浮',
                        desc:''
                        }
                    ]
                },
                { 
                    title:'商圈',
                    local:[
                        {
                        name:'陆家嘴-张杨路',
                        desc:''
                        },
                        {
                        name:'南京东路',
                        desc:''
                        },
                        {
                        name:'淮海中路',
                        desc:''
                        },
                        {
                        name:'南京西路',
                        desc:''
                        },

                        {
                        name:'新虹桥天山',
                        desc:''
                        },
                        {
                        name:'四川北路',
                        desc:''
                        },
                         {
                        name:'五角场',
                        desc:''
                        },
                         {
                        name:'大宁',
                        desc:''
                        }
                    ]
                },
                { 
                    title:'热门',
                    local:[
                        {
                        name:'上海新天地',
                        desc:'14%房客选择'
                        },
                        {
                        name:'田子坊',
                        desc:'9%房客选择'
                        },
                        {
                        name:'外滩',
                        desc:''
                        },
                        {
                        name:'陆家嘴',
                        desc:''
                        },
                        {
                        name:'上海迪士尼乐园',
                        desc:''
                        },
                        {
                        name:'虹桥火车站',
                        desc:''
                        },

                        {
                        name:'静安寺/南京西路',
                        desc:''
                        },
                        {
                        name:'人民广场',
                        desc:''
                        }
                    ]
                },
                { 
                    title:'高校',
                    local:[
                        {
                        name:'华东大学',
                        desc:''
                        },
                        {
                        name:'复旦大学',
                        desc:''
                        },
                        {
                        name:'华东师范大学',
                        desc:''
                        },
                        {
                        name:'华东理工大学',
                        desc:''
                        },
                        {
                        name:'上海迪士尼乐园',
                        desc:''
                        },
                        {
                        name:'上海音乐学院',
                        desc:''
                        },
                        {
                        name:'上海戏剧学院',
                        desc:''
                        },
                        {
                        name:'上海纽约大学',
                        desc:''
                        },
                        {
                        name:'上海财经学院',
                        desc:''
                        },
                        {
                        name:'上海体育学院',
                        desc:''
                        }
                    ]
                },
                { 
                    title:'机场/火车站',
                    local:[
                        {
                        name:'上海火车站',
                        desc:''
                        },
                        {
                        name:'上海南站',
                        desc:''
                        },
                        {
                        name:'虹桥国际机场',
                        desc:''
                        },
                        {
                        name:'南翔北站',
                        desc:''
                        },
                        {
                        name:'松翔北站',
                        desc:''
                        },
                        {
                        name:'浦东国家机场',
                        desc:''
                        },

                        {
                        name:'闵行站',
                        desc:''
                        },
                        {
                        name:'桃浦站',
                        desc:''
                        }
                    ]
                },
                { 
                    title:'周边游',
                    local:[
                        {
                        name:'上海博物馆',
                        desc:''
                        },
                        {
                        name:'上海迪士尼度假区',
                        desc:''
                        },
                        {
                        name:'上海薰衣草公园',
                        desc:''
                        },
                        {
                        name:'上海欢乐谷',
                        desc:''
                        },
                        {
                        name:'上海辰山植物园',
                        desc:''
                        },
                        {
                        name:'上海大观园',
                        desc:''
                        }
                    ]
                },
                { 
                    title:'行政区',
                    local:[
                        {
                        name:'黄浦区',
                        desc:''
                        },
                        {
                        name:'徐汇区',
                        desc:''
                        },
                        {
                        name:'长汇区',
                        desc:''
                        },
                        {
                        name:'虹口区',
                        desc:''
                        },
                        {
                        name:'杨浦区',
                        desc:''
                        },
                        {
                        name:'浦东新区',
                        desc:''
                        }
                    ]
                },
            ]
        }
    },
    methods: {
        clickClose(){
            // console.log('clickClose',this.peopleNums,this.infantNum)
            this.$emit('clickCloselocation',this.checkLocation)
        },
        clickClear(){
            // console.log('clickClear')
            this.currentDescIndex = -1
            this.currentIndex = 0
        },
        locationitemclick(index,item){
            // console.log(item)
            this.currentIndex = index
        },
        locationrightitemclick(index,item){
            // console.log(index)
            this.currentDescIndex = index
            this.checkLocation = item
            // console.log(item)
        }
    }
    
}
</script>

<style scoped>
#bullet-base{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #ffffff;
    height: 633px;
    z-index: 999;
    box-sizing: content-box;
    /* padding: 10px; */
    /* display: none; */
}
.base-nav {
    height: 10%;
    width: 100%;
    /* background-color: red; */
    display: flex;
    font-size: 14px;
}
.base-nav .nav-close{
    text-align: left;
    flex: 1;
    color: #333333;
    font-size: 26px;
     box-sizing: content-box;
    padding: 10px;
}
.base-nav .nav-clear{
    flex: 1;
    text-align: right;
    color: #333333;
     box-sizing: content-box;
    padding: 10px;
}
.base-title {
     box-sizing: content-box;
    padding: 10px;
    height: 10%;
    width: 100%;
    color: #333333;
    font-size: 16px;
    text-align-last: left;
    /* background-color: blanchedalmond; */
}
.base-btn {
    height: 10%;
    /* background-color: #008489; */
    border-top: 1px solid #ebebeb;
}
.base-btn .btn {
    text-align: center;
    height: 35px;
    line-height: 35px;
    margin: 7px;
    border-radius: 5px;
    color: #ffffff;
    background-color: #008489;
}
.base-content {
    height: 60%;
    /* background-color: #656981; */
}
.base-content .bullet-location{
    border-top: 1px solid #ebebeb;
    display: flex;
    height: 100%;
}
.bullet-location .location-left {
    flex: 2;
    background-color: red;
    height: 100%;
}
.bullet-location .location-right {
    /* flex: 5; */
    /* background-color: aqua; */
    height: 100%;
}
.locationitem {
    background: #ebebeb;
    font-size: 14px;
    height: 11.1%;
}
.itemactive {
    color: #008489;
    background-color: #fff;
}
.rightitem {
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #ebebeb;
}
.itemname {
    font-size: 15px;
}
.itemdesc {
    font-size: 12px;
    color: #717171;
}
.wrappers {
    height: 65vh;
     flex: 5;
     overflow: hidden;
     /* background-color: red; */
}
.rightitemactive {
    color: #008489;
}
</style>