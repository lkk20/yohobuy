<template>
	<div>
		<nav-bar>
			<template v-slot:left
				><van-icon name="arrow-left" @click="$router.go(-1)"
			/></template>
			<template v-slot:middle>
				购买咨询
			</template>
			<template v-slot:right>
				<van-icon name="wap-home-o" @click="$router.replace('/home')" />
			</template>
		</nav-bar>
		<div class="question">
			<h3>常见问题</h3>
			<div class="answer">
				<div>
					<p>问:<strong>商品都是正品吗？</strong></p>
					<p>答: 所售的商品均经品牌授权，正品保障，请您放心购买。</p>
				</div>
				<div>
					<p>问: <strong> 尺码表上的尺码标准吗？</strong></p>
					<p>
						答:所售商品尺寸均为人工实物测量，可能会存在1-2cm的正常误差范围。
					</p>
				</div>
				<div>
					<p>问:<strong> 图片颜色和实物颜色相同吗？ </strong></p>
					<p>
						答:所有商品均采用实物专业拍摄，但由于个人显示器不同，可能导致实物与图片存在色差，最终颜色以实物为准。
					</p>
				</div>
				<div>
					<p>问:<strong> 发货及配送 </strong></p>
					<p>
						答:普通商品24小时发货，部分需调拨商品2-7天发货。合作配送的快递公司有：韵达、EMS、顺丰、中通、申通。发货后江浙沪地区1-4个工作日送达，其它地区3-6个工作日送达，少数民族和县级以下城市8-11个工作日送达。配送会由于天气，交通等不可抗拒的客观因素造成您收货时间延迟。需要说明的是：化妆品、电子产品等属于航空违禁品，需走陆运，敬请谅解。
					</p>
				</div>
				<div>
					<p>问:<strong> 退货 or 换货 </strong></p>
					<p>
						答:签收商品未经穿着不影响二次销售的情况下，7日内退货、15日内换货；退回商品保证吊牌、标签、包装完整（内衣、内裤、袜子、泳衣泳裤、贴身塑身衣类商品、香水、香薰、化妆品、电子产品等特殊商品，无质量问题不支持七天无理由退换货，敬请谅解）。
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import NavBar from '@components/common/NavBar'
export default {
	name: 'Question',
	components: {
		NavBar
	},
	data() {
		return {}
	}
}
</script>

<style scoped lang="less">
.van-icon {
	font-size: 2rem;
	margin-top: 0.6875rem;
}
.question {
	h3 {
		height: 50px;
		line-height: 50px;
		text-align: center;
		background-color: rgb(223, 219, 219);
	}
	.answer {
		background-color: rgb(223, 219, 219);
		div {
			margin: 10px 0;
			background-color: white;
			p {
				padding: 5px 10px;
			}
		}
	}
}
</style>
