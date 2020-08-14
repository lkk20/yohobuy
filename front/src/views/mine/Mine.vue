<template>
	<div>
		<nav-bar>
			<template v-slot:left>
				<img src="../../assets/image/logo.jpg" alt="logo" />
			</template>
			<template v-slot:middle>
				个人中心
			</template>
			<template v-slot:right>
				<van-icon name="setting-o" />
			</template>
		</nav-bar>
		<article class="user">
			<span v-if="!isLogin" @click="$router.push('/login')">登录/注册</span>
			<h2 v-else>你好 {{ name }}</h2>
		</article>
		<article class="orders">
			<h3>
				我的订单 <small>全部订单<van-icon name="arrow"/></small>
			</h3>
			<div class="myorders">
				<div>
					<van-icon name="peer-pay" />
					<p>待付款</p>
				</div>
				<div>
					<van-icon name="logistics" />
					<p>代发货</p>
				</div>
				<div>
					<van-icon name="records" />
					<p>待收货</p>
				</div>
				<div>
					<p>0</p>
					商品收藏
				</div>
				<div>
					<p>0</p>
					品牌收藏
				</div>
				<div>
					<p>0</p>
					游览记录
				</div>
			</div>
		</article>
		<article class="address">
			<h3>
				收货地址<small @click="$router.push('/address?user=1')"
					>修改地址<van-icon name="arrow"
				/></small>
			</h3>
			<div class="my-address"></div>
		</article>
	</div>
</template>

<script>
import NavBar from '@components/common/NavBar'
export default {
	components: {
		NavBar
	},
	computed: {
		isLogin() {
			return window.sessionStorage.userid ? true : false
		},
		name() {
			return window.sessionStorage.name
		}
	},
	name: 'Mine',
	data() {
		return {}
	},
	mounted() {}
}
</script>

<style scoped lang="less">
.van-icon {
	font-size: 2rem;
	margin-top: 0.6875rem;
}
.user {
	height: 6.25rem;
	background-color: rgba(39, 38, 38, 0.5);
	padding: 0.625rem;
	box-sizing: border-box;
	text-align: center;
	line-height: 5rem;
	span {
		border: 0.1875rem solid white;
		padding: 0.625rem;
	}
}
.address,
.orders {
	h3 {
		padding-left: 0.625rem;
		height: 3.125rem;
		line-height: 3.125rem;
		border-bottom: solid 5px rgb(223, 221, 221);
		small {
			color: rgb(63, 61, 61);
			margin-left: 12.5rem;
			.van-icon {
				font-size: 0.75rem;
				font-weight: bolder;
			}
		}
	}
	.myorders {
		display: grid;
		height: 160px;
		width: 100%;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(2, 1fr);
		text-align: center;
		align-items: center;
		border-bottom: solid 5px rgb(223, 221, 221);
		div {
			box-sizing: border-box;
		}
	}
}
</style>
