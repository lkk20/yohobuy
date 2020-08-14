<template>
	<div>
		<nav-bar>
			<template v-slot:left>
				<img src="../../assets/image/logo.jpg" alt="logo" />
			</template>
			<template v-slot:middle>
				<van-search
					shape="round"
					placeholder="搜索商品"
					@click="$router.push('/search')"
				/>
			</template>
		</nav-bar>
		<classify-nav></classify-nav>
	</div>
</template>

<script>
import NavBar from '@components/common/NavBar'
import ClassifyNav from './ClassifyNav'
export default {
	components: { ClassifyNav, NavBar },
	name: 'Classify',
	data() {
		return {}
	}
}
</script>

<style scoped lang="less">
.van-icon {
	font-size: 2rem;
	margin-top: 0.6875rem;
}
</style>
