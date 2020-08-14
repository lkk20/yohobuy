<template>
	<div class="popular">
		<h2>人气推荐</h2>
		<div class="banner">
			<van-image :src="popular.singleimagesrc" lazy-load :alt="popular.name" />
		</div>
		<div class="hot">
			<ul>
				<li>
					<img src="@assets/image/popular/p1.jpg" alt="" />
					<p>￥559</p>
					<small>50人</small>
					<small>正在浏览</small>
				</li>
				<li>
					<img src="@assets/image/popular/p2.jpg" alt="" />
					<p>￥559</p>
					<small>50人</small>
					<small>正在浏览</small>
				</li>
				<li>
					<img src="@assets/image/popular/p3.jpg" alt="" />
					<p>￥559</p>
					<small>50人</small>
					<small>正在浏览</small>
				</li>
				<li>
					<img src="@assets/image/popular/p4.jpg" alt="" />
					<p>￥559</p>
					<small>50人</small>
					<small>正在浏览</small>
				</li>
				<li>
					<img src="@assets/image/popular/p5.jpg" alt="" />
					<p>￥559</p>
					<small>50人</small>
					<small>正在浏览</small>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HomePopular',
	props: {
		popular: {
			type: [Object]
		}
	},
	data() {
		return {}
	}
}
</script>

<style scoped lang="less">
.popular {
	background-color: #f0f0f0;
	padding-bottom: 20px;
	h2 {
		text-align: center;
		font-weight: 100;
		font-size: 1.125rem;
		height: 3.125rem;
		line-height: 3.125rem;
		font-size: 1.125rem;
	}
	.hot {
		height: 13.375rem;
		overflow-x: scroll;
		padding: 0.625rem;
		background-color: white;
		ul {
			white-space: nowrap;
			height: 100%;
			li {
				display: inline-block;
				height: 100%;
				text-align: center;
				img {
					height: 75%;
					width: 75%;
				}
				small {
					display: block;
					color: gray;
				}
			}
		}
	}
}
</style>
