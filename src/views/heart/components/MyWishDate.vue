<template>
    <div>
		<div
      class="mytitle"
    >请选择您的日期</div>
		<div class="wrap">
			<div class="switch">
				<div class="back" @click='back'>&lt;</div>
				<div class="forward" @click='forward'>&gt;</div>
			</div>
			<div>
				<div v-for='(items, index) in months' :key="index">
					<div v-if="index == monthIndex">
            <!-- 引入子组件 -->
						<month :monthName='items' :year='year' :monthIndex='index' :key='index' :day='day'></month>
					</div>
				</div>
			</div>
		</div>
		<div class="confirm-wrap">
			<button @click="goback" class="confirm">确认</button>
		</div>
    </div>
</template>


<script>
	import Month from './month/Moth'
	export default {
    name: 'MyWishDate',
    data(){
      return {
        isChecked: true
      }
    },
	  components:{
	  	Month,
	  },
	  mounted () {
	  	let myDate = new Date();
	  	this.monthIndex = myDate.getMonth();
	  	this.year = myDate.getFullYear();
	  	this.day = myDate.getDate() - 1;
	  },
	  data () {
	    return {
	    	monthIndex: 0,
	    	months:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	    	year:-1,
	    	day:-1,
	    }
	  },
	  methods:{
		goback(){
			this.$router.go(-1)
		},


		back () {
			if (!this.monthIndex) {
				this.monthIndex = 11;
				this.year = this.year - 1;
			} else {
				this.monthIndex = this.monthIndex - 1;
			}
		},
		forward() {
			if (this.monthIndex == 11) {
					this.monthIndex = 0;
					this.year = this.year + 1;
				} else {
					this.monthIndex = this.monthIndex + 1;
				}
			}
	},
	}

</script>

<style scoped>
.wrap{
	position: relative;
    padding: 20px;
    display: flex;
    justify-content: center;
}
.wrap .switch{
	top: 4rem;
	left: 13rem;
	font-weight: 700;
	position: absolute;
	display: flex;
	color: rgb(61, 90, 81);
	font-size: 1.5rem;


}
.wrap .switch .forward{
		margin-left: 1.5rem;
}
.mytitle{
	margin-top: 20px;
	margin-bottom: -40px;
	margin-left: 15px;
	color: rgb(61, 90, 81);
}
.confirm{
	border: 1px solid transparent;
	border-radius: 30px;
	width: 80px;
	height: 36px;
	color: rgb(61 90 81);
	font-weight: bold;
}
.confirm-wrap{
	text-align: right;
	padding-right: 30px;
}
</style>
