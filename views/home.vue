<template>
	<div>
		<div class="container">
			<div class="container-1">
				<div class="row">
					<img src="../images/sub-banner1.png">
				</div>
				<div class="row">
					<img src="../images/sub-banner2.png">
				</div>
				<div class="row">
					<img src="../images/sub-banner3.png">
				</div>
			</div>
			<div class="phone">
				<div class="ph-til">
					<h2>SPECIAL PRODUCTS</h2>
				</div>
				<div class="ph-show">
					<div class="ph-row">
						<router-link :to="'./detil/' + 4"><img src="../images/galaxy-note-1.jpg"></router-link>
						<router-link :to="'./detil/' + 4" class="ph-na">
							<span>三星</span>
						</router-link>
						<div class="ph-sairy">
							$122
						</div>
					</div>
					<div class="ph-row">
						<router-link :to="'./detil/' + 10"><img src="../images/Z1.png"></router-link>
						<router-link :to="'./detil/' + 10" class="ph-na">
							<span>索尼</span>
						</router-link>
						<div class="ph-sairy">
							$100
						</div>
					</div>
					<div class="ph-row">
						<router-link :to="'./detil/' + 7"><img src="../images/iphone.png"></router-link>
						<router-link :to="'./detil/' + 7" class="ph-na">
							<span>苹果</span>
						</router-link>
						<div class="ph-sairy">
							$130
						</div>
					</div>
					<div class="ph-row">
						<router-link :to="'./detil/' + 1"><img src="../images/huawei01.jpg"></router-link>
						<router-link :to="'./detil/' + 1" class="ph-na">
							<span>华为</span>
						</router-link>
						<div class="ph-sairy">
							$150
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{

	}
</script>
<style scoped>
	.container{
		margin: 30px 0;
		width: 100%;
	}
	.container-1{
		width: 1200px;
		margin: 0 auto;
		display: flex;
	}
	.row{
		float: left;
		flex: 1;
	}
	.row img{
		width: 360px;
	}
	.phone{
		width: 1200px;
		margin: 0 auto;
		height:600px;
	}
	.ph-til{
		border-bottom: 1px solid #ddd;
	}
	.ph-til h2{
		font-size: 30px;
		padding-bottom: 10px;
		font-family: 'Roboto', sans-serif;
    	font-weight: 600;
    	color: #111;
	}
	.ph-show{
		margin-top: 20px;
		width: 100%;
	}
	.ph-row{
		width: 300px;
		float: left;
		text-align: center;
	}
	.ph-row img{
		display: inline-block;
		width: 200px;
		height:350px;
	}
	.ph-na span{
		display: inline-block;
		width: 60%;
		margin: 20px 0;
		color: #000;
		border-bottom: 1px solid #ddd;
	}
</style>