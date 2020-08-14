<template>
	<div>
		<nav-bar class="top">
			<template v-slot:left
				><van-icon name="arrow-left" @click="$router.go(-1)"
			/></template>
			<template v-slot:middle>
				商品购买
			</template>
			<template v-slot:right>
				<van-icon name="wap-home-o" @click="$router.replace('/home')" />
			</template>
		</nav-bar>
		<main-img :proInfo="proInfo"></main-img>
		<h2>商品推荐</h2>
		<div class="list">
			<product v-for="(item, index) in recPros" :key="index" :proInfo="item">
			</product>
		</div>
		<bottom-login></bottom-login>
		<van-goods-action>
			<van-goods-action-icon icon="cart-o" badge="5" text="购物车" />
			<van-goods-action-icon icon="star-o" text="收藏" />
			<van-goods-action-button
				type="warning"
				text="加入购物车"
				@click="showPopup"
			/>
			<van-goods-action-button
				type="danger"
				text="立即购买"
				@click="showPopup"
			/>
		</van-goods-action>
		<buy-cart ref="sku" :proInfo="proInfo"></buy-cart>
	</div>
</template>

<script>
import BottomLogin from '@components/content/BottomLogin'
import Product from '@components/common/Product'
import NavBar from '@components/common/NavBar'
import MainImg from './MainImg'
import BuyCart from './BuyCart'
export default {
	components: {
		Product,
		NavBar,
		BottomLogin,
		MainImg,
		BuyCart
	},
	name: 'Detail',
	data() {
		return {
			recPros: null,
			proInfo: null
		}
	},
	methods: {
		showPopup() {
			console.log(this.$refs.sku.show)
			this.$refs.sku.show = true
		},
		async getRecommendProduct(num = 4) {
			let recPros = await this.$http.get(`/products/recommend?limit=${num}`)
			this.recPros = recPros
		},
		async getProductByProid() {
			let productInfo = await this.$http.get(
				`/products/proinfo?proid=${this.$route.query.proid}`
			)
			this.proInfo = productInfo[0]
		}
	},
	mounted() {
		document.body.scrollTop = document.documentElement.scrollTop = 0
	},
	created() {
		this.getRecommendProduct(4)
		this.getProductByProid()
	}
}
</script>

<style scoped lang="less">
.top {
	position: sticky;
	top: 0px;
	background-color: white;
	z-index: 10;
}
.van-icon {
	font-size: 2rem;
	margin-top: 0.6875rem;
}
.list {
	padding: 0 10px;
}
h2 {
	text-align: center;
	padding: 10px 0;
	color: rgb(54, 54, 52);
}
</style>
