<template>
	<div> 
		<!-- footer组件 -->
    <van-tabbar v-model="active"  @change="onChange">
      <van-tabbar-item icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search">详情</van-tabbar-item>
      <van-tabbar-item icon="add-o">生成</van-tabbar-item>
      <van-tabbar-item icon="coupon-o">统计</van-tabbar-item>
    </van-tabbar>
	</div>
</template>

<script>
export default {
	name:'footer_bar',
	data(){
		return{
			msg:'footer_bar 尾部',
			active:0
		}
	},
	methods:{
		onChange(_index) {
			// console.log( _index );
			// 这里用switch语句跳转路由
		},
	}

}
</script>

