<template>
	<div>
		<nav-bar>
			<template v-slot:left>
				<img src="../../assets/image/logo.jpg" alt="logo" />
			</template>
			<template v-slot:middle>
				购物车
			</template>
			<template v-slot:right>
				<van-icon name="delete" @click="deleteCart" />
			</template>
		</nav-bar>
		<article class="no-login" v-if="!isLogin">
			<van-notice-bar color="#24acaa" background="#f0f0f0" left-icon="info-o">
				请您先<span class="please-login" @click="$router.push('/login')"
					>登录</span
				>,否则部分功能无法使用
			</van-notice-bar>
			<div class="no-login-cart">
				<van-icon name="shopping-cart-o" />
				<p>您的购物车暂无商品</p>
				<span @click="$router.replace('/home')">随便逛逛</span>
			</div>
		</article>
		<article class="login" v-else>
			<div class="login-cart" v-if="this.proInfo == null">
				<van-icon name="shopping-cart-o" />
				<p>您的购物车暂无商品</p>
				<span @click="$router.replace('/home')">随便逛逛</span>
			</div>
			<div class="cart" v-else>
				<div class="product-card" v-for="(item, index) in proInfo" :key="index">
					<van-checkbox
						v-model="item.checked"
						@click="isChecked(item.carid, item.checked)"
					></van-checkbox>
					<van-card
						:price="item.price * item.num"
						:title="item.title"
						:desc="`${item.desc}*${item.num}`"
						:thumb="item.thumb"
					>
						<template #num>
							<van-button size="mini" @click="changeNum(item.carid, item.num++)"
								>+</van-button
							>
							{{ item.num }}
							<van-button
								size="mini"
								:disabled="item.num == 1"
								@click="changeNum(item.carid, item.num--)"
								>-</van-button
							>
						</template>
					</van-card>
				</div>

				<van-submit-bar
					:price="totalPrice * 100"
					:tip="tip"
					tip-icon="info-o"
					:disabled="isdisabled"
					:loading="loading"
					button-text="提交订单"
					@submit="onSubmit"
				>
					<van-checkbox v-model="ischecked">全选</van-checkbox>
				</van-submit-bar>
			</div>
		</article>
	</div>
</template>

<script>
import NavBar from '@components/common/NavBar'
export default {
	components: {
		NavBar
	},
	name: 'Cart',
	computed: {
		isdisabled() {
			if (
				this.checked ||
				this.proInfo.some(function(e) {
					return e.checked == true
				})
			) {
				this.tip = ''
				return false
			} else {
				this.tip = '您还没有选中要购买的商品'
				return true
			}
		},
		ischecked: {
			set(bool) {
				if (bool) {
					this.proInfo.forEach(pro => {
						pro.checked = true
					})
					this.checked = true
				} else {
					this.checked = false
					this.proInfo.forEach(pro => {
						pro.checked = false
					})
				}
			},
			get() {
				if (
					this.checked ||
					this.proInfo.every(function(e) {
						return e.checked == true
					})
				) {
					return true
				}
			}
		},
		totalPrice() {
			let totalPrice = 0
			this.proInfo.filter(e => {
				e.checked === true ? (totalPrice += e.price * e.num) : ''
			})
			return totalPrice
		},
		isLogin() {
			return window.sessionStorage.userid ? true : false
		}
	},
	data() {
		return {
			//全选，没有全选不能提交
			checked: false,
			//提示你的购物车为空
			tip: '您还没有选中要购买的商品',
			//价格
			price: 0,
			//加载状态
			loading: false,
			proInfo: []
		}
	},
	methods: {
		onSubmit() {
			alert('提交')
			this.loading = true
		},
		async deleteCart() {
			if (this.checked === true) {
				this.proInfo = null
				let result = await this.$http.post('/cart/deleteall', {
					userid: window.sessionStorage.userid
				})
			} else {
				this.proInfo.filter((e, index, arr) => {
					if (e.checked === true) {
						arr.splice(index, 1)
						let result = this.$http.post('/cart/delete', {
							carid: e.carid
						})
					}
				})
			}
		},
		async getCarInfo() {
			let carInfo = await this.$http.post('/cart/query', {
				userid: window.sessionStorage.userid
			})
			carInfo.forEach((e, index) => {
				this.proInfo.push({
					num: e.quantity,
					checked: e.checked * 1 === 1,
					price: e.price,
					title: e.name,
					desc: e.sku,
					thumb: e.image,
					carid: e.carid
				})
			})
		},
		async isChecked(id, checked) {
			let result = await this.$http.post('/cart/checked', {
				carid: id,
				checked: checked ? 1 : 0
			})
			if (!result) {
				this.$toast.fail('选择失败')
			}
		},
		async changeNum(id, num) {
			let result = await this.$http.post('/cart/quantity', {
				carid: id,
				quantity: num
			})
			if (!result) {
				this.$toast.fail('增加失败')
			}
		}
	},
	created() {
		this.getCarInfo()
	}
}
</script>

<style scoped lang="less">
.no-login {
	.please-login {
		background-color: red;
		padding: 0.3125rem;
		border-radius: 0.3125rem;
	}
}
.login-cart,
.no-login-cart {
	.van-icon {
		font-size: 4rem;
	}
	p {
		color: gray;
		padding: 0.9375rem 0;
	}
	span {
		padding: 0.625rem;
		border-radius: 0.625rem;
		color: white;
		background-color: rgb(48, 47, 47);
	}
	height: 18.75rem;
	text-align: center;
	padding-top: 3.125rem;
	box-sizing: border-box;
	background-color: rgb(238, 232, 232);
}
.login {
	.cart {
		height: 33.125rem;
		overflow-y: scroll;
		.product-card {
			padding: 0.625rem;
			display: flex;
			.van-card {
				margin-left: 0.625rem;
				flex: 1;
			}
		}
	}
	.van-submit-bar {
		z-index: 0;
		bottom: 3.125rem;
	}
}
</style>
