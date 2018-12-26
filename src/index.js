import './style/reset.css';
import './style/iconfont.css';

import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import App from './app.vue';
import goods from './pages/goods/goods.vue';
import ratings from './pages/ratings/ratings.vue';
import seller from './pages/seller/seller.vue';

Vue.use(VueRouter);

Vue.prototype.$http = axios;
const routes = [
	{path:'/',component:goods},
	{
		path: '/goods',
		component: goods
	},
	{
		path: '/ratings',
		component: ratings
	},
	{
		path: '/seller',
		component: seller
	},
];
const router = new VueRouter({
	linkActiveClass: 'active',
	routes
})
new Vue({
	el: "#root",
	render: h => h(App),
	router
})
// router.replace('goods');
