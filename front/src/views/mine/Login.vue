<template>
	<div>
		<nav-bar>
			<template v-slot:left>
				<van-icon name="arrow-left" @click="$router.go(-1)" />
			</template>
			<template v-slot:middle>
				欢迎登录
			</template>
			<template v-slot:right>
				<span @click="$router.push('/register')">注册</span>
			</template>
		</nav-bar>
		<van-form @submit="onSubmit">
			<van-field
				v-model="username"
				name="username"
				label="用户名"
				placeholder="用户名"
				:rules="[{ required: true, message: '请填写用户名' }]"
			/>
			<van-field
				v-model="password"
				type="password"
				name="password"
				label="密码"
				placeholder="密码"
				:rules="[{ required: true, message: '请填写密码' }]"
			/>
			<div style="margin: 16px;">
				<van-button round block type="info" native-type="submit">
					提交
				</van-button>
				<p @click="$router.push('/forgetpassword')">忘记密码？</p>
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
	name: 'Login',
	data() {
		return {
			username: '',
			password: ''
		}
	},
	methods: {
		async onSubmit(values) {
			let userinfo = await this.$http.post('/login', {
				username: values.username,
				password: values.password
			})
			if (userinfo) {
				window.sessionStorage.setItem('userid', userinfo.userid)
				window.sessionStorage.setItem('name', userinfo.name)
				//重新页面加载vuex会消失
				this.$store.commit('loginUserinfo', userinfo)
				this.$toast.success('登录成功')
				this.$router.replace('/mine')
			} else {
				this.$toast.fail('登录失败')
			}
		}
	}
}
</script>

<style scoped lang="less">
.van-icon {
	font-size: 2rem;
	margin-top: 0.6875rem;
}
p {
	margin-top: 30px;
	text-align: end;
}
</style>
