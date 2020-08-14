import axios from 'axios'

const http = axios.create({
	baseURL: 'http://localhost:3000',
	timeout: 5000
})

http.interceptors.request.use(
	config => {
		return config
	},
	err => err
)
//响应拦截
http.interceptors.response.use(
	res => {
		return res.data
	},
	err => {
		console.log(err)
	}
)
export default http
