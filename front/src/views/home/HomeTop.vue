<template>
	<div class="top">
		<nav-bar>
			<template v-slot:left>
				<img src="../../assets/image/logo.jpg" alt="logo" />
			</template>
			<template v-slot:middle>
				<van-search
					placeholder="请输入搜索关键词"
					@click="$router.push('/search')"
				/>
			</template>
			<template v-slot:right>
				<van-icon name="service" />
			</template>
		</nav-bar>
	</div>
</template>

<script>
import NavBar from '@components/common/NavBar'
export default {
	components: {
		NavBar
	},
	name: 'vueName',
	data() {
		return {}
	}
}
</script>

<style scoped lang="less">
.top {
	position: sticky;
	top: 0px;
	z-index: 10;
	background-color: white;
	.van-icon {
		margin: 0.625rem;
		font-size: 1.875rem;
		color: orangered;
	}
}
</style>
