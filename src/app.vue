<template>
	<div id="app">
		<v-header :seller='seller'></v-header>
		<div class="tab border-1px">
			<div class="tab-item">
				<router-link to="/goodS">商品</router-link>
			</div>
			<div class="tab-item">
				<router-link to="/ratings">评论</router-link>
			</div>
			<div class="tab-item">
				<router-link to="/seller">商家</router-link>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	import header from './pages/header/header.vue';
	const response = require('./common/data/seller.json');

	const ERR_OK = 0;
	
	export default {
		data() {
			return {
				seller: {}
			}
		},
		created() { //取得数据
// 			this.$http.get('https://api.github.com/users/biaoyansu', {
// 					params: {
// 						ID: 12345
// 					}
// 				})
// 				.then((response) => {
// 					if( response.errno=== ERR_OK){
// 						this.seller = Object.assign({},this.seller,response.data);
// 					}
// 					console.log(response.data);
// 					console.log(this.seller);
// 				})
// 				.catch((error) => {
// 					console.log(error);
// 				});

			if( response.errno=== ERR_OK){
		 			this.seller = Object.assign({},this.seller,response.data);
					console.log(this.seller);
		 		}
		},
		components: {
			'v-header': header
		}
	}
</script>

<style>
	.tab {
		display: flex;
		width: 100%;
		height: 40px;
		line-height: 40px;
		/* border-bottom: 1px solid rgb(7,17,27,.1); */
	}

	.tab .tab-item {
		flex: 1;
		text-align: center;
	}

	.tab .tab-item>a {
		display: block;
		text-decoration: none;
		font-size: 14px;
		color: rgb(77, 85, 93)
	}

	.tab .tab-item>a.active {
		color: rgb(240, 20, 20);
	}
</style>
