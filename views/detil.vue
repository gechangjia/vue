<template>
	<div class="main">
		<div class="til">
			<div class="til-left">
				<div class="til-contect">
					<h2 class="contect-til">{{ Phone.name }}</h2>
					<span class="context-sairy">{{ Phone.cost }}</span><br>
					<span class="add-goods" @click="goodsAddToCart">加入购物车</span>
				</div>
			</div>
			<div class="til-right">
				<div class="til-img">
					<img :src="'../'+Phone.image">
				</div>
			</div>
		</div>
		<div class="detil">
			<h2 class="decri">产品介绍</h2>
		</div>
	</div>
</template>
<script>
	import phoneData from '../phone.js';
	export default{
		data () {
			return{
				id: parseInt(this.$route.params.id),
				Phone: phoneData
			}
		},
		methods: {
			getPhone() {
				setTimeout(() => {
					this.Phone = phoneData.find( item => item.id === this.id );
				},20);
			},
			goodsAddToCart(){
				this.$store.commit('addCart',this.id);
			}
		},
		mounted () {
			this.getPhone();
		}
	}
</script>
<style scoped>
	.decri{
		width: 100%;
		text-align: center;
		padding: 30px;

	}
	.til-img img{
		height: 300px;
		width: 200px;
	}
	.til-img{
		margin: 20px 20px;
	}

	.til-contect{
		width: 50%;
		height:50%;
		margin: 20px auto;
		padding: 20px auto;
	}
	.main{
		width: 100%;
	}
	.til,.detil{
		border-radius: 5px;
		background-color: #fff;
		width: 80%;
		height: 400px;
		margin: 20px auto;

	}
	.til-left{
		width: 50%;
		float: left;
		height:100%;
		text-align: center;
	}
	.til-right{
		text-align: center;
		width: 50%;
		float: left;
		height:100%;
	}
	.contect-til{
		padding: 10px 10px;
	}
	.add-goods{
		display: inline-block;
		padding: 10px 10px;
		background-color: #9293DB;
		color:#fff;
		border-radius: 2px;
		cursor: pointer;
		margin-top: 20px;
	}
	.add-goods:hover{
		background-color: #D6D176;
	}
</style>