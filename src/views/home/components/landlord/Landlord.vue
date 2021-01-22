<template>
    <div class="landlord">
      <p class="p1">上海房东直降优惠</p>
      <p class="p2">房东直接让利，更多超值选择</p>
      <div class="lordhouse">
          <div class="house-left">
              <div class="house1">1</div>
          </div>
          <div class="house-right">
              <div class="house2">2</div>
              <div class="house3">3</div>
          </div>
      </div>
    </div>
  
</template>

<script>
export default {

}
</script>

<style scoped>
    .landlord{
        margin: 15px;
        margin-top: 30px;
        background-color: #ffffff;
    }
    .p1 {
        font-size: 16px;
        font-weight: bold;
    }
    .p2 {
        font-size: 15px;
    }
    .lordhouse {
        height: 150px;
        background-color: rosybrown;
        display: flex;
        justify-content: space-between;
    }
    .house-left {
        flex: 1;
        margin-right: 3px;
    }
    .house1 {
        height: 150px;
        border-radius: 10px;
        background-color: blue;
    }
    .house-right {
        flex: 1;
        display: flex;
        flex-flow: wrap;
        flex-direction: column;
        margin-left: 2px;
    }
    .house2,.house3 {
        flex: 1;
        border-radius: 10px;
        background-color: #fff;
        height: 70px;

    }
    .house2 {
        margin-bottom: 5px;
    }
    
</style>