<template>
	<div class="product">
		<div
			class="main-img"
			@click="reload()"
			@click.stop="$router.push(`/product?proid=${proInfo.proid}`)"
		>
			<van-image lazy-load :src="proInfo.mainimage" :alt="proInfo.name" />
			<div class="mark" v-show="proInfo.stock < 50">即将告罄</div>
			<div class="similar" v-show="similarShow">
				<span @click.stop="$router.push('/similar')">找相似</span>
			</div>
		</div>
		<p class="title">
			<slot name="title">{{ proInfo.name }}</slot>
		</p>
		<div class="bottom">
			<p class="price">
				<small v-show="!proInfo.oldprice">￥{{ proInfo.price }}</small>
				<small class="newprice" v-show="proInfo.oldprice"
					>￥{{ proInfo.price }}</small
				>
				<del class="oldprice" v-show="proInfo.oldprice"
					>￥{{ proInfo.oldprice }}</del
				>
			</p>
			<van-icon name="weapp-nav" @click.stop="similarShow = !similarShow" />
		</div>
	</div>
</template>

<script>
export default {
	inject: ['reload'],
	name: 'Product',
	props: {
		proInfo: { type: [Array, Object] }
	},
	data() {
		return {
			similarShow: false
		}
	},
	methods: {},
	created() {}
}
</script>

<style scoped lang="less">
.product {
	width: 50%;
	padding: 0.625rem;
	box-sizing: border-box;
	display: inline-block;
	.main-img {
		position: relative;
		.mark {
			position: absolute;
			width: 100%;
			bottom: 0.25rem;
			background-color: #ffac5b;
			text-align: center;
			font-size: 0.75rem;
			color: white;
			height: 1.375rem;
			line-height: 1.375rem;
		}
		.similar {
			position: absolute;
			width: 100%;
			height: 100%;
			bottom: 0.25rem;
			background-color: rgba(43, 38, 38, 0.5);
			font-size: 1.25rem;
			color: white;
			text-align: center;
			line-height: 200px;
			span {
				display: inline-block;
				width: 6.25rem;
				height: 6.25rem;
				border-radius: 3.125rem;
				background-color: red;
				text-align: center;
				line-height: 6.25rem;
			}
		}
	}

	.title {
		color: gray;
		font-size: 0.875rem;
		height: 2.5rem;
		overflow: hidden;
	}
	.bottom {
		display: grid;
		grid-template-columns: 3fr 1fr;
		.price {
			font-size: 0.75rem;
			.newprice {
				color: red;
			}
			.oldprice {
				color: gray;
				margin-left: 0.625rem;
			}
		}
		.van-icon {
			color: gray;
			padding-right: 0.625rem;
			justify-self: end;
		}
	}
}
</style>
