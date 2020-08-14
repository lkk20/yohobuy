<template>
	<div>
		<van-sku
			v-model="show"
			:sku="sku"
			:goods="goods"
			:goods-id="proInfo.proid"
			:quota-used="quotaUsed"
			:hide-stock="sku.hide_stock"
			:stock-threshold="stockThreshold"
			@buy-clicked="onBuyClicked"
			@add-cart="onAddCartClicked"
		/>
	</div>
</template>

<script>
export default {
	props: {
		proInfo: {
			type: [Object]
		}
	},
	name: 'BuyCart',
	data() {
		return {
			show: true,
			//已经购买过的数量
			quotaUsed: 0,
			//库存阈值。低于这个值会把库存数高亮显示
			stockThreshold: 10,
			sku: {
				// 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
				// 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
				tree: [
					{
						k: '颜色', // skuKeyName：规格类目名称
						k_s: 's1', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
						v: [
							{
								id: this.proInfo.name, // skuValueId：规格值 id
								name: this.proInfo.name, // skuValueName：规格值名称
								imgUrl: this.proInfo.swiperimages[0], // 规格类目图片，只有第一个规格类目可以定义图片
								previewImgUrl: this.proInfo.swiperimages[0] // 用于预览显示的规格类目图片
							}
						],
						largeImageMode: true //  是否展示大图模式
					},
					{
						k: '尺寸', // skuKeyName：规格类目名称
						k_s: 's2', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
						v: [
							{
								id: '大码', // skuValueId：规格值 id
								name: '大码' // skuValueName：规格值名称
							},
							{
								id: '中码', // skuValueId：规格值 id
								name: '中码' // skuValueName：规格值名称
							},
							{
								id: '小码', // skuValueId：规格值 id
								name: '小码' // skuValueName：规格值名称
							}
						]
					}
				],
				// 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
				list: [
					{
						id: 3001, // skuId
						s1: this.proInfo.name, // 规格类目 k_s 为 s1 的对应规格值 id
						s2: '大码',
						price: this.proInfo.price * 100, // 价格（单位分）
						stock_num: this.proInfo.stock // 当前 sku 组合对应的库存
					},
					{
						id: 2001, // skuId
						s1: this.proInfo.name, // 规格类目 k_s 为 s1 的对应规格值 id
						s2: '中码',
						price: this.proInfo.price * 100, // 价格（单位分）
						stock_num: this.proInfo.stock // 当前 sku 组合对应的库存
					},
					{
						id: 1001, // skuId
						s1: this.proInfo.name, // 规格类目 k_s 为 s1 的对应规格值 id
						s2: '小码',
						price: this.proInfo.price * 100, // 价格（单位分）
						stock_num: this.proInfo.stock // 当前 sku 组合对应的库存
					}
				],
				price: this.proInfo.price, // 默认价格（单位元）
				stock_num: this.proInfo.stock, // 商品总库存
				collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
				none_sku: false, // 是否无规格商品
				hide_stock: false // 是否隐藏剩余库存
			},
			goods: {
				picture: this.proInfo.swiperimages[0]
			}
		}
	},
	methods: {
		onBuyClicked(skuData) {
			console.log(skuData)
		},
		async onAddCartClicked(skuData) {
			let results = await this.$http.post('/cart/add', {
				userid: window.sessionStorage.userid,
				proid: this.proInfo.proid,
				quantity: skuData.selectedNum,
				sku: skuData.selectedSkuComb.s2,
				image: this.proInfo.swiperimages[0],
				name: this.proInfo.name
			})
			if (results) {
				this.$toast.success('加购成功')
				this.show = false
			} else {
				this.$toast.fail('加购失败')
				this.show = false
			}
		}
	},
	created() {
		console.log(this.$parent.show)
	}
}
</script>

<style scoped lang="less"></style>
