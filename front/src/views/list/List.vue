<template>
	<div>
		<nav-bar>
			<template v-slot:left
				><van-icon name="arrow-left" @click="$router.go(-1)"
			/></template>
			<template v-slot:middle>
				{{ getListName }}
			</template>
		</nav-bar>
		<list-sort></list-sort>
		<div class="list">
			<article
				v-for="(item, index) in listPro"
				:key="index"
				@click="$router.push(`/product?proid=${item.proid}`)"
			>
				<product :proInfo="item"> </product>
			</article>
		</div>
		<bottom-login></bottom-login>
	</div>
</template>

<script>
import Product from '@components/common/Product'
import NavBar from '@components/common/NavBar'
import ListSort from './ListSort'
import BottomLogin from '@components/content/BottomLogin'
export default {
	name: 'List',
	components: {
		Product,
		NavBar,
		ListSort,
		BottomLogin
	},
	computed: {
		getListName() {
			return this.$route.query.text ? this.$route.query.text : '全部商品'
		}
	},
	data() {
		return {
			//是否显示告罄
			show: true,
			//排序规则
			sort: 'default',
			listPro: []
		}
	},
	watch: {
		//监听排序规则变化，动态改变数据
		sort(newval, oldval) {
			console.log(newval, oldval)
		}
	},
	methods: {
		//按种类或者是搜索词
		async getListProducts(limit = 10) {
			if (this.$route.query.id) {
				let listProducts = await this.$http.get(
					`/products/bycateid?cateid=${this.$route.query.id}&limit=${limit}`
				)
				this.listPro = listProducts
			} else {
				let listProducts = await this.$http.get(
					`/search?text=${this.$route.query.text}&limit=${limit}`
				)
				this.listPro = listProducts
			}
		}
	},
	created() {
		this.getListProducts()
	}
}
</script>

<style scoped lang="less">
.van-icon {
	font-size: 2rem;
	margin-top: 0.6875rem;
}

.list {
	padding: 0 10px;
	article {
		display: inline;
	}
}
</style>
