<template>
    <div>
	    <header class="container">
			<div class="row">
				<div class="row-left">
					<div id="logo"><img src="images/logo.png" /></div>
				</div>
				<router-link to="/cart" class="row-right">
					<div class="cart">
						购物车
						<span v-if="countCart.length">{{ countCart.length }}</span>
					</div>
				</router-link>
			</div>
		</header>
		<nav>
			<ul>
				<li><router-link class="nav-text" to="/home"><span>首页</span></router-link></li>
				<li><router-link class="nav-text" to="/phone"><span>手机</span></router-link></li>
				<li><router-link class="nav-text" to="/home"><span>关于</span></router-link></li>
				<li><router-link class="nav-text" to="/home"><span>客服</span></router-link></li>
			</ul>
		</nav>
		<div>
			<router-view></router-view>
		</div>
     	 <footer>
			<div class="copyright">
				Copyright &copy; 2015.Company name All rights reserved.
			</div>
		</footer>
    </div>
</template>
<script>
    export default {
    	computed:{
    		countCart(){
    			return this.$store.state.cartList;
    		}
    	}
    }
</script>