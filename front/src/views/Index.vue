<template>
	<div class="Home">
		<!-- <transition name="slide">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</transition> -->
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		<van-tabbar v-model="active">
			<van-tabbar-item icon="wap-home-o" push to="/home">首页</van-tabbar-item>
			<van-tabbar-item icon="apps-o" push to="/classify">分类</van-tabbar-item>
			<van-tabbar-item icon="shopping-cart-o" push to="/cart"
				>购物车</van-tabbar-item
			>
			<van-tabbar-item icon="user-o" push to="/mine">我的</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
export default {
	name: 'Home',
	data() {
		return {}
	},
	computed: {
		active: {
			//底部只有在点击的时候才能切换，而改变地址却不可以，所以利用计算属性
			get: function() {
				switch (this.$route.name) {
					case 'Home':
						return 0
						break
					case 'Classify':
						return 1
						break
					case 'Cart':
						return 2
						break
					default:
						return 3
						break
				}
			},
			//因为使用了v-model,为了不报错写个set，报错也不影响运行
			set: function() {}
		}
	},
	methods: {
		async getProducts() {
			// let list = await this.$http.get('/products')
			// console.log(list)
		}
	},
	created() {
		this.getProducts()
	}
}
</script>

<style scoped lang="less">
.van-tabbar-item--active {
	color: rgb(255, 115, 0);
}
// .slide-enter-active,
// .slide-leave-active {
// 	transition: opacity 0.3s;
// }
// .slide-enter,
// .slide-leave-to {
// 	opacity: 0;
// }
</style>
