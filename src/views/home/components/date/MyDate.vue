<template>
    <div id="mydate">
		<div class="mytitle">
			<div class="back-title iconfont icon-fanhui" @click="goto"></div>
			<div  v-if='!isHaveDate' class="text">
				请选择您的日期
			</div>
			<div v-else class="text">{{startdate}}-{{enddate}}</div>
		</div>
		<div class="wrap">
			<div class="switch">
				<div class="back" @click='back'>&lt;</div>
				<div class="forward" @click='forward'>&gt;</div>
			</div>
			<div>
				<div v-for='(items, index) in months' :key="index">
					<div v-if="index == monthIndex">
						<month 
							:monthName='items' 
							:year='year' 
							:monthIndex='index' 
							:key='index' 
							:day='day'
							@getDate = 'getDate'
						>
						</month>
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
	import Month from 'components/month/Moth'
	export default {
	  name: 'MyDate',
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
	    	months:['1','2','3','4','5','6','7','8','9','10','11','12'],
	    	year:-1,
			day:-1,
			isHaveDate: false,
			newYear:0,
			newMonth:0,
			newDate:0,
			newMonths:0,
			newDates:0,
	    }
	  },
	  computed:{
			startdate() {
				if(this.newMonth!==0){
					return  this.newMonth + '月' + this.newDate + '日'
				}
			},
			enddate() {
				if(this.newYear === 0 || this.newMonths === 0 || this.newDates === 0){
					return '结束日期'
				}else{
					return this.newMonths + '月' + this.newDates + '日'
				}
			}
	  },
	  methods:{
		goto() {
			this.$router.go(-1)
		},
		getDate(year,month,date){
			if(this.newYear === 0 || this.newMonth === 0 || this.newDate === 0){
				this.newYear = year
				this.newMonth = month-0
				this.newDate = date-0
			}else{
				this.newYear = year
				this.newMonths = month-0
				this.newDates = date-0
			}
			// console.log(year,month,date)
			if(year === 0 || month === 0 || date === 0){
				this.isHaveDate = false
			}else{
				this.isHaveDate = true
			}

			// if(month > this.newMonth || date > this.newDate){
			// 	this.newMonths = month
			// 	this.newDates = date
			// }else{
				
			// }
		},
		goback(){
			if(this.isHaveDate){
				this.$store.commit({
				type:'changeDate',
				startdate:this.startdate,
				enddate:this.enddate
			})
			}
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
#mydate {
	background-color: #fff;
	height: 100vh;
	position: relative;
	z-index: 999;
}
.wrap{
    padding: 20px;
    display: flex;
    justify-content: center;
	position: relative;
}
.wrap .switch{
	top: 2.5rem;
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
	color: #000;
	font-weight: bold;
	border-bottom: 1px solid #ebebeb;
	height: 49px;
	display: flex;
}
.back-title {
	flex: 1;
	text-align: center;
	font-size: 24px;
	line-height: 45px;
}
.text {
	flex: 6;
	line-height: 49px;
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