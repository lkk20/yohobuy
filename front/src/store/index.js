import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	strict: true,
	state: {
		userinfo: {}
	},
	mutations: {
		loginUserinfo(state, info) {
			state.userinfo = info
		}
	},
	actions: {},
	modules: {}
})
