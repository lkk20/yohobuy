<template>
	<div>
		<van-tabs v-model="active">
			<van-tab
				v-for="(item, index) in getClassify"
				:key="index"
				:title="item[0]"
			>
				<van-tree-select
					:items="item[1].items"
					:main-active-index.sync="item[1].items.activeIndex"
					@itemclick="getId"
				/>
			</van-tab>
		</van-tabs>
	</div>
</template>

<script>
export default {
	name: 'ClassifyNav',
	computed: {
		getClassify() {
			return Object.entries(this.classify)
		}
	},
	data() {
		return {
			active: 0,
			classify: {}
		}
	},
	methods: {
		getId(data) {
			this.$router.push(`/list?&id=${data.id}&text=${data.text}`)
		},
		async getCategories() {
			let categories = await this.$http.get('/categories/all')
			this.classify = categories
		}
	},
	created() {
		this.getCategories()
	}
}
</script>

<style scoped lang="less">
.van-icon-success::before {
	content: close-quote;
}
.van-tree-select__item--active {
	color: black;
}
.van-sidebar-item--select::before {
	background-color: white;
}
.van-tab--active {
	font-weight: 800 !important;
	color: black !important;
}
</style>
