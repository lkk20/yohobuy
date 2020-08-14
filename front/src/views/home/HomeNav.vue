<template>
	<div class="nav-top">
		<ul class="nav">
			<li
				v-for="(item, index) in navInfo"
				:key="index"
				@click="$router.push(`/${item.id}`)"
			>
				<van-image lazy-load :src="item.singleimagesrc" :alt="item.name" />
				{{ item.name }}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'HomeNav',
	props: {
		navInfo: {
			type: [Array]
		}
	},
	data() {
		return {}
	}
}
</script>

<style scoped lang="less">
.nav-top {
	height: 5.9375rem;
	padding: 0.625rem 0;
	font-size: 14px;
	color: rgb(82, 81, 81);
	.nav {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		text-align: center;
		li {
			padding: 13px;
		}
	}
}
</style>
