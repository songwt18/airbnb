<template>
	<div>
		<div class="calendar-wrap">
			<div class="month">
				<div class="header">
					{{monthName}} {{year}}
				</div>
				<div class="week">
					<div v-for="item in week" :key="item" class="weekIndex">
						{{item}}
					</div>
				</div>
				<div class="day">
					<div v-for="(item, index) in days" :key='index' class="dayIndex" @click='choose(index,item)' :class="{choose: chooseIndex == index}">
						<div v-if="typeof(item) == 'string'">
							{{item}}
						</div>
						<div v-else class="setGrey">
							{{item[0]}}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'Month',
		data () {
			return {
				week: ['N', 'M', 'T', 'W', 'U', 'F', 'S',],
				month:['1','2','3','4','5','6','7','8','9','10','11','12'],
	    		days:[],
	    		monthLastDay:{
	    			0:31,
	    			1:28,
	    			2:31,
	    			3:30,
	    			4:31,
	    			5:30,
	    			6:31,
	    			7:31,
	    			8:30,
	    			9:31,
	    			10:30,
	    			11:31
	    		},
				chooseIndex: -1,
				leapyear: false,
				firstDayIndex: 0,
			}
		},
		// computed () {
		// 	chosen:{
		// 		return new Date().getMonth() == this.monthIndex
		// 	}
		// },
		methods:{
			choose(index,item) {
				this.chooseIndex = index;
				// console.log(this.year,this.monthName-0,item-0)
				this.$emit('getDate',this.year,this.monthName,item)
				// console.log(this.monthName)
			},
			judgeDays(){
				let lastMonthIndex = (this.monthIndex - 1) <= 0 ? 11 : this.monthIndex - 1;
				let lastDay = this.getMonthLastDay(this.year, lastMonthIndex);
				this.generateDays(lastDay, this.firstDayIndex);
			},
			getMonthLastDay (year, month){
				if (month != 1) {
					return this.monthLastDay[month];
				} else {
					if (this.leapyear) {
						return 29;
					} else {
						return 28;
					}
				}
			},
			generateDays (index, lastDayNum) {
				let k = 0;
				let temp = 1;
				//这个for循环是push上个月的剩余日期，
				for (let i = lastDayNum; i > 0; i--) {
					this.days.push([(index - i + 1).toString()]);
					k++;
				}
				index = 1;
				for (let i = 0; i < 42 - lastDayNum; i++) {
					//闰年二月
					if (this.leapyear) {
						if (index <= 29) {
							this.days.push(index.toString());
						}
					//非闰年月份
					} else if (index <= this.monthLastDay[this.monthIndex]) {
						this.days.push(index.toString());
						//这个else是push下个月的日期
					} else {
						this.days.push([temp.toString()]);
						temp++;
					}
					index++;
					k++;
				}
			},
			isLeapYear(){ 
				return ((0 == this.year%4&&(this.year%100!=0)||(this.year%400==0))); 
			}
		},
		mounted () {
			this.firstDayIndex = new Date(this.year + '/' + (this.monthIndex + 1) + '/' + '01').getDay();
			this.judgeDays();
			this.leapyear = this.isLeapYear();
			if (new Date().getMonth() == this.monthIndex) {
				this.chooseIndex = this.day + this.firstDayIndex;
			}
			
		},
		props:['monthName', 'monthIndex','year','day']
	}
</script>

<style scoped>
.calendar-wrap{
	font-weight: 600;
	margin: 0px auto;
}	
.choose {
	background-color: rgb(0 132 137 / 0.8);
	border-radius: 50%;
	color: white;
}
	
.header{
	color: rgb(61, 90, 81);
	padding: 1.5rem 0;
	font-size: 1.3rem;
}
.week{
	text-align: center;
	width: 15rem;
	color: rgb(91, 145, 140);
	font-size: 2em;
	
}
.weekIndex{
	display: inline-block;
	margin: .3rem;
	line-height: 1.5rem;
	height: 1.5rem;
	width: 1.5rem;
	font-size: 1.2rem;
}
.day{
	text-align: center;
	width: 15rem;
	}
.dayIndex{
	display: inline-block;
	margin: .3rem;
	line-height: 1.5rem;
	height: 1.5rem;
	width: 1.5rem;
	font-size: 0.9rem;
    }
.setGrey{
	color: grey;
	}
</style>