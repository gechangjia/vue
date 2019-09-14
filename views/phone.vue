<template>
	<div>
		<div class="main">
			<div class="main-1">
				<div class="filter">
					<span class="fi-span">品牌：</span>
					<span class="ph-name"
					v-for="item in names"
					:class="{'on': item ===filterName}"
					@click="addClassName(item)">{{ item }}</span>
				</div>
				<div class="phone-s">
					<Phone v-for="item in filterPhoneList" :info="item" :key="item.id"></Phone>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Phone from "../components/phone.vue";
	export default{
		components:{
			Phone
		},
		computed: {
			list () {
				return this.$store.state.phoneList;
			},
			names () {
				return this.$store.getters.names;
			},
			filterPhoneList () {
				let list = [...this.list];
				if (this.filterName!=='') {
					list=list.filter(item => item.name === this.filterName);
				}
				return list;
			}
		},
		methods:{
			addClassName(name){
				if(this.filterName===name){
					this.filterName='';
				}else{
					this.filterName=name;
				}
			}
		},
		mounted () {
			this.$store.dispatch('getPhoneList');
		},
		data () {
			return{
				filterName:''
			}
		}
	}
</script>
<style scoped>
	.main{
		width: 100%;
		height:auto;
	}
	.main-1{
		background-color: #fff;
		width: 1200px;
		margin:20px auto;
		border-radius: 5px;
	}
	.ph-name{
		display: inline-block;
		margin-left: 20px;
		padding: 2px 7px;
		cursor: pointer;
		border-radius: 2px;
	}
	.filter{
		width: 1000px;
		margin:20px auto;
		height:150px;
		border-bottom: 1px solid #E2DCDC;
		padding: 20px 20px;
	}
	.ph-name.on{
		background-color: #8499E3;
		color:#fff;
		border: none;
	}
	.phone-s{
		width: 100%;
		height:1300px;
	}
</style>
