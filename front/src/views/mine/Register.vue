<template>
	<div>
		<nav-bar>
			<template v-slot:left>
				<van-icon name="arrow-left" @click="$router.go(-1)" />
			</template>
			<template v-slot:middle>
				欢迎注册
			</template>
		</nav-bar>
		<van-form @submit="onSubmit">
			<van-field
				v-model="name"
				name="昵称"
				label="昵称"
				placeholder="昵称或姓名"
				:rules="[
					{ required: true, message: '请填写昵称或姓名' },
					{ required: true, message: '请填写昵称或姓名' }
				]"
			/>
			<van-field
				v-model="name"
				name="手机号"
				label="手机号"
				placeholder="手机号"
				:rules="[{ required: true, message: '请填写手机号' }]"
			/>
			<van-field
				v-model="username"
				name="用户名"
				label="用户名"
				placeholder="用户名"
				:rules="[{ required: true, message: '请填写用户名' }]"
			/>
			<van-field
				v-model="password"
				type="password"
				name="密码"
				label="密码"
				placeholder="密码"
				:rules="[{ required: true, message: '请填写密码' }]"
			/>
			<div style="margin: 16px;">
				<van-button round block type="info" native-type="submit">
					提交
				</van-button>
			</div>
		</van-form>
	</div>
</template>

<script>
import NavBar from '@components/common/NavBar'
export default {
	components: {
		NavBar
	},
	name: 'Register',
	data() {
		return {
			username: '',
			password: '',
			name: '',
			tel: null
		}
	},
	methods: {
		onSubmit(values) {
			console.log('submit', values)
		}
	}
}
</script>

<style scoped lang="less">
.van-icon {
	font-size: 2rem;
	margin-top: 0.6875rem;
}
</style>
