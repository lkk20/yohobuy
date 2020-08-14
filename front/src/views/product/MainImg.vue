<template>
	<div>
		<van-image-preview
			v-model="show"
			:images="proInfo.swiperimages"
			@change="onChange"
		>
			<template v-slot:index
				>{{ index + 1 }}/{{ proInfo.swiperimages.length }}</template
			>
		</van-image-preview>
		<div class="main-img">
			<van-swipe :autoplay="3000">
				<van-swipe-item
					v-for="(image, index) in proInfo.swiperimages"
					:key="index"
				>
					<img v-lazy="image" @click="show = true" />
				</van-swipe-item>
			</van-swipe>
			<span class="mark" v-show="proInfo.stock < 50">即将告罄</span>
		</div>
		<h3 class="title">{{ proInfo.name }}</h3>
		<h3 class="price">
			￥{{ proInfo.price
			}}<del v-show="proInfo.oldprice">￥{{ proInfo.oldprice }}</del>
		</h3>
		<div class="quesion">
			<h3>常见问题</h3>
			<div class="answer">
				<p>问:<strong>商品都是正品吗? </strong></p>
				答: 所售的商品均经品牌授权，正品保障，请您放心购买。
				<p>问: <strong> 尺码表上的尺码标准吗？</strong></p>
				答:所售商品尺寸均为人工实物测量，可能会存在1-2cm的正常误差范围。
			</div>
			<span @click="$router.push('/question')"
				>查看更多<van-icon name="arrow"
			/></span>
		</div>
		<div class="proinfo">
			<h3>商品信息</h3>
			<div class="info">
				<div v-for="(item, index) in detail" :key="index">
					{{ item }}
				</div>
			</div>
			<span class="total">{{ longDetail }}</span>
		</div>
		<div class="size">
			<h3>尺码信息</h3>
			<div class="sizeinfo">
				<div>
					<!-- 第一行 -->
					<span>吊牌尺码</span><span>参考尺码</span> <span>肩宽</span
					><span>胸围</span> <span>袖长</span><span>前衣长</span>
					<span>后衣长</span>
					<!-- 第二行 -->
					<span>S</span><span>165/80A</span> <span>44</span><span>102</span>
					<span>21</span><span>68</span>
					<span>68</span>
					<!-- 第三行 -->
					<span>S</span><span>165/80A</span> <span>44</span><span>102</span>
					<span>21</span><span>68</span>
					<span>68</span>
					<!-- 第四行 -->
					<span>S</span><span>165/80A</span> <span>44</span><span>102</span>
					<span>21</span><span>68</span>
					<span>68</span>
					<!-- 第五行 -->
					<span>S</span><span>165/80A</span> <span>44</span><span>102</span>
					<span>21</span><span>68</span>
					<span>68</span>
				</div>
			</div>
			<small>提示:左滑完整表格信息</small>
		</div>
		<div class="method">
			<h3>测量方式</h3>
			<img src="@assets/image/product/clmethod.jpg" alt="" />
		</div>
		<div class="detail">
			<h3>商品详情</h3>
			<van-image
				:src="item"
				v-for="(item, index) in proInfo.subimages"
				:key="index"
			/>
		</div>
		<div class="des">
			<h3>特别说明</h3>
			<div>
				<h5>广告禁用词</h5>
				<p>
					根据新广告法规定，所有页面不得出现广告禁用词。我们在此郑重表态：支持新广告法，也为了不影响消费者正常购物，我们已经在排查修改；本页面所有广告禁用词在此声明失效，不作为赔付理由，请为真正的消费者让路。维权是双向的，希望各位消费者理解，在此感谢！
				</p>
				<h5>页面价格</h5>
				<p>
					划线价格指商品的吊牌价、品牌指导价或该商品的曾展示过的销售价等，并非原价，仅供参考。无划线价格指商品的实时销售价，不因表述的差异改变性质。具体成交价格根据商品参加活动，或会员使用优惠券/码、有货币等发生变化，最终以订单结算页价格为准。
				</p>
				<h5>价格异常</h5>
				<p>
					可能因为存在系统缓存、页面延迟等异常情况，导致价格、促销或其他类型活动显示异常，商品具体结算信息以订单结算页面显示为准。如您发现此类情况，请立即联系我们客服调整。
				</p>
				<p>
					此说明仅当出现价格比较时有效，若商家单独对价格进行说明的，以商家的表述为准。
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		detail() {
			return this.proInfo.detail.slice(0, -1)
		},
		longDetail() {
			return this.proInfo.detail.pop()
		}
	},
	props: {
		//商品信息
		proInfo: {
			type: [Object]
		}
	},
	name: 'MainImg',
	data() {
		return {
			show: false,
			// //是否有原价
			// old: true,
			index: 0
		}
	},
	methods: {
		onChange(index) {
			this.index = index
		}
	},
	created() {}
}
</script>

