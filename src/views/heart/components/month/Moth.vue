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
					<div v-for="(item, index) in days" :key='index' class="dayIndex" @click='choose(index)' :class="{choose: chooseIndex == index}">
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
