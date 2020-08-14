<template>
	<div>
		<h3>该页面暂未开发</h3>

		<p @click="$router.replace('/home')">回到首页</p>
	</div>
</template>

<script>
export default {
	name: 'NotFound',
	data() {
		return {}
	}
}
</script>

<style scoped lang="less">
h3 {
	height: 300px;
	line-height: 300px;
	text-align: center;
}
p {
	margin-right: 30px;
	text-align: right;
}
</style>
