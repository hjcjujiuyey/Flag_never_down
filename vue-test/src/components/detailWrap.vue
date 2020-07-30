<template>
  <div >
		<h2>Flag详细信息</h2>

		<!-- 详情概述 -->
		<div class="content">
			<p>这是flag的概述</p>
		</div>

		<!-- 进度条组件 -->
		<div class="process">
			<p>目前的进度</p>
			<van-progress :percentage="percentage_process" />
		</div>

		<!-- 倒计时组件 -->
		<div class="CountDown ">
			<p>剩余的时间</p>
			<van-count-down :time="time">
				<template v-slot="timeData">
					<span class="block">{{ timeData.hours }}</span>
					<span class="colon">:</span>
					<span class="block">{{ timeData.minutes }}</span>
					<span class="colon">:</span>
					<span class="block">{{ timeData.seconds }}</span>
				</template>
			</van-count-down>
		</div>


		<!-- success -->
		<div class="success">
			<van-button type="primary"  @click="successBtn">成功的奖励</van-button>
		</div>

		<!-- failure -->
		<div class="failure">
			<van-button type="warning"  @click="failureBtn">失败的惩罚</van-button>
		</div>

		<!-- footer组件 -->
		<footer_bar></footer_bar>  

  </div>
</template>

<script>
import footer_bar from './footer_bar'
import { Dialog } from 'vant';

export default {
  name: 'detailWrap',
  data(){
		return{
			active:'',
			percentage_process:70,
			time: 30 * 60 * 60 * 1000,
			
		}
  },
	components:{footer_bar},
	methods:{
		// 返回首页按钮
		onClickLeft(){
			// 这里有一个bug是返回首页，footer的跳转
			this.$router.push('/')
		},
		// 修改按钮
		onClickRight(){

		},
		// 成功按钮
		successBtn(){
			Dialog.alert({
				title: '奖励',
				message: '喝可乐',
			}).then(() => {
				// on close
			});
		},
		// 失败按钮
		failureBtn(){
			Dialog.alert({
				title: '惩罚',
				message: '爷是废物怎么了,惩罚个屁',
			}).then(() => {
				// on close
			});
		},
		
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
	width: 100%;
	height: 250px;
	background-color: dodgerblue;
	color: white;
	margin-bottom: 5%;
}
.process{
	margin-bottom: 5%;
}

.CountDown{
	margin-bottom: 10%;
}

.success, .failure{
	margin-bottom: 5%;
}

.colon {
	display: inline-block;
	margin: 0 4px;
	color: dodgerblue;
}
.block {
	display: inline-block;
	width: 22px;
	color: #fff;
	font-size: 12px;
	text-align: center;
	background-color: dodgerblue;
}
</style>
