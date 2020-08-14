<template>
	<div class="rec">
		<p><van-icon name="arrow-up" />你可能喜欢</p>
		<product v-for="(item, index) in recPros" :key="index" :proInfo="item">
		</product>
	</div>
</template>

<script>
import Product from '@components/common/Product'
export default {
	name: 'HomeRecommend',
	components: {
		Product
	},
	data() {
		return {
			recPros: []
		}
	},
	methods: {
		async getRecommendProduct(num = 4) {
			let recPros = await this.$http.get(`/products/recommend?limit=${num}`)
			this.recPros = recPros
		}
	},
	created() {
		this.getRecommendProduct(4)
	}
}
</script>

<style scoped lang="less">
.rec {
	padding: 0.625rem;
	p {
		.van-icon {
			margin-right: 0.9375rem;
		}
		text-align: center;
		padding-bottom: 0.625rem;
		height: 4.375rem;
		line-height: 4.375rem;
		font-size: 1.4375rem;
		color: gray;
	}
}
</style>
