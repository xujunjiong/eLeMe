<template>
	<div class="header">
		<div class="content-wrapper">
			<div class="avatar">
				<img :src="seller.avatar" height="64" width="64">
			</div>
			<div class="content">
				<div class="title">
					<span class="brand"></span>
					<span class="name">{{seller.name}}</span>
				</div>
				<div class="description">
					{{seller.description}}/{{seller.deliveryTime}}分钟送达
				</div>
				<div class="support" v-if="seller.supports">
					<span class="icon" :class="classMap[seller.supports[0].type]"></span>
					<span class="text">{{seller.supports[0].description}}</span>
				</div>
			</div>
			<div class="support-count" v-if="seller.supports" @click="showDetail">
				<span class="count">{{seller.supports.length}}个</span>
				<i class="iconfont icon-keyboard_arrow_right"></i>
			</div>
		</div>
		<div class="bulletin-wrapper" @click="showDetail">
			<span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
			<i class="iconfont icon-keyboard_arrow_right"></i>
		</div>
		<div class="background">
			<img :src="seller.avatar" width="100%" height="100%">
		</div>
		<transition name="fade">
			<div class="detail" v-show="detailShow">
				<div class="detail-wrapper">
					<div class="detail-main">
						<h1 class="name">{{seller.name}}</h1>
						<div class="star-wrapper">
							<star :size='48' :score='seller.score'></star>
						</div>
						<div class="title">
							<div class="line"></div>
							<div class="text">优惠信息</div>
							<div class="line"></div>
						</div>
						<ul class="supports" v-if="seller.supports">
							<li class="support-item" v-for="(item,index) in seller.supports" :key="index">
								<span class="icon" :class="classMap[seller.supports[index].type]"></span>
								<span class="text">{{seller.supports[index].description}}</span>
							</li>
						</ul>
						<div class="title">
							<div class="line"></div>
							<div class="text">商家公告</div>
							<div class="line"></div>
						</div>
						<div class="bulletin">
							<p class="content">{{seller.bulletin}}</p>
						</div>
					</div>
				</div>
				<div class="detail-close">
					<i class="iconfont icon-close" @click="hideDetail"></i>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	import star from '../star/star.vue';
	export default {
		props: {
			seller: {
				type: Object
			}
		},
		data() {
			return {
				detailShow: false
			}
		},
		methods: {
			showDetail() {
				this.detailShow = true;
			},
			hideDetail() {
				this.detailShow = false;
			}
		},
		created() {
			this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
		},
		components: {
			star
		}
	}
</script>