<style scoped lang="less">
.main-img {
	position: relative;
	height: 26.625rem;
	padding: auto;
	.van-swipe {
		margin: auto;
		width: 18.125rem;
		height: 23.75rem;
	}
	.mark {
		position: absolute;
		top: 1.25rem;
		left: 3.75rem;
		background-color: yellow;
		display: inline-block;
		padding: 0.3125rem;
		border-radius: 0.625rem;
	}
}
h3 {
	height: 3.125rem;
	line-height: 3.125rem;
	padding-left: 1.875rem;
}
.title {
	background-color: rgb(49, 48, 48);
	color: white;
}
.price {
	color: rgb(194, 1, 1);
	del {
		color: rgb(66, 66, 66);
		font-size: 1rem;
		margin-left: 0.9375rem;
	}
}
.quesion {
	border-top: 1.25rem solid rgb(236, 234, 234);
	border-bottom: 1.25rem solid rgb(224, 222, 222);
	display: grid;
	grid-template-rows: 1fr 3fr 1fr;

	height: 15.625rem;
	.answer {
		border-top: 0.0625rem solid rgb(196, 194, 194);
		border-bottom: 0.0625rem solid rgb(196, 194, 194);
		padding: 0.625rem 1.5625rem;
	}
	span {
		color: gray;
		padding-left: 1.25rem;
		line-height: 3.125rem;
	}
}
.proinfo {
	padding: 0 0.9375rem;
	.info {
		columns: 2;
		div {
			font-size: 0.875rem;
			background-color: rgb(231, 227, 227);
			margin-bottom: 0.625rem;
			padding-left: 0.9375rem;
			line-height: 2.1875rem;
		}
	}
	.total {
		margin-top: 10px;
		display: inline-block;
		color: rgb(71, 70, 70);
		padding: 10px;
		font-size: 14px;
		background-color: rgb(231, 227, 227);
	}
}
.size {
	margin-top: 0.625rem;
	border-top: 1.25rem solid rgb(236, 234, 234);
	border-bottom: 1.25rem solid rgb(224, 222, 222);
	padding: 0 20px;
	h3 {
		padding: 0;
	}
	.sizeinfo {
		overflow-x: scroll;
		div {
			display: grid;
			grid-template-columns: repeat(7, 1fr);
			grid-template-rows: repeat(5, 1fr);
			height: 11.25rem;
			width: 43.75rem;
			grid-gap: 0.125rem;

			span {
				line-height: 32px;
				text-align: center;
				background-color: rgb(231, 227, 227);
			}
		}
	}
	small {
		display: inline-block;
		color: gray;
		height: 1.875rem;
		line-height: 1.875rem;
	}
}
.detail {
	img {
		padding: 5px 10px;
		box-sizing: border-box;
	}
}
.des {
	border-top: 1.25rem solid rgb(236, 234, 234);
	border-bottom: 1.25rem solid rgb(224, 222, 222);
	div {
		border-top: 1px solid gray;
		padding-top: 10px;
		margin: 10px 20px;
		p {
			font-size: 14px;
			color: gray;
			padding: 5px 0;
		}
	}
}
</style>
