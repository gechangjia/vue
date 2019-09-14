<template>
	<div class="main">
		<div class="main-cart">
			<div class="cart-header">
				<div class="cart-header-til">
					购物清单
				</div>
				<div class="cart-header-main">
					<div class="cart-info">商品信息</div>
					<div class="cart-sapn">单价</div>
					<div class="cart-sapn">数量</div>
					<div class="cart-sapn">小计</div>
					<div class="cart-sapn">操作</div>
				</div>
			</div>
			<div class="cart-context" v-for="(item,index) in cartList">
				<div class="cart-name">
					<span>{{ phoneDictList[item.id].name }}</span>
				</div>
				<div class="cart-context-span">
					￥{{phoneDictList[item.id].cost}}
				</div>
				<div class="cart-context-span">
					<span class="reduce" @click="changeCount(index,-1)">-</span>
					   {{item.count}}
					<span class="add" @click="changeCount(index,1)">+</span>
				</div>
				<div class="cart-context-span">
					￥{{ phoneDictList[item.id].cost*item.count }}
				</div>
				<div class="cart-context-span">
					<span class="del" @click="delGoods(index,1)">删除</span>
				</div>
			</div>
			<div v-if="!cartList.length" class="cart-empy">购物车为空</div>
			<div class="cart-sum">
				<div class="cart-sum-text">
					共计
					<span>{{ goodsAllSum }}</span>
					件商品
				</div>
				<div class="cart-sum-text">
					总额
					<span>{{ costAll }}</span>
				</div>
				<div class="cart-sum-text">
					<div class="cart-sure">
						现在结算
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import phone_data from '../phone.js';
	export default{
		computed:{
			costAll(){
				let cost=0;
				this.cartList.forEach(item =>{
					cost += this.phoneDictList[item.id].cost*item.count;
				});
				return cost;
			},
			goodsAllSum(){
				let count=0;
				this.cartList.forEach(item=>{
					count+=item.count;
				})
				return count;
			},
			cartList(){
				return this.$store.state.cartList;
			},
			phoneDictList(){
				const dict={};
				this.phoneList.forEach(item =>{
					dict[item.id]=item;
				});
				return dict;
			}
		},
		data (){
			return{
				phoneList:phone_data
			}
		},
		methods:{
			delGoods(index) {
				this.$store.commit('delCart',this.cartList[index].id);
			},
			changeCount(index,count){
				if(count<0 && this.cartList[index].count===1) return;
				this.$store.commit('changeCount',{
					id:this.cartList[index].id,
					count:count
				})
			}
		}
	}
</script>
<style scoped>
	.cart-empy{
		padding: 40px;
		text-align: center;
		font-size:30px;
		color: #B3A8A8;
	}
	.del{
		padding: 5px 10px;
		background-color:#96AEF1;
		color: #fff;
		border-radius: 2px;
		cursor: pointer;
		font-size: 12px;
	}
	.reduce,.add{
		display: inline-block;
		width: 25px;
		height:25px;
		line-height: 25px;
		background-color:#F9F7F7;
		border-radius: 50%;
		cursor: pointer;
		box-shadow: 0 1px 1px #D8D0D0;

	}
	.cart-name{
		width: 60%;
		float: left;
	}
	.cart-context-span{
		width: 10%;
		float: left;
		text-align: center;
	}
	.cart-context{
		height: 60px;
		line-height: 60px;
		padding: 0 30px;
		border-bottom: 1px dashed #e9eaec;
	}
	.cart-sure{
		background-color: #859AE4;
		color: #fff;
		padding: 5px 10px;
		border-radius: 2px;
		cursor: pointer;
	}
	.cart-sum-text{
		display: inline-block;
		padding: 0 15px;
	}
	.cart-sum-text span{
		color: #f2352e;
		font-size: 20px;
	}
	.cart-sum{
		padding: 30px;
		text-align: right;
	}
	.cart-info{
		width: 60%;
		font-size: 14px;
		text-align: left;
		float: left;
	}
	.cart-sapn{
		float: left;
		width: 10%;
		text-align:center;
		font-size: 14px;
	}
	.main{
		width: 100%;
	}
	.main-cart{
		margin: 30px;
		background-color: #fff;
		border-radius: 5px;
		border: 1px solid #dddee1;
	}
	.cart-header-til{
		padding: 16px 32px;
		border-bottom: 1px solid #dddee1;
		border-radius: 10px 10px 0 0;
		background: #f8f8f9;
	}
	.cart-header-main{
	    padding: 8px 32px;
	    overflow: hidden;
	    border-bottom: 1px solid #dddee1;
	    background: #eee;
	}
</style>