<template>
	<div>
		<div class="back-top-btn" @click="backTop" v-show="false">
			<van-icon name="down" />
		</div>
		<div class="bot">
			<div class="left">
				<span @click="$router.push('/login')">登录</span
				><span class="line">|</span
				><span @click="$router.push('/register')">注册</span>
			</div>
			<div class="right" v-show="isShow">
				<van-icon name="arrow-up" />
				<a @click="backTop">回到顶部</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HomeBottom',
	data() {
		return {}
	},
	computed: {
		isShow() {
			return this.$route.path == '/search' ? false : true
		}
	},
	methods: {
		backTop() {
			let timer = setInterval(() => {
				let heigh =
					document.documentElement.scrollTop || document.body.scrollTop
				document.body.scrollTop = document.documentElement.scrollTop -=
					heigh / 6
				if (heigh <= 0) {
					console.log('ok')
					clearInterval(timer)
				}
			}, 30)
		}
	}
}
</script>

<style scoped lang="less">
.back-top-btn {
	.van-icon {
		color: white;
		transform: rotate(180deg);
	}
	position: fixed;
	top: 31.25rem;
	right: 1.875rem;
	z-index: 99;
	display: inline-block;
	background-color: rgba(87, 84, 84, 0.5);
	width: 3.125rem;
	height: 3.125rem;
	text-align: center;
	line-height: 3.125rem;
	border-radius: 3.125rem;
}
.bot {
	padding-top: 1.25rem;
	user-select: none;
	height: 5.625rem;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	background-color: rgb(243, 240, 240);
	.left {
		text-align: center;
		.line {
			padding: 0 1.25rem;
			color: rgb(177, 174, 174);
		}
	}
	.right {
		.van-icon {
			margin-right: 1.25rem;
		}
		a:visited {
			color: black;
		}
		justify-self: end;
		margin-right: 1.875rem;
	}
}
</style>
