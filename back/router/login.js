const express = require('express')
const Login = require('../middleware/login')

const indexApp = express()
//获取所有种类接口
indexApp.post('', [Login.checkPassword], (req, res) => {
	let { userinfo } = req
	res.json(userinfo[0])
})
module.exports = indexApp
