<template>
	<div>
		<nav-bar>
			<template v-slot:left
				><van-icon name="arrow-left" @click="$router.go(-1)"
			/></template>
			<template v-slot:middle>
				搜索
			</template>
		</nav-bar>
		<van-search
			v-model="value"
			show-action
			placeholder="搜索商品、品牌"
			@search="onSearch"
		>
			<template #action>
				<div @click="onSearch">搜索</div>
			</template>
		</van-search>
		<div class="history">
			<p>
				<span>最近搜索</span><van-icon name="delete" @click="isShow = false" />
			</p>
			<ul v-show="isShow">
				<li
					v-for="(value, index) in getHis"
					:key="index"
					@click="$router.push(`/list?text=${value}`)"
				>
					{{ value }}
				</li>
			</ul>
			<p>猜你喜欢</p>
			<ul>
				<li
					v-for="(value, index) in yourLike"
					:key="index"
					@click="$router.push(`/list?text=${value}`)"
				>
					{{ value }}
				</li>
			</ul>
		</div>
		<bottom-login></bottom-login>
	</div>
</template>

<script>
import BottomLogin from '@components/content/BottomLogin'
import NavBar from '@components/common/NavBar'
export default {
	components: {
		NavBar,
		BottomLogin
	},
	name: 'Search',
	computed: {
		getHis() {
			if (!window.localStorage) {
				return this.history < 11
					? this.history
					: this.history.splice(this.history.length - 10, 10)
			} else {
				return this.history
			}
		}
	},
	data() {
		return {
			value: null,
			isShow: true,
			searchNum: 0,
			yourLike: ['前端', '数据库'],
			history: []
		}
	},
	methods: {
		onSearch() {
			if (this.value === '') {
				return
			} else if (!window.localStorage) {
				console.warn('游览器不支持localStorage')
			} else {
				//主逻辑业务
				//如果用户登录了使用用户名
				let storage = window.localStorage
				//写入
				storage.setItem([this.searchNum++], this.value)
			}
			this.$router.push(`/list?text=${this.value}`)
		},
		getHistory() {
			let num = 0
			if (!window.localStorage) {
				console.warn('游览器不支持localStorage')
				this.history.push(this.value)
			} else {
				//主逻辑业务
				let storage = window.localStorage
				//读出
				while (storage.getItem(num) && this.history.length < 11) {
					this.history.push(storage.getItem(num))
					num++
				}
			}
		}
	},
	created() {
		this.getHistory()
	}
}
</script>

<style scoped lang="less">
.van-icon {
	font-size: 2rem;
	margin-top: 0.6875rem;
}
.history {
	border-top: 0.9375rem solid rgb(226, 222, 222);
	min-height: 28.75rem;
	padding: 0.625rem;
	p {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		align-items: center;
		.van-icon {
			font-size: 1.4375rem;
			margin-top: 0.3125rem;
			justify-self: end;
		}
		color: gray;
	}
	ul {
		max-height: 12.5rem;
		overflow: hidden;
		li {
			display: inline-block;
			padding: 0.125rem;
			font-size: 14px;
			border: 0.0625rem solid rgb(192, 191, 191);
			border-radius: 0.3125rem;
			margin: 0.3125rem;
		}
	}
}
</style>
