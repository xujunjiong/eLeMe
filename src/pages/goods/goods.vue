<template>
 <div class="goods">
	<div class="menu-wrapper">
		<ul>
			<li v-for="(item,index) in goods" class="menu-item" :key="index" :class="{'current':currentIndex===index}">
				<span class="text border-1px ">
						<span class="icon" v-show="item.type>0" :class="classMap[item.type]"></span>{{item.name}}
				</span>
			</li>
		</ul>
	</div>
	<div class="food-wrapper">
		<ul>
			<li v-for="item in goods" class="food-list">
				<h1 class="title">{{item.name}}</h1>
				<ul>
					<li v-for="food in item.foods" class="food-item">
						<div class="icon">
							<img :src="food.icon" width="57" height="57">
						</div>
						<div class="content">
							<h2 class="name">{{food.name}}</h2>
							<p class="desc">{{food.description}}</p>
							<div class="extra">
								<span>月售{{food.sellCount}}份</span>
								<span>好评率{{food.rating}}%</span>
							</div>
							<div class="price">
								<span>{{food.price}}</span>
								<span v-show="food.oldPrice">{{food.oldPrice}}</span>
							</div>
						</div>
					</li>
				</ul>
			</li>
		</ul>
	</div>
 </div>
</template>

<script>
	const response = require('../../common/data/goods.json');
  const ERR_OK = 0;

	export default {
		props:{
			seller:{
				type:Object
			}
		},
		data(){
			return {
				good:[]
			}
		},
		computed: {
			currentIndex() {
				return 1;
			}
		},
		created(){
			this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
			
// 				this.$http.get('https://api.github.com/users/biaoyansu', {
// 						params: {
// 							ID: 12345
// 						}
// 					})
// 					.then((response) => {
// 						if( response.errno=== ERR_OK){
// 							this.seller = Object.assign({},this.seller,response.data);
// 						}
// 					})
// 					.catch((error) => {
// 						console.log(error);
// 					});

						if( response.errno=== ERR_OK){
							this.goods = response.data;
 						}
		}
	}
</script>

<style>
	.goods {
		display: flex;
		position: absolute;
		top: 174px;
		bottom: 46px;
		width: 100%;
		overflow: hidden;
	}
	.goods  .menu-wrapper{
		flex: 0 0 80px;
		width: 80px;
		background-color: #f3f5f7;
	}
	.goods  .menu-wrapper .current{
		position: relative;
		z-index: 10;
		margin: -1px;
		background-color: #fff;
		font-weight: 700
	}
	.goods  .menu-wrapper .menu-item{
		display: table;
		height: 54px;
		width: 56px;
		line-height: 14px;
		padding: 0 12px;
	}
	.goods  .menu-wrapper .menu-item .text{
		position: relative;
		display: table-cell;
		width: 56px;
		vertical-align: middle;
		font-size: 12px;
	}
	.goods  .menu-wrapper .menu-item .icon{
		display: inline-block;
		margin-right: 2px;
		width: 12px;
		height: 12px;
		background-size: 12px 12px;
		background-repeat: no-repeat;
		vertical-align: top;
	}
	.goods  .menu-wrapper .menu-item .decrease {
		background-image: url(decrease_3@2x.png);
	}
 .goods  .menu-wrapper .menu-item .discount {
		background-image: url(discount_3@2x.png);
	}
 
 .goods  .menu-wrapper .menu-item .special {
		background-image: url(special_3@2x.png);
	}
 
 .goods  .menu-wrapper .menu-item .invoice {
		background-image: url(invoice_3@2x.png);
	}
 
 .goods  .menu-wrapper .menu-item .guarantee {
		background-image: url(guarantee_3@2x.png);
	}
	.goods .food-wrapper{
		flex: 1;
	}
	.goods .food-wrapper .title{
		padding-left: 14px;
		border-left: 2px solid #d9dde1;
		height: 26px;
		font-size: 12px;
		color:rgb(147,153,159);
		line-height: 26px;
		background-color: #f3f5f7;
	}
	.goods .food-wrapper .food-item{
		position: relative;
		display: flex;
		margin: 18px;
		padding-bottom: 18px;
	}
	.goods .food-wrapper .food-item .icon{
		margin-right: 10px;
		flex: 0 0 57px;
	}
		.goods .food-wrapper .food-item .content{
			flex: 1;
		}
</style>