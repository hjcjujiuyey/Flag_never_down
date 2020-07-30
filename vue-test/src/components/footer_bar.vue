<template>
	<div> 
		<!-- footer组件 -->
    <van-tabbar v-model="footer_active"  @change="onChange">
      <van-tabbar-item to='/' icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item to='/detailWrap' icon="search">详情</van-tabbar-item>
      <van-tabbar-item to='/createWrap' icon="add-o">生成</van-tabbar-item>
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
			footer_active:0
		}
	},
	mounted(){
		let _n = localStorage.getItem('save_inx');
		this.footer_active = Number( _n );
	},
	methods:{
		onChange(_index) {
			localStorage.setItem('save_inx', _index);
		},
	}

}
</script>

