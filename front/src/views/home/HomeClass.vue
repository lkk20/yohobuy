<template>
	<div class="hot-class">
		<h2>热门品类</h2>
		<ul>
			<li v-for="(item, index) in homeCalss" :key="index">
				<van-image
					:alt="item.name"
					lazy-load
					:src="item.singleimagesrc"
					@click="$router.push(`/list?id=${item.id}&text=${item.name}`)"
				/>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'HomeClass',
	props: {
		homeCalss: {
			type: [Array]
		}
	},
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
		grid-template-rows: repeat(3, 1fr);
		text-align: center;
		li {
			height: 25vw;
		}
	}
}
</style>
