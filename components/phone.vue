<template>
	<div class="phone">
		<router-link class="ph-main" :to="'/detil/' + info.id">
			<div>
				<img :src="info.image">
			</div>
			<div>
				<h4>{{info.name}}</h4>
			</div>
			<div>
				<span>￥{{info.cost}}</span>
			</div>
		</router-link>
	</div>
</template>
<script>
	export default{
		props:{
			info:Object
		}
	}
</script>
<style scoped>
	.phone{
		float: left;
		width: 300px;
		height: 400px;
		text-align: center;
	}
	.phone:hover{
		background-color: #DFD1D1;
	}
	.ph-main{
		color: #000;
		margin: 25px auto;
	}
	.ph-main img{
		width: 170px;
		height:300px;
		margin: 10px 0;
	}
</style>