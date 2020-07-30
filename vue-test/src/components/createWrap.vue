<template>
	<div> 
		{{msg}}

		<!-- footer组件 -->
		<footer_bar></footer_bar>  
	</div>
</template>

<script>
import footer_bar from './footer_bar'

export default {
	name:'createWrap',
	data(){
		return{
			msg:'createWrap',
			
		}
	},
	components:{footer_bar},
	methods:{
		
	}

}
</script>

