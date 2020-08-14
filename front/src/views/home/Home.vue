<template>
	<div class="home">
		<home-top></home-top>
		<home-swiper :swiperInfo="homeInfo.swiper[0]"></home-swiper>
		<home-nav :navInfo="homeInfo.small"></home-nav>
		<home-class :homeCalss="homeInfo.cate"></home-class>
		<home-hots :hot="homeInfo.hot[0]" :news="homeInfo.new[0]"></home-hots>
		<home-popular :popular="homeInfo.top[0]"></home-popular>
		<home-recommend></home-recommend>
		<bottom-login></bottom-login>
	</div>
</template>

<script>
import HomeTop from './HomeTop'
import HomeSwiper from './HomeSwiper'
import HomeNav from './HomeNav'
import HomeHots from './HomeHots'
import HomeClass from './HomeClass'
import HomePopular from './HomePopular'
import HomeRecommend from './HomeRecommend'
import BottomLogin from '@components/content/BottomLogin'
export default {
	components: {
		HomeTop,
		HomeSwiper,
		HomeNav,
		HomeClass,
		HomeHots,
		HomePopular,
		HomeRecommend,
		BottomLogin
	},
	name: 'Home',
	data() {
		return {
			homeInfo: {}
		}
	},
	methods: {
		async getHomeImages() {
			let images = await this.$http.get('/home/allimages')
			this.homeInfo = images
		}
	},
	created() {
		this.getHomeImages()
	}
}
</script>

<style scoped lang="less"></style>
