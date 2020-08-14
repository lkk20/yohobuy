<template>
	<div class="nav-bar">
		<header>
			<div class="left">
				<slot name="left"></slot>
			</div>
			<div class="middle">
				<slot name="middle"></slot>
			</div>
			<div class="right">
				<slot name="right"></slot>
			</div>
		</header>
	</div>
</template>

<script>
export default {
	name: 'NavBar',
	data() {
		return {}
	}
}
</script>

<style scoped lang="less">
.nav-bar {
	header {
		height: 3.375rem;
		display: flex;
		align-items: center;
		text-align: center;
		.left {
			flex: 1;
			height: 100%;
			img {
				height: 100%;
				width: 100%;
			}
		}
		.middle {
			flex: 5;
			height: 100%;
			line-height: 3.0625rem;
		}
		.right {
			flex: 1;
		}
	}
}
</style>
