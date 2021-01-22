<template>
  <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions" class="swiper">
    <swiper-slide class="swiper-item">
      <img src="https://z1.muscache.cn/pictures/carson/carson-1599625485291/original/efb10344-afff-4d49-abc1-42c57b981551.jpg" alt="">
    </swiper-slide>
    <swiper-slide class="swiper-item">
      <img src="https://z1.muscache.cn/pictures/carson/carson-1600270847958/original/822f6aa6-3465-4e8b-b522-82aec0f05985.jpg" alt="">
    </swiper-slide>
    <swiper-slide class="swiper-item">
      <img src="https://z1.muscache.cn/pictures/carson/carson-1601197139396/original/97c4b7bf-687b-4445-b54b-00eadce1118a.jpg" alt="">
    </swiper-slide>
    <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOptions: {
            autoplay: true,
            loop:true,
            // pagination: {
            //     el: '.swiper-pagination',
            // },
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.swiper)
    //   this.swiper.slideTo(3, 1000, false)
    }
  }
</script>

<style scoped>
.wrapper {
  position: relative;
  width: 100%;
  height: 234px;
}
.swiper {
    width: 100%;
    height: 234px;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
}
.swiper-item {
    width: 100%;
    height: 100%;
    background-color: #717171;
}
.swiper-item img {
  width: 100%;
  height: 100%;
}
</style>