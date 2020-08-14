<template>
	<div class="swiper">
		<van-swipe :autoplay="3000">
			<van-swipe-item v-for="(image, index) in images" :key="index">
				<img :src="image" />
			</van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>
export default {
	name: 'HomeSwiper',
	props: {
		swiperInfo: {
			type: [Object]
		}
	},
	computed: {
		images() {
			return this.swiperInfo.Imagesrc
		}
	},
	data() {
		return {}
	}
}
</script>

<style scoped lang="less">
.swiper {
	height: 9.6875rem;
}
</style>