<style>
	.header {
		position: relative;
		color: #fff;
		background-color: rgba(7, 17, 27, .5);
		overflow: hidden;
	}

	.header .content-wrapper {
		position: relative;
		padding: 24px 12px 18px 24px;
		font-size: 0;
	}

	.header .content-wrapper .avatar {
		display: inline-block;
	}

	.header .content-wrapper .avatar img {
		border-radius: 2px;
	}

	.header .content-wrapper .content {
		display: inline-block;
		margin-left: 16px;
		vertical-align: top;
	}

	.header .content-wrapper .content .title {
		margin: 2px 0 8px;
	}

	.header .content-wrapper .content .title .brand {
		display: inline-block;
		vertical-align: top;
		width: 30px;
		height: 18px;
		background-image: url(brand@2x.png);
		background-size: 30px 18px;
		background-repeat: no-repeat;
	}

	.header .content-wrapper .content .title .name {
		margin-left: 6px;
		font-size: 16px;
		line-height: 18px;
		font-weight: 700;
	}

	.header .content-wrapper .content .description {
		margin-bottom: 10px;
		font-size: 12px;
		font-weight: 200;
		line-height: 12px;
	}

	.header .content-wrapper .content .support {}

	.header .content-wrapper .content .support .icon {
		display: inline-block;
		margin-right: 4px;
		width: 12px;
		height: 12px;
		background-size: 12px 12px;
		background-repeat: no-repeat;
		vertical-align: top;
	}

	.header .content-wrapper .content .support .decrease {
		background-image: url(decrease_1@2x.png);
	}

	.header .content-wrapper .content .support .discount {
		background-image: url(discount_1@2x.png);
	}

	.header .content-wrapper .content .support .special {
		background-image: url(special_1@2x.png);
	}

	.header .content-wrapper .content .support .invoice {
		background-image: url(invoice_1@2x.png);
	}

	.header .content-wrapper .content .support .guarantee {
		background-image: url(guarantee_1@2x.png);
	}

	.header .content-wrapper .content .support .text {
		font-size: 10px;
		font-weight: 200;
		line-height: 12px;
	}

	.header .content-wrapper .support-count {
		position: absolute;
		right: 12px;
		bottom: 14px;
		padding: 0 8px;
		height: 24px;
		line-height: 24px;
		border-radius: 14px;
		background-color: rgba(0, 0, 0, .2);
		text-align: center;
	}

	.header .content-wrapper .support-count .count {
		font-size: 10px;
		font-weight: 200;
		/* vertical-align: top; */
	}

	.header .content-wrapper .support-count i {
		font-size: 10px;
		margin-left: 2px;
	}

	.bulletin-wrapper {
		position: relative;
		height: 28px;
		line-height: 28px;
		padding: 0 22px 0 12px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		background-color: rgb(7, 17, 27, .2);
	}

	.bulletin-wrapper .bulletin-title {
		display: inline-block;
		margin-top: 8px;
		width: 22px;
		height: 12px;
		background-size: 22px 12px;
		background-repeat: no-repeat;
		background-image: url(bulletin@2x.png);
		vertical-align: top;
	}

	.bulletin-wrapper .bulletin-text {
		margin: 0 4px;
		font-size: 10px;
		font-weight: 200;
		vertical-align: top;
	}

	.bulletin-wrapper .icon-keyboard_arrow_right {
		position: absolute;
		font-size: 10px;
		right: 12px;
		top: 8px;
		line-height: 1;
	}

	.header .background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		-webkit-filter: blur(10px);
		filter: blur(10px);
	}

	.header .detail {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99;
		width: 100%;
		height: 100%;
		overflow: auto;
		background-color: rgba(7, 17, 27, .8);
		/* filter: blur(10px); */
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: all .5s;
	}

	.fade-enter,
	.fade-leave-to {
		opacity: 0;
		background: rgba(7, 17, 27, 0)
	}

	.detail .detail-wrapper {
		display: inline-block;
		width: 100%;
		min-height: 100%;
	}

	.detail .detail-wrapper .detail-main {
		margin-top: 64px;
		padding-bottom: 64px;
	}

	.detail .detail-wrapper .detail-main .name {
		font-size: 16px;
		line-height: 16px;
		font-weight: 700;
		color: rgb(250, 250, 250);
		text-align: center;
	}

	.detail .detail-wrapper .detail-main .star-wrapper {
		margin-top: 18px;
		padding: 2px 0;
		text-align: center;
	}

	.detail .detail-wrapper .detail-main .title {
		display: flex;
		width: 80%;
		margin: 28px auto 24px;
	}

	.detail .detail-wrapper .detail-main .title .line {
		flex: 1;
		position: relative;
		top: -6px;
		border-bottom: 1px solid rgba(255, 255, 255, .2);
	}

	.detail .detail-wrapper .detail-main .title .text {
		padding: 0 12px;
		font-size: 14px;
		font-weight: 700;
	}

	.detail .detail-wrapper .detail-main .supports {
		width: 80%;
		margin: 0 auto;
	}

	.detail .detail-wrapper .detail-main .supports .support-item {
		padding: 0 12px;
		margin-bottom: 12px;
		font-size: 0;
	}
		
	.detail .detail-wrapper .detail-main .supports .support-item:last-child{
		margin-bottom: 0;
	}

	.detail .detail-wrapper .detail-main .supports .support-item .icon {
		display: inline-block;
		margin-right: 6px;
		width: 16px;
		height: 16px;
		background-size: 16px 16px;
		background-repeat: no-repeat;
		vertical-align: top;
	}

	.detail .detail-wrapper .detail-main .supports .support-item .decrease {
		background-image: url(decrease_1@2x.png);
	}

	.detail .detail-wrapper .detail-main .supports .support-item .discount {
		background-image: url(discount_1@2x.png);
	}

	.detail .detail-wrapper .detail-main .supports .support-item .special {
		background-image: url(special_1@2x.png);
	}

	.detail .detail-wrapper .detail-main .supports .support-item .invoice {
		background-image: url(invoice_1@2x.png);
	}

	.detail .detail-wrapper .detail-main .supports .support-item .guarantee {
		background-image: url(guarantee_1@2x.png);
	}

	.detail .detail-wrapper .detail-main .supports .support-item .text {
		line-height: 16px;
		font-size: 12px;
	}

	.detail .detail-wrapper .detail-main .bulletin {
		width: 80%;
		margin: 0 auto;
	}

	.detail .detail-wrapper .detail-main .bulletin .content {
		padding: 0 12px;
		font-size: 12px;
		line-height: 24px;
	}

	.detail .detail-close {
		width: 32px;
		height: 32px;
		margin: -64px auto 0 auto;
		font-size: 32px;
	}

	.detail .detail-close i {
		font-size: 100%;
	}
</style>
