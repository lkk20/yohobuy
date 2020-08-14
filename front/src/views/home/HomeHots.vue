<template>
	<div class="hot-class">
		<h2>{{ hot.name }}</h2>
		<ul>
			<li v-for="(item, index) in hot.Imagesrc" :key="index">
				<van-image :alt="hot.name" lazy-load :src="item" />
			</li>
		</ul>
		<div class="banner">
			<van-image :src="news.singleimagesrc" lazy-load :alt="news.name" />
		</div>
	</div>
</template>

<script>
export default {
	props: {
		hot: {
			type: [Object]
		},
		news: {
			type: [Object]
		}
	},
	name: 'HomeHots',
	data() {
		return {}
	}
}
</script>

<style scoped lang="less">
.hot-class {
	h2 {
		background-color: #f0f0f0;
		text-align: center;
		font-weight: 100;
		font-size: 1.125rem;
		height: 3.125rem;
		line-height: 3.125rem;
		font-size: 1.125rem;
		padding-top: 0.625rem;
	}
	ul {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(2, 1fr);
		text-align: center;
		li {
			height: 25vw;
			.van-image {
				height: 100%;
				width: 100%;
			}
		}
	}
	.banner {
		background-color: #f0f0f0;
		padding-top: 0.625rem;
	}
}
</style>
